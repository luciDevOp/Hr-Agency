<?php

namespace App\Controllers\Admin;

use ApiResponse;
use App\Models\JobModel;
use App\Models\JobDetailModel;
use CodeIgniter\Database\BaseConnection;
use CodeIgniter\API\ResponseTrait;
use PaginationInfo;
use DateInterval;
use DateTime;
use stdClass;
use TableSql;

class Jobs extends BaseController
{

   public function index()
   {

       $ret = $this->verify_login();
       if (!$ret->NotLogged) {

            $filters = [
                  'title' => $this->request->getPost("Filters_title"),
            ];
            $order_by          = $this->request->getPost("OrderBy");
            $pg_info = new PaginationInfo([
                  'Page' => $this->request->getPost("PaginationInfo_Page"),
                  'PerPage' => $this->request->getPost("PaginationInfo_RowsPerPage")
            ]);
   
           $sql = new TableSql(
               "SELECT * FROM jobs t1 WHERE t1.deleted = 0"
           );
           if (!empty($filters['title'])) {
               $sql->addIfNeeded($filters['title'], '', " AND t1.title LIKE '%%%s%%'");
           }
           // Adaugă ordonare
           $sql->addOrderBy("t1.id", "DESC");
           
           $sql->addLimitFromPagination($pg_info);

           $result = $sql->getResult($pg_info);
           $rows = $result->Rows;
   
           $pg_info->RowCount = $result->FullRowsCount;
           $ret->jobs = $rows;
           $ret->PaginationInfo = $pg_info;
       }
   
       return $this->response->setJSON($ret);
   }

   public function get_job()
   {
        $ret            = $this->verify_login();
        if(!$ret->NotLogged)
        {
             $id = $this->request->getPost("id");
             if($id != null)
             {
                $jobModel = new JobModel();
                $jobDetailModel = new JobDetailModel();
                $job = $jobModel->find($id);
                if ($job) {
                    $jobDetails = $jobDetailModel->getJobDetails($id);
                    $job['subtitles'] = $jobDetails;
                    $ret->job = $job;
                } else {
                    $ret->Error = true;
                    $ret->MesajEroare = 'Job not found';
                }
             }else{
                $ret->Error = true;
                $ret->MesajEroare = 'Eroare la server!';
             }
        }
        return $this->response->setJSON($ret);
   }

   public function delete_job()
   {
      $ret            = $this->verify_login();
      if(!$ret->NotLogged)
      {
         $id = $this->request->getPost("id");
         if($id != null)
         {
            $this->db->table('jobs')->where('id', $id)->update(['deleted' => 1]);
         }else{
            $ret->Error = true;
            $ret->MesajEroare = 'Eroare la server!';
         }
      }
      return $this->response->setJSON($ret);   
   }

   public function complete_job()
   {
        $ret            = $this->verify_login();
        if(!$ret->NotLogged)
        {
            $id = $this->request->getPost("id");
            if($id != null)
            {
                $this->db->table('jobs')->where('id', $id)->update(['completed' => 1]);
            }else{
                $ret->Error = true;
                $ret->MesajEroare = 'Eroare la server!';
            }
        }
        return $this->response->setJSON($ret); 
   }

   public function uncomplete_job()
    {
          $ret            = $this->verify_login();
          if(!$ret->NotLogged)
          {
                $id = $this->request->getPost("id");
                if($id != null)
                {
                 $this->db->table('jobs')->where('id', $id)->update(['completed' => 0]);
                }else{
                 $ret->Error = true;
                 $ret->MesajEroare = 'Eroare la server!';
                }
          }
          return $this->response->setJSON($ret);
    }

    public function save()
    {
        $ret = $this->verify_login();
        if (!$ret->NotLogged) {
            $jobData = json_decode(file_get_contents('php://input'), true); // Decode JSON payload into array
            $jobId = $jobData['id'] ?? null;
            unset($jobData['id']); 
            $subtitles = $jobData['subtitles'] ?? null;
            unset($jobData['subtitles']);
            
            $jobModel = new JobModel();
            if ($jobId) {
                $jobModel->update($jobId, $jobData);
            } else {
                $jobId = $jobModel->insert($jobData);
            }

            $jobDetails = $jobData['subtitles'] ?? [];

            $jobDetailModel = new JobDetailModel();
            $ret->jobId = $jobId;
            $ret->subtitles = $subtitles;
            if ($jobId && !empty($subtitles)) {
                $insertedDetails = $jobDetailModel->insertJobDetails($jobId, $subtitles);
                if (!$insertedDetails) {
                    $ret->Error = true;
                    $ret->MesajEroare = "Check subtitles and list items!";
                }
            }else{
                $ret->Error = true;
                $ret->MesajEroare = "The job has no subtitles and list items!";
            }
        }
        
        return $this->response->setJSON($ret);
    }

    public function fetchAllJobs()
    {
        $ret = new \stdClass();
        $jobModel = new JobModel();
    
        $page = (int)($this->request->getPost('PaginationInfo_Page') ?? 1);
        $rowsPerPage = (int)($this->request->getPost('PaginationInfo_RowsPerPage') ?? 10);
        $completed = $this->request->getPost('Filters_completed');
    
        $offset = ($page - 1) * $rowsPerPage;
    
        $ret->jobs = $jobModel->getJobsWithFilters($completed, $rowsPerPage, $offset);
        $ret->PaginationInfo = [
            'page' => $page,
            'rowsPerPage' => $rowsPerPage,
            'RowCount' => $jobModel->countJobsWithFilters($completed),
        ];
    
        return $this->response->setJSON($ret);
    }




}
