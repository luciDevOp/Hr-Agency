<?php
namespace App\Controllers\Admin;

use App\Controllers\Admin\BaseController;

use ApiResponse;
use CodeIgniter\API\ResponseTrait;
use CodeIgniter\Database\BaseConnection;


class Login extends BaseController
{
    
    public function login()
    {
        $ret = new \stdClass();

        $email      = $this->request->getPost("email");
        $password     = $this->request->getPost("password");

        $user = $this->db->query(
            'SELECT * FROM users WHERE email=? AND parola=?',
            [ $email, md5(strval($password)) ]
        )->getRow();

        
        if ( $user == null ) {
            $ret->Error = true;
            $ret->MesajEroare = 'Email or password is incorrect';
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
            try {
                $this->db->table('users')->where('id', $user->id)->update(['last_seen' => date('Y-m-d H:i:s')]);
            } catch (\Throwable $e) {
                log_message('error', 'Update failed: ' . $e->getMessage());
            }
            if($formatDate>$user->last_seen){
                $this->db->table('users')->where('id', $user->id)->update(['last_seen' => date('Y-m-d H:i:s')]);
            }
        }
        return $this->response->setJSON($ret);
    }
}