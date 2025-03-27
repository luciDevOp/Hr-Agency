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
      $ret            = $this->verify_login();
      if(!$ret->NotLogged)
      {

        $filters           = $this->request->getPost("Filters");


        $order_by          = $this->request->getPost("OrderBy");
      //   $pg_info           = new PaginationInfo($this->request->getPost("PaginationInfo") );
        $sql = new TableSql(
                            "SELECT *
                              FROM 
                                 candidates t1
                              WHERE 1=1"
                        );

        
        // if (!empty($filters['NumeAgent'])) {
        //     $sql->addIfNeeded($filters['NumeAgent'], '', " AND t3.Nume LIKE '%%%s%%' ");
        // }
        // if (!empty($filters['NumeClient'])) {
        //     $sql->addIfNeeded($filters['NumeClient'], '', " AND CONCAT(t2.Nume, ' ', t2.Prenume) LIKE '%%%s%%'");
        // }
        // if (isset($filters['Data']) && !empty($filters['Data'])) {
        //     if (is_array($filters['Data']) && count($filters['Data']) === 2) {
        //         $startDate = $filters['Data'][0];
        //         $endDate = $filters['Data'][1];
        //         $sql->add(" AND Date(t1.DataCreare) BETWEEN '{$startDate}' AND '{$endDate}' ");
        //     } elseif (is_array($filters['Data']) && count($filters['Data']) === 1) {
        //         $date = $filters['Data'][0];
        //         $sql->add(" AND Date(t1.DataCreare) = '{$date}' ");
        //     } else {
        //         $sql->addIfNeeded($filters['Data'], '', " AND Date(t1.DataCreare) LIKE '%%%s%%' ");
        //     }
        // }      
        $sql->addOrderBy("t1.id","DESC");


        $result = $sql->getResult();
        $rows   = $result->Rows;
      //   $pg_info->RowCount = $result->FullRowsCount;
        $ret->candidates = $rows;
      //   $ret->PaginationInfo = $pg_info;
      }

      return $this->response->setJSON($ret);   
   }

   public function get_info()
   {
      $ret            = $this->verify_login();
      if(!$ret->NotLogged)
      {
        $ret->Info = new stdClass();

      }

      echo json_encode($ret);
   }

   public function save()
   {
      $ret = $this->verify_login();

      if (!$ret->NotLogged) 
      {

      }

      return $this->response->setJSON($ret);
   }
}
