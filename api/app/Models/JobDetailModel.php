<?php namespace App\Models;

use CodeIgniter\Model;

class JobDetailModel extends Model
{
    protected $table = 'job_details';
    protected $primaryKey = 'id';
    protected $allowedFields = [
        'job_id', 
        'subtitle', 
        'list_item'
    ];

    // Validation rules (optional)
    // protected $validationRules = [
    //     'job_id' => 'required|integer',
    //     'subtitle' => 'required|max_length[255]',
    //     'list_item' => 'required|max_length[500]'
    // ];

    // Fetch all job details for a specific job
    public function getJobDetails($jobId)
    {
        $rawDetails = $this->asArray()
            ->where('job_id', $jobId)
            ->findAll();
    
        $grouped = [];
    
        foreach ($rawDetails as $detail) {
            $subtitle = $detail['subtitle'];
            $listItem = $detail['list_item'];
    
            if (!isset($grouped[$subtitle])) {
                $grouped[$subtitle] = [];
            }
    
            $grouped[$subtitle][] = $listItem;
        }
    
        // Convertim în formatul dorit de frontend
        $structured = [];
        foreach ($grouped as $subtitle => $list) {
            $structured[] = [
                'subtitle' => $subtitle,
                'list' => $list
            ];
        }
    
        return $structured;
    }

    // Insert job details (subtitles and list items)
    public function insertJobDetails($jobId, $subtitles)
    {
        // Delete existing job details before inserting new ones
        $this->where('job_id', $jobId)->delete();
    
        // Prepare data to insert
        $data = [];
        foreach ($subtitles as $subtitle) {
            if (!empty($subtitle['list'])) {
                foreach ($subtitle['list'] as $listItem) {
                    if (!empty($listItem)) { // Ensure that list items are not empty
                        $data[] = [
                            'job_id' => $jobId,
                            'subtitle' => $subtitle['subtitle'],
                            'list_item' => $listItem
                        ];
                    }
                }
            }
        }
    
        if (empty($data)) {
            // If no data to insert, return false or handle as an error
            return false;
        }
    
        // Insert new job details
        return $this->insertBatch($data);
    }
    
}
