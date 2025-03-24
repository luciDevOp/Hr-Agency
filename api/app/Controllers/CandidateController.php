<?php

namespace App\Controllers;

use App\Models\CandidateModel;
use CodeIgniter\HTTP\ResponseInterface;

class CandidateController extends BaseController
{
    public function save()
    {
        $model = new CandidateModel();

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
        $cvFile->move(WRITEPATH . 'uploads/cvs/', $cvFileName);

        $optionalFields = [
            'current_employer' => $this->request->getPost('current_employer'),
            'current_job_title' => $this->request->getPost('current_job_title'),
            'additional_information' => $this->request->getPost('additional_information'),
            'recommended_by' => $this->request->getPost('recommended_by'),
        ];
    
        foreach ($optionalFields as $key => $value) {
            $optionalFields[$key] = $value === '' ? null : $value;
        }
    
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

        return $this->response->setJSON([
            'status' => 'success',
        ]);
    }
}
