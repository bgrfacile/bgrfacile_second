<?php


use App\Http\Controllers\Api\v1\AuthController as V1AuthController;
use App\Http\Controllers\Api\v1\CycleController;
use App\Http\Controllers\Api\v1\EcoleController;
use App\Http\Controllers\Api\v1\HomeController as v1HomeController;
use App\Http\Controllers\Api\v1\ImageEcoleController;
use App\Http\Controllers\Api\v1\InfoUserController;
use App\Http\Controllers\Api\v1\LevelController;
use App\Http\Controllers\Api\v1\LocationController;
use App\Http\Controllers\Api\v1\MatiereController;
use App\Http\Controllers\Api\v1\TypeEcoleController;
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
    Route::apiResource("/users", InfoUserController::class)->only(['index']);
    Route::apiResource("/ecoles", EcoleController::class)->only(['index']);

    Route::group([
        // 'middleware' => ['auth:sanctum'],
    ], function () {
        Route::post('/logout', [V1AuthController::class, 'logout']);

        Route::apiResource("/ecoles", EcoleController::class)->except(['index', 'update']);
        Route::get('/ecoles/search/{name}', [EcoleController::class, 'search']);
        Route::post('/ecoles/{id}', [EcoleController::class, 'update']);
        Route::post('/ecoles/add/type-ecole', [EcoleController::class, 'addTypeEcole']);
        Route::post('/ecoles/remove/type-ecole', [EcoleController::class, 'removeTypeEcole']);
        Route::post('/ecoles/add/cycle', [EcoleController::class, 'addCycle']);
        Route::post('/ecoles/remove/cycle', [EcoleController::class, 'removeCycle']);

        Route::apiResource("/type-ecoles", TypeEcoleController::class);

        Route::apiResource('/cycles', CycleController::class);
        Route::get('/cycles/search/{name}', [CycleController::class, 'search']);
        Route::post('/cycles/add/level', [CycleController::class, 'addLevel']);
        Route::post('/cycles/remove/level', [CycleController::class, 'removeLevel']);

        Route::apiResource('/levels', LevelController::class);
        Route::get('/levels/search/{name}', [LevelController::class, 'search']);
        Route::post('/levels/add/matiere', [LevelController::class, 'addMatiere']);
        Route::post('/levels/remove/matiere', [LevelController::class, 'removeMatiere']);

        Route::apiResource('/matieres', MatiereController::class);
        Route::get('/matieres/search/{name}', [MatiereController::class, 'search']);

        Route::apiResource('/image-ecoles', ImageEcoleController::class)->except(['index', 'update']);
        Route::post('/image-ecoles/{id}', [ImageEcoleController::class, 'update']);

        Route::apiResource('/locations', LocationController::class);

        Route::apiResource("/users", InfoUserController::class)->except(['store', 'index']);
        Route::get('/users/search/{name}', [InfoUserController::class, 'search']);
    });
});
