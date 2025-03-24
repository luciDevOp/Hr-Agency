<?php

class ApiResponse {

    public $Error       = false;
    public $MesajEroare = "";

    public function __construct(){}

    public function setError($mesaj) {
        $this->Error = true;
        $this->MesajEroare = $mesaj;
    }
}