<?php

use App\Http\Controllers\IndexController;
use Illuminate\Support\Facades\Route;

Route::group([
    'name' => 'index',
], function () {
    Route::controller(IndexController::class)->group(function () {
        Route::get('/', 'index')->name('index');

        Route::group([
            'prefix' => '7024'
        ], function () {
            Route::get('/studio', 'studio')->name('studio');
            Route::get('/dilesta', 'dilesta')->name('dilesta');
            Route::get('/module', 'module')->name('module');
        });
    });
});


