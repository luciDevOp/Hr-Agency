<?php namespace App\Models;

use CodeIgniter\Model;

class PhotoModel extends Model
{
    protected $table = 'photos';
    protected $primaryKey = 'id';
    protected $allowedFields = ['post_id', 'type', 'file_name'];

    public function savePhoto($postId, $type, $fileName)
    {
        return $this->insert([
            'post_id' => $postId,
            'type' => $type,
            'file_name' => $fileName
        ]);
    }

    public function getPhotosByPostId($postId)
    {
        return $this->where('post_id', $postId)->findAll();
    }
}
