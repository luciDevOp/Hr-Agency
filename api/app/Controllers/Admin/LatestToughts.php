<?php

namespace App\Controllers\Admin;

use ApiResponse;
use App\Models\LatestToughtsModel;
use CodeIgniter\Database\BaseConnection;
use CodeIgniter\API\ResponseTrait;
use PaginationInfo;
use DateInterval;
use DateTime;
use stdClass;
use TableSql;

class LatestToughts extends BaseController
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
               "SELECT t1.*, c.name AS category_name
                FROM latest_toughts t1 
                LEFT JOIN categories c ON c.id = t1.category_id
                WHERE 1=1
               "
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
           $ret->latest_toughts = $rows;
           $ret->PaginationInfo = $pg_info;
       }
   
       return $this->response->setJSON($ret);
   }

   public function get_latest_tought()
   {
        $ret            = $this->verify_login();
        if(!$ret->NotLogged)
        {
             $id = $this->request->getPost("id");
             if($id != null)
             {
                $latestToughtModel = new LatestToughtsModel();
                $latestTought = $latestToughtModel->find($id);
                if ($latestTought) {
                    $ret->latest_tought = $latestTought;
                } else {
                    $ret->Error = true;
                    $ret->MesajEroare = 'Latest tought not found';
                }
             }else{
                $ret->Error = true;
                $ret->MesajEroare = 'Eroare la server!';
             }
        }
        return $this->response->setJSON($ret);
   }

   public function delete_latest_tought()
   {
      $ret            = $this->verify_login();
      if(!$ret->NotLogged)
      {
         $id = $this->request->getPost("id");
         if($id != null)
         {
            $this->db->table('latest_toughts')->where('id', $id)->delete();
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
            $data = json_decode(file_get_contents('php://input'), true); // Decode JSON payload into array
            $latestToughtId = $data['id'] ?? null;

            
            $latestToughtModel = new LatestToughtsModel();
            if ($latestToughtId) {
                $latestToughtModel->update($latestToughtId, $data);
            } else {
                $latestToughtId = $latestToughtModel->insert($data);
            }
        }
        
        return $this->response->setJSON($ret);
    }

    public function fetchAllLatestToughts()
    {
        $ret = new \stdClass();
        $latestToughtModel = new LatestToughtsModel();
    
        $page = (int)($this->request->getPost('PaginationInfo_Page') ?? 1);
        $rowsPerPage = (int)($this->request->getPost('PaginationInfo_RowsPerPage') ?? 10);
    
        $offset = ($page - 1) * $rowsPerPage;
    
        $ret->latest_toughts = $latestToughtModel->getLatestToughtsWithFilters($rowsPerPage, $offset);
        $ret->PaginationInfo = [
            'page' => $page,
            'rowsPerPage' => $rowsPerPage,
            'RowCount' => $latestToughtModel->getLatestToughtsWithFilters(),
        ];
    
        return $this->response->setJSON($ret);
    }




}
