<?php

namespace App\Controllers;

class Test extends BaseController
{
    public function test()
    {
        echo 'test';
    }

    public function test_db()
    {
        $db = \Config\Database::connect();
        if ($db->connect_errno) {
            echo 'Failed to connect to MySQL: ' . $db->connect_error;
            exit();
        }
        $query = $db->query('SELECT * FROM users');
        $result = $query->getResult();
        echo json_encode($result);
    }
}
