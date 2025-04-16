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

    public function getAllJobsWithoutDeleted()
    {
        $builder = $this->builder();
        $builder->where('deleted', 0);
        $builder->select('jobs.*, job_details.subtitle, job_details.list_item');
        $builder->join('job_details', 'jobs.id = job_details.job_id', 'left');
        $builder->orderBy('jobs.id', 'DESC');
    
        $results = $builder->get()->getResultArray(); 
    
        $groupedJobs = [];
    
        foreach ($results as $row) {
            $jobId = $row['id'];
    
            if (!isset($groupedJobs[$jobId])) {
                $groupedJobs[$jobId] = [
                    'id' => $row['id'],
                    'title' => $row['title'],
                    'location' => $row['location'],
                    'description' => $row['description'],
                    'environment' => $row['environment'],
                    'completed' => $row['completed'],
                    'type' => $row['type'],                    
                    'subtitles' => [],
                ];
            }
    
            // Group by subtitle, just like in getJobDetails()
            $subtitle = $row['subtitle'];
            $listItem = $row['list_item'];
    
            if (!empty($subtitle)) {
                // Find if subtitle already exists
                $index = array_search($subtitle, array_column($groupedJobs[$jobId]['subtitles'], 'subtitle'));
    
                if ($index === false) {
                    // Not found, create it
                    $groupedJobs[$jobId]['subtitles'][] = [
                        'subtitle' => $subtitle,
                        'list' => [$listItem]
                    ];
                } else {
                    // Append to existing
                    $groupedJobs[$jobId]['subtitles'][$index]['list'][] = $listItem;
                }
            }
        }

    
        return array_values($groupedJobs);
    }

    public function getJobsWithFilters($completed = null, $limit = 10, $offset = 0)
    {
        $jobBuilder = $this->db->table('jobs')
                            ->where('deleted', 0);
    
        if ($completed !== null) {
            $jobBuilder->where('completed', $completed);
        }
    
        $jobBuilder->orderBy('id', 'DESC')
                   ->limit($limit, $offset);
    
        $jobs = $jobBuilder->get()->getResultArray();
    
        if (empty($jobs)) {
            return [];
        }
    
        $jobIds = array_column($jobs, 'id');
    
        $detailsBuilder = $this->db->table('job_details')
                                ->whereIn('job_id', $jobIds)
                                ->get()
                                ->getResultArray();
    
        $detailsByJobId = [];
        foreach ($detailsBuilder as $detail) {
            $jobId = $detail['job_id'];
            $subtitle = $detail['subtitle'];
            $listItem = $detail['list_item'];
    
            if (!isset($detailsByJobId[$jobId])) {
                $detailsByJobId[$jobId] = [];
            }
    
            $index = array_search($subtitle, array_column($detailsByJobId[$jobId], 'subtitle'));
    
            if ($index === false) {
                $detailsByJobId[$jobId][] = [
                    'subtitle' => $subtitle,
                    'list' => [$listItem]
                ];
            } else {
                $detailsByJobId[$jobId][$index]['list'][] = $listItem;
            }
        }
    
        foreach ($jobs as &$job) {
            $job['subtitles'] = $detailsByJobId[$job['id']] ?? [];
        }
    
        return $jobs;
    }
    
    

    public function countJobsWithFilters($completed = null)
    {
        $builder = $this->db->table('jobs')
                            ->where('deleted', 0);

        if ($completed !== null) {
            $builder->where('completed', $completed);
        }

        return $builder->countAllResults();
    }

    
    
}
