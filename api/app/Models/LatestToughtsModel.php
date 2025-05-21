<?php

namespace App\Models;

use CodeIgniter\Model;

class LatestToughtsModel extends Model
{
    protected $table = 'latest_toughts';
    protected $primaryKey = 'id';
    protected $allowedFields = [
        'category_id',
        'title',
        'description',
    ];

    public function getLatestToughtsWithFilters($limit = 10, $offset = 0)
    {
        $builder = $this->db->table('latest_toughts t')
            ->select('t.*, c.name AS category_name')
            ->join('categories c', 'c.id = t.category_id', 'left')
            ->orderBy('t.created_at', 'DESC')
            ->limit($limit, $offset);
    
        $results = $builder->get()->getResultArray();
    
        return $results ?? [];
    }
    
    
    

    public function countLatestToughtsWithFilters()
    {
        $latestToughtsBuilder = $this->db->table('latest_toughts');

        return $latestToughtsBuilder->countAllResults();
    }
}
