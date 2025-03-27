<?php

namespace App\Controllers\Admin;

use CodeIgniter\Controller;
use CodeIgniter\HTTP\CLIRequest;
use CodeIgniter\HTTP\IncomingRequest;
use CodeIgniter\HTTP\RequestInterface;
use CodeIgniter\HTTP\ResponseInterface;
use Psr\Log\LoggerInterface;
use stdClass;
use chillerlan\QRCode\QRCode;
use chillerlan\QRCode\QROptions;
use DateInterval;
use DatePeriod;
use DateTime;
use DateTimeZone;

/**
 * Class BaseController
 *
 * BaseController provides a convenient place for loading components
 * and performing functions that are needed by all your controllers.
 * Extend this class in any new controllers:
 *     class Home extends BaseController
 *
 * For security be sure to declare any new methods as protected or private.
 */
class BaseController extends Controller
{
    /**
     * Instance of the main Request object.
     *
     * @var CLIRequest|IncomingRequest
     */
    protected $request;

    protected $db;

    /**
     * An array of helpers to be loaded automatically upon
     * class instantiation. These helpers will be available
     * to all other controllers that extend BaseController.
     *
     * @var array
     */
    protected $helpers = ["ApiResponse","table_sql"];
   
    /**
     * Constructor.
     */
    public function initController(RequestInterface $request, ResponseInterface $response, LoggerInterface $logger)
    {
        helper("constants");
        // Do Not Edit This Line
        parent::initController($request, $response, $logger);

        // Preload any models, libraries, etc, here.

        // E.g.: $this->session = \Config\Services::session();
        $this->db = \Config\Database::connect();

        $response
            ->setHeader('Access-Control-Allow-Origin', '*')
            ->setHeader('Access-Control-Allow-Headers', 'Token, Origin, X-Requested-With, Content-Type, Accept')
            ->setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT');
    }
    public function verify_login() {

     
        $ret = new stdClass();
        $ret->NotLogged = ($this->get_logged_user() == null || ($this->get_logged_user())->MesajEroare != null);
        $ret->Error       = false;
        $ret->MesajEroare = $this->get_logged_user() !== null ? ($this->get_logged_user())->MesajEroare : "";
        
        return $ret;
    }
    public function get_logged_user() {
        $token          = $this->request->getHeaderLine("token");
        $client         = $this->db->query("SELECT * FROM auth_token WHERE token='$token' ORDER BY id DESC")->getRow();
        
        $currentDate = time();
         
        $pastDate = $currentDate - (60 * 60);
        
        $currentDatePast60minutes = date("Y-m-d H:i:s", $pastDate);

        if($client != null){
            $client->MesajEroare = null;
            $user       = $this->db->query('SELECT * FROM users WHERE id=?',[$client->id_user])->getRow();
            if(!empty($user)){
               
                $differenceInMinutes = ($currentDate - strtotime($user->last_seen)) / 60;
                
                if(empty($user) || $client->expire_date < date('Y-m-d H:i:s') || $user->last_seen < $currentDatePast60minutes){
                    $client = new stdClass();
                    $client->MesajEroare = "Sesiunea a expirat!";
                }elseif($differenceInMinutes > 5){
                    $this->db->table('users')
                    ->where('id', $client->id_user)
                    ->update(['last_seen' => date('Y-m-d H:i:s')]);
                }
            }else{
                $client = new stdClass();
                $client->MesajEroare = "Sesiune inexistenta!";
            }   
        }
        return $client;
    }

    public function get_user_from_token(){
        $token          = $this->request->getHeaderLine("token");
        
        $utilizator = $this->db->query("SELECT id_user FROM auth_token WHERE token='$token'")->getResult();
           
        return $utilizator[0]->id_user;
    }

    public function get_token(){
        return $this->request->getHeaderLine("token");
    }

    public function getUserDetails()
    {
    $token          = $this->request->getHeaderLine("token");
        
    $id_user = ($this->db->query("SELECT id_user FROM auth_token WHERE token='$token'")->getRow())->id_user;

    if($id_user){
        return $this->db->query("SELECT * FROM users WHERE id = " . $id_user)->getRow();
        }
    }

    public function get_date_between($data1, $data2) {
        $begin      = new DateTime( $data1 );
        $end        = new DateTime( $data2 );
        $end        = $end->modify( '+1 day' ); 

        $interval   = new DateInterval('P1D');
        $daterange  = new DatePeriod($begin, $interval ,$end);

        $ret        = [];
        foreach($daterange as $date){
            $ret[] = $date->format("Y-m-d");
        }
        return $ret;
    }
    // public function logError() {
    //     $input = file_get_contents('php://input');
    //     $data = json_decode($input, true);
    
    //     $token = $this->request->getHeaderLine('Token');
    //     $utilizator = null;
    
    //     if ($token) {
    //         $utilizator = $this->db->query("SELECT IdUtilizator FROM auth_token WHERE Token = ?", [$token])->getRow();
    //     }
    
    //     $errorDetails = json_decode($data['errorDetails'] ?? '{}', true);
    //     $timestampISO = $data['timestamp'] ?? null;
    
    //     $timestampSQL = null;
    //     if ($timestampISO) {
    //         $datetime = new DateTime($timestampISO);
    //         $datetime->setTimezone(new DateTimeZone(date_default_timezone_get()));
    //         $timestampSQL = $datetime->format('Y-m-d H:i:s');
    //     }
    
    //     $urlError = $errorDetails['url'] ?? null;
    //     $payload = json_encode($errorDetails['args'] ?? null);
    //     $response = json_encode($errorDetails['responseData'] ?? null);
    //     $cod = $errorDetails['status'] ?? null;
    //     $mesaj = $errorDetails['responseData']['message'] ?? null;
    //     $json = json_encode($errorDetails);
    
    //     $this->db->query(
    //         "INSERT INTO log_error (TimeStamp, UrlError, Payload, Response, Cod, Mesaj, JSON) VALUES (?, ?, ?, ?, ?, ?, ?)",
    //         [$timestampSQL, $urlError, $payload, $response, $cod, $mesaj, $json]
    //     );
    
    //     $ret = new stdClass;
    //     $ret->status = 'success';
    //     $ret->user = $utilizator;
    //     $ret->timestamp = $timestampSQL;
    //     $ret->test = $errorDetails;
    //     echo json_encode($ret);
    // }

}
