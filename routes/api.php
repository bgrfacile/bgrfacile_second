<?php

use App\Http\Controllers\APi\AuthController;
use App\Http\Controllers\Api\CommentsController;
use App\Http\Controllers\Api\CoursController;
use App\Http\Controllers\Api\CycleController;
use App\Http\Controllers\Api\ExercicesController;
use App\Http\Controllers\Api\FollowController;
use App\Http\Controllers\Api\LevelController;
use App\Http\Controllers\Api\MatiereController;
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

Route::prefix('v1')->group(function () {

    Route::group([
        'middleware' => ['cors', 'auth'],
    ], function () {
        Route::put('/user/update', [UserController::class, 'updateUser']);
        Route::post('/user/image/update', [UserController::class, 'updateImage']);
        Route::post("/users/{user_id}/follow", [FollowController::class, 'follow']);
        Route::post("/users/{user_id}/unfollow", [FollowController::class, 'unfollow']);
        Route::apiResource('/cours', CoursController::class)->except(['index', 'show']);
        Route::get('/cours/user/{userId}', [CoursController::class, 'CoursToUser']);
        Route::put('/cours/{courId}/isactif', [CoursController::class, 'updateVisibilityCours']);
        Route::apiResource('/cours/{cours}/comments', CommentsController::class)->except(['index', 'show']);
    });

    Route::group([
        'middleware' => ['cors'],
    ], function () {
        Route::get('/auth/me', [AuthController::class, 'me']);
        Route::get('users/{user}', [UserController::class, 'show']);
        Route::post('/signin', [AuthController::class, 'login']);
        Route::post('/signup', [AuthController::class, 'register']);
        Route::post('/logout', [AuthController::class, 'logout']);

        Route::get('/cours', [CoursController::class, 'index']);
        Route::get('/cours/{cours}', [CoursController::class, 'show']);
        Route::get('/cours/getCours/{idCycle}', [CoursController::class, 'getCoursByCycle']);
        Route::get('/cours/getCours/{idCycle}/{idLevel}', [CoursController::class, 'getCoursByLevel']);
        Route::get('/cours/getCours/{idCycle}/{idLevel}/{idMatiere}', [CoursController::class, 'getCoursByMatiere']);
        Route::get('/cours/{cours}/comments', [CommentsController::class, 'index']);

        Route::get('/last-exercices', [ExercicesController::class, 'lastExercices']);

        Route::get('cycles', CycleController::class);
        Route::get('levels', [LevelController::class, 'custums']);
        Route::get('levels/simple', [LevelController::class, 'nonCustums']);
        Route::get('matieres', [MatiereController::class, 'customs']);
        Route::get('matieres/simple', [MatiereController::class, 'nonCustoms']);

    });
});
