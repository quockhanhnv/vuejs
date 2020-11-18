<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::namespace('Api')->group(function () {

    Route::group(['middleware' => 'api','prefix' => 'auth'], function () {
        Route::post('login', 'AuthController@login');
        Route::post('logout', 'AuthController@logout');
        Route::post('refresh', 'AuthController@refresh');
        Route::post('me', 'AuthController@me');
    });

    Route::group(['prefix' => 'users'], function() {
        Route::get('', 'UserController@index');
    });

    Route::group(['middleware' => 'jwt',], function () {
        Route::group(['prefix' => 'statuses'], function() {
            Route::get('', 'StatusController@index');
            Route::post('', 'StatusController@store');
            Route::put('update/{id}', 'StatusController@update');
            Route::delete('delete/{id}', 'StatusController@destroy');
        });

        Route::group(['prefix' => 'company'], function() {
            Route::get('', 'CompanyController@index');
            Route::get('all', 'CompanyController@getCompanies');
            Route::get('{id}', 'CompanyController@show');
            Route::post('', 'CompanyController@store');
            Route::put('update/{id}', 'CompanyController@update');
            Route::delete('delete/{id}', 'CompanyController@destroy');
            Route::get('files/{id}', 'CompanyController@getFiles');
            Route::post('download/{id}', 'CompanyController@download');
            Route::post('delete-file/{id}', 'CompanyController@deleteFile');
        });
    });

});
