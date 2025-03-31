<?php

namespace App\Controllers\Admin;

use ApiResponse;
use CodeIgniter\Database\BaseConnection;
use CodeIgniter\API\ResponseTrait;
use PaginationInfo;
use DateInterval;
use DateTime;
use stdClass;
use TableSql;

class Dashboard extends BaseController
{

   public function index()
   {

       $ret = $this->verify_login();
       if (!$ret->NotLogged) {

            $filters = [
                  'name' => $this->request->getPost("Filters_name"),
                  'email' => $this->request->getPost("Filters_email"),
                  'phone' => $this->request->getPost("Filters_phone")
            ];
            $order_by          = $this->request->getPost("OrderBy");
            $pg_info = new PaginationInfo([
                  'Page' => $this->request->getPost("PaginationInfo_Page"),
                  'PerPage' => $this->request->getPost("PaginationInfo_RowsPerPage")
            ]);
   
           $sql = new TableSql(
               "SELECT * FROM candidates t1 WHERE t1.deleted = 0"
           );
   
           // Adaugă filtre dacă există
           if (!empty($filters['name'])) {
               $sql->addIfNeeded($filters['name'], '', " AND CONCAT(t1.firstname, ' ', t1.lastname) LIKE '%%%s%%'");
           }
           if (!empty($filters['email'])) {
               $sql->addIfNeeded($filters['email'], '', " AND t1.email LIKE '%%%s%%'");
           }
           if (!empty($filters['phone'])) {
               $sql->addIfNeeded($filters['phone'], '', " AND t1.phone_number LIKE '%%%s%%'");
           }
   
           // Adaugă ordonare
           $sql->addOrderBy("t1.id", "DESC");
           
           $sql->addLimitFromPagination($pg_info);

           // Execută query-ul cu paginare
           $result = $sql->getResult($pg_info);
           $rows = $result->Rows;
   
           // Adaugă URL-ul pentru fișierele CV
           foreach ($rows as $row) {
               if (!empty($row->cv_file)) {
                   $row->cv_url = base_url('uploads/cvs/' . $row->cv_file);
               }
           }
           // Returnează rezultatele și informațiile de paginare
           $pg_info->RowCount = $result->FullRowsCount;
           $ret->candidates = $rows;
           $ret->PaginationInfo = $pg_info;
       }
   
       return $this->response->setJSON($ret);
   }

   public function delete_cv()
   {
      $ret            = $this->verify_login();
      if(!$ret->NotLogged)
      {
         $id = $this->request->getPost("id");
         if($id != null)
         {
            $this->db->table('candidates')->where('id', $id)->update(['deleted' => 1]);
         }else{
            $ret->Error = true;
            $ret->MesajEroare = 'Eroare la server!';
         }
      }
      return $this->response->setJSON($ret);   
   }

    public function download_cv($filename)
    {
        $path = FCPATH . 'uploads/cvs/' . $filename;

        if (!file_exists($path)) {
            throw \CodeIgniter\Exceptions\PageNotFoundException::forPageNotFound();
        }

        return $this->response->download($path, null);
    }
}
