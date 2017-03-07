<?php

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

Route::group(['middleware' => ['auth:api']], function () {

    Route::get('/account/profile', 'UserController@profile');
    Route::post('/account/edit_profile', 'UserController@edit_profile');

/*------------------------------------
	CRUD Game
------------------------------------*/
    Route::get('/game/leader-board', 'GameController@getLeaderBoard');
    Route::get('/game', 'GameController@data');
    Route::get('/game/{id}', 'GameController@detail');
    Route::post('/game/create', 'GameController@create');
    Route::post('/game/update', 'GameController@update');
    Route::get('/game/delete/{id}', 'GameController@delete');
    Route::get('/game/force-delete/{id}', 'GameController@forceDelete');

/*------------------------------------
	CRUD Player
------------------------------------*/
    Route::get('/player', 'PlayerController@data');
    Route::get('/player/{id}', 'PlayerController@detail');
    Route::post('/player/create', 'PlayerController@create');
    Route::post('/player/update', 'PlayerController@update');
    Route::get('/player/delete/{id}', 'PlayerController@delete');
    Route::get('/player/force-delete/{id}', 'PlayerController@forceDelete');

});

