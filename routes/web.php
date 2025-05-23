<?php

use App\Http\Controllers\ApplicationController;
use App\Http\Controllers\IndexController;
use Illuminate\Http\Request;

Route::group([
    'name' => 'index',
], function () {
    Route::controller(IndexController::class)->group(function () {
        Route::get('/', 'index')->name('index');
        Route::get('/studio', 'studio')->name('studio');
        Route::get('/dilesta', 'dilesta')->name('dilesta');
        Route::get('/module', 'module')->name('module');
    });
});

Route::group([
    'name' => 'application',
    'as' => 'application.',
    'prefix' => 'application',
], function () {
    Route::controller(ApplicationController::class)->group(function () {
        Route::post('create', 'create')->name('create');
        Route::post('{secret}/webhook', 'handle')->name('webhook');
    });
});

Route::get('/ip', function (Request $request) {
    var_dump([
        'remote_addr' => $request->server('REMOTE_ADDR'),
        'client_ip'   => $request->ip(),
        'all_ips'     => $request->getClientIps(),
    ]);
});
