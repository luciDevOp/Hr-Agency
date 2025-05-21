<?php

namespace App\Controllers;
use App\Controllers\BaseController;
use mysqli;

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
        $query = $db->query('SELECT * FROM auth_token');
        $result = $query->getResult();
        echo json_encode($result);
    }
    public function test_db2()
    {
        $mysqli = new mysqli('localhost', 'hha_user', '*unrd-Xk9iv~', 'hha_db');
    
        if ($mysqli->connect_error) {
            die('Connect Error (' . $mysqli->connect_errno . ') '
                    . $mysqli->connect_error);
        }
        echo 'Connection successful!';
    }

}