<?php namespace App\Models;

use CodeIgniter\Model;

class PostModel extends Model
{
    protected $table = 'posts';
    protected $primaryKey = 'id';
    protected $allowedFields = [
        'title',
        'description',
        'category_id',
        'page_content'
    ];
    

    protected $validationRules = [
        'title' => 'required|max_length[150]',
    ];

    // Fetch job by ID
    public function getPostById($id)
    {
        return $this->asArray()->where('id', $id)->first();
    }

    // Fetch all jobs with optional filters and pagination
    public function getPosts($filters = [], $page = 1, $perPage = 10)
    {
        $builder = $this->builder();
        if (!empty($filters['title'])) {
            $builder->like('title', $filters['title']);
        }

        // Pagination
        $builder->limit($perPage, ($page - 1) * $perPage);
        return $builder->get()->getResult();
    }

    // Count total jobs for pagination
    public function countPosts($filters = [])
    {
        $builder = $this->builder();
        if (!empty($filters['title'])) {
            $builder->like('title', $filters['title']);
        }

        return $builder->countAllResults();
    }
}
