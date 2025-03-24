<?php

namespace App\Controllers\Admin;

use ApiResponse;
use CodeIgniter\API\ResponseTrait;
use CodeIgniter\Database\BaseConnection;


class Login extends BaseController
{
    public function test()
    {
        echo 'test';
    }
    
    public function login()
    {
        $ret = new ApiResponse();

        $email      = $this->request->getPost("email");
        $password     = $this->request->getPost("password");

        $user       = $this->db->query('SELECT * FROM users WHERE email=? AND password=?', [ $email, md5(strval($password)) ] )->getRow();
        if ( $user == null ) {
            $ret->setError("Date incorecte!");
        } else {


            $datetime = date('Y-m-d H:i:s', strtotime('+24 hours'));
            $token = bin2hex(random_bytes(16));


            $currentDate = time();
            $futureDate = strtotime("+5 minute", $currentDate);
            $formatDate = date("Y-m-d H:i:s", $futureDate);
            
            $data = [
                'id_user' => $user->id,
                'login_date' => date('Y-m-d H:i:s'),
                'expire_date' => $datetime,
                'token' => $token,
                'ip_direct' => $_SERVER['REMOTE_ADDR'],
                'ip_forwarded' => isset($_SERVER['HTTP_X_FORWARDED_FOR']) ? $_SERVER['HTTP_X_FORWARDED_FOR'] : null,
            ];

            $this->db->table('auth_token')->insert($data);

            $ret->expiry             = date('Y-m-d H:i:s');
            $ret->Token             = $token;
            $ret->Nume              = $user->name;
            $ret->Email             = $user->email;
            if($formatDate>$user->last_seen){
                $this->db->table('users')->where('Id', $user->id)->update(['last_seen' => date('Y-m-d H:i:s')]);
            }
        }
        return $this->response->setJSON($ret);
    }
}