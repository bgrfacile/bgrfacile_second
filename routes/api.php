<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\CommentsController;
use App\Http\Controllers\Api\CoursController;
use App\Http\Controllers\Api\CycleController;
use App\Http\Controllers\Api\ExercicesController;
use App\Http\Controllers\APi\FavorisController;
use App\Http\Controllers\Api\FollowController;
use App\Http\Controllers\Api\LevelController;
use App\Http\Controllers\Api\LikeController;
use App\Http\Controllers\Api\RaitingController;
use App\Http\Controllers\Api\MatiereController;
use App\Http\Controllers\Api\SearchController;
use App\Http\Controllers\Api\SolutionController;
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
        Route::post('/updateMotDePasse', [UserController::class, 'updatePassword']);
        Route::post("/users/{user_id}/follow", [FollowController::class, 'follow']);
        Route::post("/users/{user_id}/unfollow", [FollowController::class, 'unfollow']);

        Route::apiResource('/cours', CoursController::class)->except(['index', 'show']);
        Route::get('/my-exercices', [ExercicesController::class, 'myExercices']);
        Route::apiResource('/exercices', ExercicesController::class)->except(['index', 'show']);
        Route::get('/my-solutions', [SolutionController::class, 'mySolution']);
        Route::apiResource('/solutions', SolutionController::class)->except(['index', 'show']);

        Route::get('/cours/user/{userId}', [CoursController::class, 'CoursToUser']);
        Route::put('/cours/{courId}/isactif', [CoursController::class, 'updateVisibilityCours']);
        Route::apiResource('/cours/{cours}/comments', CommentsController::class)->except(['index', 'show']);

        Route::post('like', [LikeController::class, 'store']);
        Route::delete('like/{cours}/{id}', [LikeController::class, 'destroy']);

        Route::post('/raiting', [RaitingController::class, 'store']);
        // Route::get('/rating/{cours}', [RaitingController::class, 'getRating']);
        Route::delete('/raiting/{cours}/{id}', [RaitingController::class, 'destroy']);

        Route::get('/favoris/cours', [FavorisController::class, 'getCoursFavoris']);
        Route::get('/favoris/exercices', [FavorisController::class, 'getExerciceFavoris']);
    });

    Route::group([
        'middleware' => ['cors'],
    ], function () {
        Route::get('/auth/me', [AuthController::class, 'me']);
        Route::get('users/{user}', [UserController::class, 'show']);
        Route::post('/signin', [AuthController::class, 'login']);
        Route::post('/signup', [AuthController::class, 'register']);
        Route::post('/logout', [AuthController::class, 'logout']);

        Route::get('/search/{query}', [SearchController::class, 'searchAll']);

        Route::get('/cours', [CoursController::class, 'index']);
        Route::get('/cours/random', [CoursController::class, 'randomCours']);
        Route::get('/cours/{cours}', [CoursController::class, 'show']);
        Route::get('/cours/getCours/{idCycle}', [CoursController::class, 'getCoursByCycle']);
        Route::get('/cours/getCours/{idCycle}/{idLevel}', [CoursController::class, 'getCoursByLevel']);
        Route::get('/cours/getCours/{idCycle}/{idLevel}/{idMatiere}', [CoursController::class, 'getCoursByMatiere']);
        Route::get('/cours/{cours}/comments', [CommentsController::class, 'index']);

        Route::get('/exercices', [ExercicesController::class, 'index']);
        Route::get('/exercices/{exercices}', [ExercicesController::class, 'show']);
        Route::get('/solutions', [SolutionController::class, 'index']);

        Route::get('/exercices/getExos/{idCycle}', [ExercicesController::class, 'getExosByCycle']);
        Route::get('/exercices/getExos/{idCycle}/{idLevel}', [ExercicesController::class, 'getExosByLevel']);
        Route::get('/exercices/getExos/{idCycle}/{idLevel}/{idMatiere}', [ExercicesController::class, 'getExosByMatiere']);

        Route::get('cycles', [CycleController::class, 'custums']);
        Route::get('cycles/simple', [CycleController::class, 'nonCustums']);
        Route::get('levels', [LevelController::class, 'custums']);
        Route::get('levels/simple', [LevelController::class, 'nonCustums']);
        Route::get('matieres', [MatiereController::class, 'customs']);
        Route::get('matieres/simple', [MatiereController::class, 'nonCustoms']);
    });
});
