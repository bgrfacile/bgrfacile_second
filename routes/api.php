<?php

use App\Http\Controllers\APi\AuthController;
use App\Http\Controllers\Api\CoursController;
use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Models\Cours;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::prefix('v1')->group(function () {

    Route::group([
        'middleware' => ['cors', 'auth:sanctum'],
    ], function () {
        Route::apiResource('cours', CoursController::class);

        Route::post("/contact", function (Request $request) {
            dd($request->all());
        });
    });

    Route::group([
        'middleware' => ['cors'],
    ], function () {
        Route::post('/signin', [AuthController::class, 'login']);
        Route::post('/signup', [AuthController::class, 'register']);
    });
});
