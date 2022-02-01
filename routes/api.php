<?php

use App\Http\Controllers\APi\AuthController;
use App\Http\Controllers\Api\CoursController;
use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Models\Cours;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::prefix('v1')->group(function () {

    Route::group([
        'middleware' => ['cors','auth'],
    ], function () {
        Route::put('/user/update', [UserController::class, 'updateUser']);
        Route::post('/user/image/update', [UserController::class, 'updateImage']);
        Route::apiResource('/cours', CoursController::class)->except(['index']);
    });

    Route::group([
        'middleware' => ['cors'],
    ], function () {
        Route::get('/auth/me', [AuthController::class, 'me']);
        Route::post('/signin', [AuthController::class, 'login']);
        Route::post('/signup', [AuthController::class, 'register']);
        Route::post('/logout', [AuthController::class, 'logout']);
        Route::get('/cours', [CoursController::class, 'index']);
        Route::post("/contact", function (Request $request) {
            dd($request->all());
        });
    });
});
