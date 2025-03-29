<?php

use CodeIgniter\Router\RouteCollection;

/**
 * @var RouteCollection $routes
 */
$routes->get('/', 'Home::index');
$routes->get('/test/test', 'Test::test');
$routes->post('/admin/login', 'Admin\Login::login');
$routes->post('candidate/save', 'CandidateController::save');
$routes->post('dashboard/index', 'Admin\Dashboard::index');
$routes->post('dashboard/delete_cv', 'Admin\Dashboard::delete_cv');
$routes->post('jobs/index', 'Admin\Jobs::index');
$routes->post('jobs/delete_job', 'Admin\Jobs::delete_job');
$routes->post('jobs/complete_job', 'Admin\Jobs::complete_job');
$routes->post('jobs/save', 'Admin\Jobs::save');


$routes->setDefaultNamespace('App\Controllers');
$routes->setDefaultController('Home');
$routes->setDefaultMethod('index');
$routes->setTranslateURIDashes(false);
$routes->set404Override();
