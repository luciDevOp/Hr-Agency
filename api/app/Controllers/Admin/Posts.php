<?php

namespace App\Controllers\Admin;

use ApiResponse;
use App\Models\PostModel;
use CodeIgniter\Database\BaseConnection;
use CodeIgniter\API\ResponseTrait;
use PaginationInfo;
use DateInterval;
use DateTime;
use stdClass;
use TableSql;

class Posts extends BaseController
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
               "SELECT *, t2.name as category
                    FROM posts t1 
                    LEFT JOIN categories t2 ON t1.category_id = t2.id
                    WHERE t1.deleted = 0"
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
           $ret->posts = $rows;
           $ret->PaginationInfo = $pg_info;
       }
   
       return $this->response->setJSON($ret);
   }

   public function get_post()
   {
        $ret            = $this->verify_login();
        if(!$ret->NotLogged)
        {
            $id = $this->request->getPost("id");
            if($id != null)
            {
                $postModel = new PostModel();
                $post = $postModel->find($id);
                if ($post) {
                    $ret->post = $post;
                } else {
                    $ret->Error = true;
                    $ret->MesajEroare = 'Postare nu a fost gasita!';
                }
            }else{
                $ret->Error = true;
                $ret->MesajEroare = 'Eroare la server!';
            }
        }
        return $this->response->setJSON($ret);
   }

   public function delete_post()
   {
      $ret            = $this->verify_login();
      if(!$ret->NotLogged)
      {
         $id = $this->request->getPost("id");
         if($id != null)
         {
            $this->db->table('posts')->where('id', $id)->update(['deleted' => 1]);
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
       if ($ret->NotLogged) {
           return $this->response->setJSON($ret);
       }
      
       $postModel = new \App\Models\PostModel();
       $photoModel = new \App\Models\PhotoModel();
   
       $categoryId = (int) $this->request->getPost('category_id');

       $postId = $this->request->getPost('id');
       $data = [
           'title'        => $this->request->getPost('title'),
           'description'  => $this->request->getPost('description'),
           'category_id'  => $categoryId,
           'page_content' => $this->request->getPost('page_content'),
       ];


   
       if ($postId) {
           $postModel->update($postId, $data);
       } else {
           $postModel->insert($data);
           $postId = $postModel->insertID();
       }
   
       // Save card photo
       $cardPhoto = $this->request->getFile('card_photo');
       if ($cardPhoto && $cardPhoto->isValid() && !$cardPhoto->hasMoved()) {
           $cardPhotoName = $cardPhoto->getRandomName();
           $cardPhoto->move(FCPATH . 'uploads/cards/', $cardPhotoName);
   
           // Save to photos table
           $photoModel->savePhoto($postId, 'card_photo', $cardPhotoName);
       }
   
       // Save page photos
       $pagePhotos = $this->request->getFiles()['page_photos'] ?? [];
       if (is_array($pagePhotos)) {
           foreach ($pagePhotos as $photo) {
               if ($photo->isValid() && !$photo->hasMoved()) {
                   $photoName = $photo->getRandomName();
                   $photo->move(FCPATH . 'uploads/pages/', $photoName);
   
                   $photoModel->savePhoto($postId, 'page_photo', $photoName);
               }
           }
       }
   
       $ret->post = $postModel->find($postId);
       return $this->response->setJSON($ret);
   }
   
   

}
