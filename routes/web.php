<?php

use App\Http\Controllers\IndexController;
use Illuminate\Support\Facades\Route;

Route::group([
    'name' => 'index',
], function () {
    Route::controller(IndexController::class)->group(function () {
        Route::get('/', 'index')->name('index');
    });
});


