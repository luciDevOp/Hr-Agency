<?php

namespace App\Controllers;

use App\Models\CandidateModel;
use CodeIgniter\HTTP\ResponseInterface;

class CandidateController extends BaseController
{
    public function save()
    {
        $model = new CandidateModel();
        $db = \Config\Database::connect();

        $validation = \Config\Services::validation();
        $validation->setRules([
            'firstname' => 'required',
            'lastname'  => 'required',
            'email'     => 'required|valid_email',
            'phone_number' => 'required',
            'cv_file' => 'uploaded[cv_file]|max_size[cv_file,2048]|ext_in[cv_file,pdf,doc,docx,jpg,jpeg,png]',
        ]);

        if (!$this->validate($validation->getRules())) {
            return $this->response->setJSON([
                'status' => 'error',
                'errors' => $validation->getErrors()
            ]);
        }

        $cvFile = $this->request->getFile('cv_file');
        $cvFileName = $cvFile->getRandomName();
        $cvFile->move(FCPATH . 'uploads/cvs/', $cvFileName);

        $optionalFields = [
            'current_employer' => $this->request->getPost('current_employer'),
            'current_job_title' => $this->request->getPost('current_job_title'),
            'additional_information' => $this->request->getPost('additional_information'),
            'recommended_by' => $this->request->getPost('recommended_by'),
        ];
    
        foreach ($optionalFields as $key => $value) {
            $optionalFields[$key] = $value === '' ? null : $value;
        }
    
        $db->transStart();

        // Insert candidate
        $model->insert([
            'firstname'  => $this->request->getPost('firstname'),
            'lastname'   => $this->request->getPost('lastname'),
            'email'      => $this->request->getPost('email'),
            'phone_number' => $this->request->getPost('phone_number'),
            'current_employer' => $optionalFields['current_employer'],
            'current_job_title' => $optionalFields['current_job_title'],
            'additional_information' => $optionalFields['additional_information'],
            'recommended_by' => $optionalFields['recommended_by'],
            'cv_file' => $cvFileName
        ]);
    
        $candidateId = $model->insertID(); // Immediately get it
    
        $jobId = $this->request->getPost('job_id');
        if ($jobId !== null) {
            $jobModel = new \App\Models\JobModel();
            $job = $jobModel->find($jobId);
    
            if (!$job || $job['deleted'] == 1 || $job['completed'] == 1) {
                $db->transRollback(); // Cancel everything
                return $this->response->setJSON([
                    'status' => 'error',
                    'errors' => ['Job not found or already completed.']
                ]);
            }
    
            $jobApplicationModel = new \App\Models\JobApplicationModel();
            $jobApplicationModel->insert([
                'job_id' => $jobId,
                'candidate_id' => $candidateId,
                'status' => 'applied'
            ]);
        }
    
        $db->transComplete(); // Commit transaction
        if ($jobId !== null) {
            $email = \Config\Services::email();
            $email->initialize([
                'protocol' => 'smtp',
                'SMTPHost' => 'mail.hha.ro',
                'SMTPUser' => 'jobs@hha.ro',
                'SMTPPass' => 'jobs.hha',
                'SMTPPort' => 465,
                'SMTPCrypto' => 'ssl', // or 'tls' with port 587
                'mailType' => 'html',
                'charset' => 'utf-8',
            ]);

            $email->setFrom('jobs@hha.ro', 'Your Company');
            $email->setTo('office@hha.ro'); // change to the appropriate recipient
            $email->setSubject('New Job Application Received');
        
            $fullName = $this->request->getPost('firstname') . ' ' . $this->request->getPost('lastname');
            $email->setMessage("
                A new application has been submitted.
        
                Name: $fullName
                Email: " . $this->request->getPost('email') . "
                Phone: " . $this->request->getPost('phone_number') . "
        
                View the full application in the admin panel.
            ");
        
            $cvPath = FCPATH . 'uploads/cvs/' . $cvFileName;
        
            if (file_exists($cvPath)) {
                $email->attach($cvPath);
            }
        
            if (!$email->send()) {
                
            }
        }
        

        return $this->response->setJSON([
            'status' => 'success',
        ]);

    }
}
