<?php namespace App\Models;

use CodeIgniter\Model;

class JobModel extends Model
{
    protected $table = 'jobs';
    protected $primaryKey = 'id';
    protected $allowedFields = [
        'title', 
        'location', 
        'description', 
        'environment', 
        'type', 
    ];

    protected $validationRules = [
        'title' => 'required|max_length[150]',
        'location' => 'required|max_length[500]',
        'description' => 'required|max_length[500]',
        'environment' => 'required|in_list[on site,remote,hybrid]',
        'type' => 'required|in_list[full time,part time]',
    ];

    // Fetch job by ID
    public function getJobById($id)
    {
        return $this->asArray()->where('id', $id)->first();
    }

    // Fetch all jobs with optional filters and pagination
    public function getJobs($filters = [], $page = 1, $perPage = 10)
    {
        $builder = $this->builder();
        if (!empty($filters['title'])) {
            $builder->like('title', $filters['title']);
        }
        if (!empty($filters['location'])) {
            $builder->like('location', $filters['location']);
        }
        if (!empty($filters['environment'])) {
            $builder->where('environment', $filters['environment']);
        }

        // Pagination
        $builder->limit($perPage, ($page - 1) * $perPage);
        return $builder->get()->getResult();
    }

    // Count total jobs for pagination
    public function countJobs($filters = [])
    {
        $builder = $this->builder();
        if (!empty($filters['title'])) {
            $builder->like('title', $filters['title']);
        }
        if (!empty($filters['location'])) {
            $builder->like('location', $filters['location']);
        }
        if (!empty($filters['environment'])) {
            $builder->where('environment', $filters['environment']);
        }

        return $builder->countAllResults();
    }
}
