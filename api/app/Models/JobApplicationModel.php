<?php

namespace App\Models;

use CodeIgniter\Model;

class JobApplicationModel extends Model
{
    protected $table = 'job_applications';
    protected $primaryKey = 'id';

    protected $allowedFields = [
        'job_id',
        'candidate_id',
        'status',
        'created_at',
        'updated_at'
    ];

    protected $useTimestamps = true;
}
