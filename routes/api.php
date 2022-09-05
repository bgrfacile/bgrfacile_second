<?php


use App\Http\Controllers\Api\v1\AuthController as V1AuthController;
use App\Http\Controllers\Api\v1\HomeController as v1HomeController;
use App\Http\Controllers\Api\v1\InfoUserController;
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
    Route::post('/forgot-password', [V1AuthController::class, 'forgotPassword']);
    Route::post('/reset-password', [V1AuthController::class, 'resetPassword']);

    Route::group([
        'middleware' => ['auth:sanctum'],
    ], function () {
        Route::post('/logout', [V1AuthController::class, 'logout']);

        Route::apiResource("/users",InfoUserController::class);
        // Route::get('/info-user/{user}', [InfoUserController::class, 'index']);
        // Route::post('/info-user/{user}', [InfoUserController::class, 'store']);

        Route::get("ecoles", function () {
            return [
                "hello" => "word",
            ];
        });
    });
});
