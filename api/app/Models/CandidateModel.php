<?php

namespace App\Models;

use CodeIgniter\Model;

class CandidateModel extends Model
{
    protected $table = 'candidates';
    protected $primaryKey = 'id';
    protected $allowedFields = [
        'firstname', 'lastname', 'email', 'phone_number', 
        'current_employer', 'current_job_title', 
        'additional_information', 'recommended_by', 'cv_file'
    ];
}
