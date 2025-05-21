<?php

namespace App\Controllers\Admin;

use ApiResponse;
use App\Models\CategoryModel;
use CodeIgniter\Database\BaseConnection;
use CodeIgniter\API\ResponseTrait;
use PaginationInfo;
use DateInterval;
use DateTime;
use stdClass;
use TableSql;

class Categories extends BaseController
{

   public function index()
   {

       $ret = $this->verify_login();
       if (!$ret->NotLogged) {

            $filters = [
                  'name' => $this->request->getPost("Filters_name"),
            ];
            $order_by          = $this->request->getPost("OrderBy");
            $pg_info = new PaginationInfo([
                  'Page' => $this->request->getPost("PaginationInfo_Page"),
                  'PerPage' => $this->request->getPost("PaginationInfo_RowsPerPage")
            ]);
   
           $sql = new TableSql(
               "SELECT * FROM categories t1 WHERE 1=1"
           );
           if (!empty($filters['name'])) {
               $sql->addIfNeeded($filters['name'], '', " AND t1.name LIKE '%%%s%%'");
           }
           // Adaugă ordonare
           $sql->addOrderBy("t1.id", "DESC");
           
           $sql->addLimitFromPagination($pg_info);

           $result = $sql->getResult($pg_info);
           $rows = $result->Rows;
   
           $pg_info->RowCount = $result->FullRowsCount;
           $ret->categories = $rows;
           $ret->PaginationInfo = $pg_info;
       }
   
       return $this->response->setJSON($ret);
   }

   public function delete_category()
   {
      $ret            = $this->verify_login();
      if(!$ret->NotLogged)
      {
         $id = $this->request->getPost("id");
         if($id != null)
         {
            $this->db->table('categories')->where('id', $id)->delete();
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
            $categoryId = $data['id'] ?? null;

            
            $categoryModel = new CategoryModel();
            if ($categoryId) {
                $categoryModel->update($categoryId, $data);
            } else {
                $categoryId = $categoryModel->insert($data);
            }
        }
        
        return $this->response->setJSON($ret);
    }





}
