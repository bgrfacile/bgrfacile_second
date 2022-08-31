<?php


use App\Http\Controllers\Api\v1\AuthController as V1AuthController;
use App\Http\Controllers\Api\v1\HomeController as v1HomeController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
*/

Route::get('/', v1HomeController::class);

Route::prefix('v1')->group(function () {
    Route::group([
        'middleware' => ['cors', 'auth'],
    ], function () {
    });

    Route::group([
        'middleware' => ['cors'],
    ], function () {
        Route::post('/auth/register', [V1AuthController::class ,'createUser']);
        Route::post('/auth/login', [V1AuthController::class ,'loginUser']);
    });
});
