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
               "SELECT t1.*, t2.name as category
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
       $ret = $this->verify_login();
       if (!$ret->NotLogged) {
           $id = $this->request->getPost("id");
           if ($id != null) {
               $postModel = new PostModel();
               $post = $postModel->find($id);
               if ($post) {
                   $photoModel = new \App\Models\PhotoModel();
                   $photos = $photoModel->where('post_id', $id)->findAll();
   
                   $post['card_photo_url'] = null;
                   $post['page_photos'] = [];
   
                   foreach ($photos as $photo) {
                       if ($photo['type'] === 'card_photo') {
                           $post['card_photo_url'] = base_url('uploads/cards/' . $photo['file_name']);
                       } elseif ($photo['type'] === 'page_photo') {
                           $post['page_photos'][] = [
                               'id' => $photo['id'],
                               'url' => base_url('uploads/pages/' . $photo['file_name']),
                               'file_name' => $photo['file_name'],
                           ];
                       }
                   }
   
                   $ret->post = $post;
               } else {
                   $ret->Error = true;
                   $ret->MesajEroare = 'Postarea nu a fost gasita!';
               }
           } else {
               $ret->Error = true;
               $ret->MesajEroare = 'Eroare la server!';
           }
       }
       return $this->response->setJSON($ret);
   }
   
   public function delete_photo()
   {
      $ret            = $this->verify_login();
      if(!$ret->NotLogged)
      {
         $id = $this->request->getPost("id");
         if($id != null)
         {
            $this->db->table('photos')->where('id', $id)->delete();
            //delete photos 

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

   public function delete_card_photo()
   {
      $ret            = $this->verify_login();
      if(!$ret->NotLogged)
      {
         $id = $this->request->getPost("post_id");
         if($id != null)
         {
            $this->db->table('photos')->where('post_id', $id)->where('type', 'card_photo')->delete();

         }else{
            $ret->Error = true;
            $ret->MesajEroare = 'Eroare la server!';
         }
      }
      return $this->response->setJSON($ret);   
   }

    /**
     * Create a slug from a string
     *
     * @param string $string
     * @return string
     */



     private function createSlug($string, $postModel, $postId = null)
     {
         $slug = mb_strtolower($string, 'UTF-8');
     
         $slug = preg_replace('/[^\p{L}\p{Nd}\s-]/u', '', $slug);
         $slug = preg_replace('/[\s-]+/', '-', $slug);
         $slug = trim($slug, '-');
     
         $originalSlug = $slug;
         $i = 1;
     
         while (true) {
             $builder = $postModel->where('slug', $slug);
             if ($postId) {
                 $builder->where('id !=', $postId);
             }
             $exists = $builder->first();
     
             if (!$exists) {
                 break;
             }
     
             $slug = $originalSlug . '-' . $i;
             $i++;
         }
     
         return $slug;
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
       $title = $this->request->getPost('title');
       $slug = $this->createSlug($title, $postModel, $postId);
       $data = [
           'title'        => $title,
           'description'  => $this->request->getPost('description'),
           'category_id'  => $categoryId,
           'page_content' => $this->request->getPost('page_content'),
           'slug'         => $slug,
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

   public function fetchAllPosts()
   {
        $ret = new \stdClass();
    
        $postModel = new PostModel();
        $posts = $postModel->getPostsWithPhotos();
    
        $ret->posts = $posts;
        return $this->response->setJSON($ret);
   }

   public function fetchCategories()
   {
        $ret = new \stdClass();
        $type = $this->request->getPost('type');
        $categoryModel = new \App\Models\CategoryModel();

        $categories = $categoryModel->where('deleted !=', 1)
            ->where('type', $type)
            ->findAll();
    
        $ret->categories = $categories;
        return $this->response->setJSON($ret);
   }

   public function fetchPostBySlug()
   {
        $ret = new \stdClass();
    
        $slug = $this->request->getPost('slug');
        $postModel = new PostModel();
        $post = $postModel->where('slug', $slug)->where('deleted', 0)->first();
        $photoModel = new \App\Models\PhotoModel();

        if ($post) {
            $photos = $photoModel->getPhotosByPostId($post['id']);
            $post['photos'] = $photos;
            $ret->post = $post;
        } else {
            $ret->Error = true;
            $ret->MesajEroare = 'Postare nu a fost gasita!';
        }
    
        return $this->response->setJSON($ret);
   }
   

}
