<?php

use Dingo\Api\Routing\Router;
use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

/*
 * Welcome route - link to any public API documentation here
 */
Route::get('/', function () {
    echo 'Welcome to our API';
});

/** @var \Dingo\Api\Routing\Router $api */
$api = app('Dingo\Api\Routing\Router');
$api->version('v1', ['middleware' => ['api']], function (Router $api) {
    /*
     * Authentication
     */
    $api->group(['prefix' => 'auth'], function (Router $api) {
        $api->group(['prefix' => 'jwt'], function (Router $api) {
            $api->get('/token', 'App\Http\Controllers\Auth\AuthController@token');
        });
        $api->post('/login', 'App\Http\Controllers\Auth\AuthController@login')->name('login');
        $api->post('/register', 'App\Http\Controllers\Auth\AuthController@register');
    });

    $api->group(['prefix' => 'event-type'], function (Router $api) {
        $api->get('/', 'App\Http\Controllers\EventTypeController@index');
    });


    $api->group(['prefix' => 'events'], function (Router $api) {
        $api->get('/', 'App\Http\Controllers\EventsController@index');
        $api->get('/{id}', 'App\Http\Controllers\EventsController@show');
    });
    /*
     * Authenticated routes
     */
    $api->group(['middleware' => ['api.auth']], function (Router $api) {
        /*
         * Authentication
         */
        $api->group(['prefix' => 'auth'], function (Router $api) {
            $api->group(['prefix' => 'jwt'], function (Router $api) {
                $api->get('/refresh', 'App\Http\Controllers\Auth\AuthController@refresh');
                $api->delete('/token', 'App\Http\Controllers\Auth\AuthController@logout');
            });

            $api->get('/me', 'App\Http\Controllers\Auth\AuthController@getUser');
            $api->put('/me', 'App\Http\Controllers\Auth\AuthController@editUser');
        });

        $api->group(['prefix' => 'preferences'], function (Router $api) {
            $api->get('/', 'App\Http\Controllers\UserPreferencesController@index');
            $api->put('/', 'App\Http\Controllers\UserPreferencesController@edit');
            $api->post('/', 'App\Http\Controllers\UserPreferencesController@edit');
        });

        $api->group(['prefix' => 'events'], function (Router $api) {
            $api->get('/{id}/join', 'App\Http\Controllers\EventsController@join');
            $api->get('/{id}/leave', 'App\Http\Controllers\EventsController@leave');
            $api->post('/', 'App\Http\Controllers\EventsController@store');
            $api->patch('/{id}', 'App\Http\Controllers\EventsController@edit');
            $api->put('/{id}', 'App\Http\Controllers\EventsController@edit');
            $api->delete('/{id}', 'App\Http\Controllers\EventsController@destroy');
        });

        /*
         * Roles
         */
        $api->group(['prefix' => 'roles'], function (Router $api) {
            $api->get('/', 'App\Http\Controllers\RoleController@getAll');
        });
    });
});
