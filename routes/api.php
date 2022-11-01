<?php


use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use App\Http\Controllers\Api\v1\CoursController;
use App\Http\Controllers\Api\v1\CycleController;
use App\Http\Controllers\Api\v1\EcoleController;
use App\Http\Controllers\Api\v1\LevelController;
use App\Http\Controllers\Api\v1\ParentController;
use App\Http\Controllers\Api\v1\ContentController;
use App\Http\Controllers\Api\v1\MatiereController;
use App\Http\Controllers\Api\v1\CalendarController;
use App\Http\Controllers\Api\v1\InfoUserController;
use App\Http\Controllers\Api\v1\LocationController;
use App\Http\Controllers\Api\v1\TypeEcoleController;
use App\Http\Controllers\Api\v1\ImageEcoleController;
use App\Http\Controllers\Api\v1\AuthController as V1AuthController;
use App\Http\Controllers\Api\v1\HomeController as v1HomeController;
use App\Http\Controllers\Api\v1\TuteurController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
*/

/**
 * @OA\Info(
 *      version="0.0.1",
 *      title="bgrfacile",
 *      description="api bgrfacile documentation",
 * )
 */
Route::get('/', v1HomeController::class)->name('home.api');

Route::prefix('v1')->group(function () {

    Route::middleware(['web', 'cors'])->group(function () {

        Route::get('/test', function () {
            return response()->json(['message' => 'test']);
        });
        /**
         * Auth
         */
        Route::post('/register', [V1AuthController::class, 'createUser']);
        Route::post('/login', [V1AuthController::class, 'loginUser']);
        Route::post('/logout', [V1AuthController::class, 'logout']);
        Route::post('/forgot-password', [V1AuthController::class, 'forgotPassword']);
        Route::post('/reset-password', [V1AuthController::class, 'resetPassword']);

        /**
         * Other route without
         */
        Route::apiResource('/cycles', CycleController::class)->only(['index']);

        Route::apiResource('/levels', LevelController::class)->only(['index']);

        Route::apiResource('/matieres', MatiereController::class)->only(['index']);

        Route::apiResource("/users", InfoUserController::class)->only(['index']);

        Route::get("/cours", [CoursController::class, 'index']);

        Route::apiResource("/ecoles", EcoleController::class)->only(['index']);

        Route::apiResource("/type-ecoles", TypeEcoleController::class)->only(['index', 'show']);

        Route::apiResource("/calendar", CalendarController::class);
        Route::post("/calendar/add/event", [CalendarController::class, 'addEvent']);



        /**
         * Route with auth
         */
        Route::group([
            'middleware' => ['auth:sanctum', 'api'],
        ], function () {
            /**
             * Auth
             */
            Route::post('/tokens/create', [V1AuthController::class, 'createToken']);
            Route::post('/logout', [V1AuthController::class, 'logout']);
            Route::get('/me', [V1AuthController::class, 'me']);

            /**
             * Ecole route
             */
            Route::apiResource("/ecoles", EcoleController::class)->except(['index', 'update']);
            Route::get('/ecoles/search/{name}', [EcoleController::class, 'search']);
            Route::post('/ecoles/{id}', [EcoleController::class, 'update']);
            Route::post('/ecoles/add/type-ecole', [EcoleController::class, 'addTypeEcole']);
            Route::post('/ecoles/remove/type-ecole', [EcoleController::class, 'removeTypeEcole']);
            Route::post('/ecoles/add/cycle', [EcoleController::class, 'addCycle']);
            Route::post('/ecoles/remove/cycle', [EcoleController::class, 'removeCycle']);

            Route::post('/ecoles/user/ajout', [EcoleController::class, 'ajoutForcedUser']);
            Route::post('/ecoles/user/demande', [EcoleController::class, 'demandeAtUser']);
            Route::put('/ecoles/user/accept', [EcoleController::class, 'acceptDemandeUser']);
            Route::put('/ecoles/user/refuse', [EcoleController::class, 'refuseDemandeUser']);
            Route::delete('/ecoles/user/delete', [EcoleController::class, 'deleteDemandeUser']);

            Route::apiResource("/type-ecoles", TypeEcoleController::class)->except(['index', 'show']);
            /**
             * Tuteur feat
             */
            Route::apiResource("/tuteurs", TuteurController::class);
            Route::post("/tuteurs/user/ajout", [TuteurController::class, 'ajoutUser']);
            Route::post("/tuteurs/user/remove", [TuteurController::class, 'removeUser']);
            Route::post("/tuteurs/ecole/ajout", [TuteurController::class, 'ajoutEcole']);
            Route::post("/tuteurs/ecole/remove", [TuteurController::class, 'removeEcole']);

            /**
             * Cycle feat
             */
            Route::apiResource('/cycles', CycleController::class)->except(['index']);
            Route::get('/cycles/search/{name}', [CycleController::class, 'search']);
            Route::post('/cycles/add/level', [CycleController::class, 'addLevel']);
            Route::post('/cycles/remove/level', [CycleController::class, 'removeLevel']);

            /**
             * Levels feat
             */
            Route::apiResource('/levels', LevelController::class)->except(['index']);
            Route::get('/levels/search/{name}', [LevelController::class, 'search']);
            Route::post('/levels/add/matiere', [LevelController::class, 'addMatiere']);
            Route::post('/levels/remove/matiere', [LevelController::class, 'removeMatiere']);

            /**
             * Matiere feat
             */
            Route::apiResource('/matieres', MatiereController::class)->except(['index']);
            Route::get('/matieres/search/{name}', [MatiereController::class, 'search']);

            Route::apiResource('/image-ecoles', ImageEcoleController::class)->except(['index', 'update']);
            Route::post('/image-ecoles/{id}', [ImageEcoleController::class, 'update']);

            Route::apiResource('/locations', LocationController::class);

            /**
             * User feat
             */
            Route::apiResource("/users", InfoUserController::class)->except(['store', 'index']);
            Route::get('/users/search/{name}', [InfoUserController::class, 'search']);
            Route::post('/users/ecole/ajout', [InfoUserController::class, 'ajoutForcedEcole']);
            Route::post('/users/ecole/demande', [InfoUserController::class, 'demandeAtEcole']);
            Route::put('/users/ecole/accept', [InfoUserController::class, 'acceptDemandeEcole']);
            Route::put('/users/ecole/refuse', [InfoUserController::class, 'refuseDemandeEcole']);
            Route::delete('/users/ecole/delete', [InfoUserController::class, 'deleteDemandeEcole']);


            Route::apiResource('/cours', CoursController::class)->except(['update', 'index']);
            Route::post('/cours/{cours}', [CoursController::class, 'update']);
            Route::get('/cours/search/{name}', [CoursController::class, 'search']);
            Route::post('/cours/add/content', [CoursController::class, 'addContent']);
            Route::post('/cours/remove/content', [CoursController::class, 'removeContent']);
            Route::post('/cours/add/cycle', [CoursController::class, 'addCycle']);
            Route::post('/cours/add/level', [CoursController::class, 'addLevel']);
            Route::post('/cours/add/matiere', [CoursController::class, 'addMatiere']);
            Route::post('/cours/remove/cycle', [CoursController::class, 'removeCycle']);
            Route::post('/cours/remove/level', [CoursController::class, 'removeLevel']);
            Route::post('/cours/remove/matiere', [CoursController::class, 'removeMatiere']);

            Route::apiResource('/contents', ContentController::class)->except(['update']);
            Route::post('/contents/{contents}', [ContentController::class, 'update']);
        });
    });
});
