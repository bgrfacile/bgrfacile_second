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
    Route::post('/register', [V1AuthController::class, 'createUser']);
    Route::post('/login', [V1AuthController::class, 'loginUser']);

    Route::group([
        'middleware' => ['auth:sanctum'],
    ], function () {
        Route::post('/logout', [V1AuthController::class, 'logout']);

        Route::get("ecoles", function () {
            return [
                "hello" => "word",
            ];
        });
    });
});
