<?php

use CodeIgniter\Router\RouteCollection;

/**
 * @var RouteCollection $routes
 */
$routes->get('/', 'Home::index');
$routes->get('/test/test', 'Test::test');
$routes->get('/test/test_db', 'Test::test_db');
$routes->get('/test/test_db2', 'Test::test_db2');

$routes->post('/admin/login', 'Admin\Login::login');
$routes->post('candidate/save', 'CandidateController::save');

$routes->post('dashboard/index', 'Admin\Dashboard::index');
$routes->post('dashboard/delete_cv', 'Admin\Dashboard::delete_cv');
$routes->get('dashboard/download_cv/(:any)', 'Admin\Dashboard::download_cv/$1');

$routes->post('jobs/index', 'Admin\Jobs::index');
$routes->post('jobs/delete_job', 'Admin\Jobs::delete_job');
$routes->post('jobs/complete_job', 'Admin\Jobs::complete_job');
$routes->post('jobs/save', 'Admin\Jobs::save');
$routes->post('jobs/get_job', 'Admin\Jobs::get_job');
$routes->post('jobs/uncomplete_job', 'Admin\Jobs::uncomplete_job');
$routes->post('jobs/fetchAllJobs', 'Admin\Jobs::fetchAllJobs');
$routes->post('jobs/get_job_observations', 'Admin\Jobs::get_job_observations');
$routes->post('jobs/save_observations', 'Admin\Jobs::save_observations');

$routes->post('posts/index', 'Admin\Posts::index');
$routes->post('posts/delete_post', 'Admin\Posts::delete_post');
$routes->post('posts/save', 'Admin\Posts::save');
$routes->post('posts/get_post', 'Admin\Posts::get_post');
$routes->post('posts/fetchAllPosts', 'Admin\Posts::fetchAllPosts');
$routes->post('posts/fetchCategories', 'Admin\Posts::fetchCategories');
$routes->post('posts/fetchPostBySlug', 'Admin\Posts::fetchPostBySlug');
$routes->post('posts/delete_photo', 'Admin\Posts::delete_photo');
$routes->post('posts/delete_card_photo', 'Admin\Posts::delete_card_photo');

//latest toughts
$routes->post('latestToughts/index', 'Admin\LatestToughts::index');
$routes->post('latestToughts/delete_latest_tought', 'Admin\LatestToughts::delete_latest_tought');
$routes->post('latestToughts/save', 'Admin\LatestToughts::save');
$routes->post('latestToughts/get_latest_tought', 'Admin\LatestToughts::get_latest_tought');
$routes->post('latestToughts/fetchAllLatestToughts', 'Admin\LatestToughts::fetchAllLatestToughts');

//categories
$routes->post('categories/index', 'Admin\Categories::index');
$routes->post('categories/delete_category', 'Admin\Categories::delete_category');
$routes->post('categories/save', 'Admin\Categories::save');


$routes->setDefaultNamespace('App\Controllers');
$routes->setDefaultController('Home');
$routes->setDefaultMethod('index');
$routes->setTranslateURIDashes(false);
$routes->set404Override();
