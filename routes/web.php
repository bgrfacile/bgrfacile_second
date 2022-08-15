<?php

use App\Http\Controllers\Admin\CycleController;
use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\CoursController as CoursControllerAdmin;
use App\Http\Controllers\Admin\EcoleController;
use App\Http\Controllers\Admin\LevelController;
use App\Http\Controllers\Admin\MatiereController;
use App\Http\Controllers\Admin\QuizController;
use App\Http\Controllers\Admin\UserController;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Site\AboutController;
use App\Http\Controllers\Site\ContactController;
use App\Http\Controllers\Site\CoursController;
use App\Http\Controllers\Site\DonationController;
use App\Http\Controllers\Site\EcoleEnLigneController;
use App\Http\Controllers\Site\HomeController;
use Illuminate\Support\Facades\Route;


/*
    App Site route
*/

Route::get('/demo', function () {
    return view('site.demoPageSchool');
});

Route::get('/', HomeController::class)->name('home.page');
Route::get('/cours/random', [CoursController::class, 'randomCours'])->name('randomCours.page');
Route::get('/ecole-en-ligne', [EcoleEnLigneController::class, 'index'])->name('ecoleEnLigne.page');
Route::get('/ecole-en-ligne/create', [EcoleEnLigneController::class, 'create'])->name('ecoleEnLigne.create');
Route::get('/donation', [DonationController::class, 'index'])->name('donation.page');
Route::post('/donation', [DonationController::class, 'postDonation'])->name('donation.page.post');
Route::get('/qui-sommes-nous', [AboutController::class, 'who'])->name('who.page');
Route::get('/about', [AboutController::class, 'about'])->name('about.page');
Route::get('/politique-de-confidentialite', [AboutController::class, 'politiqueDeConfidentialite'])->name('politique.page');
Route::get('/contact', [ContactController::class, 'index'])->name('contact.page');
Route::post('/contact', [ContactController::class, 'postMail'])->name('contact.page.post');
Route::get('/auth/google', [AuthController::class, 'oauthGoogle'])->name('auth.google');
Route::get('/auth/google/callback', [AuthController::class, 'oauthGoogleCallback'])->name('auth.google.callback');

/*
    App React route
*/

Route::view('/cours/{path?}', 'site.contenus.appCours')
    ->where('path', '.*')
    ->name('cours.page');
Route::view('/exercices/{path?}', 'site.contenus.appCours')
    ->where('path', '.*')
    ->name('exercices.page');
Route::view('/formations/{path?}', 'site.contenus.appCours')
    ->where('path', '.*')
    ->name('formation.page');
Route::view('/bonus/{path?}', 'site.contenus.appCours')
    ->where('path', '.*')
    ->name('bonus.page');
Route::view('/search/{path?}', 'site.contenus.appCours')
    ->where('path', '.*')
    ->name('search.page');
Route::view('/profile/{path?}', 'site.contenus.appCours')
    ->where('path', '.*')
    ->name('profil.index');


Route::view('/signin/{path?}', 'site.contenus.appCours')
    ->where('path', '.*')
    ->name('signin.page');
Route::view('/signup/{path?}', 'site.contenus.appCours')
    ->where('path', '.*')
    ->name('signup.page');
// Route::view('/reset-password/{path?}', 'site.contenus.appCours');
/*
    App Backend
*/
Route::middleware(['auth'])->group(function () {

    Route::prefix('backend')->group(function () {
        Route::get('/', [DashboardController::class, 'index'])->name('dashboard');

        Route::resource('/cycle', CycleController::class);
        Route::post('/cycle/{cycle}/levels', [CycleController::class, 'setLevels'])->name('cycle.update.levels');
        Route::post('/cycle/{cycle}/levels/create', [CycleController::class, 'addLevelForCycle'])->name('cycle.create.levels');
        Route::resource('/level', LevelController::class);
        Route::post('/level/{level}/matieres', [LevelController::class, 'syncToMatieres'])->name('level.update.matieres');
        Route::post('/level/{level}/matieres/create', [LevelController::class, 'attachToMatiere'])->name('level.create.matieres');
        Route::resource('/matiere', MatiereController::class);
        Route::resource('/cours', CoursControllerAdmin::class);
        Route::resource('quiz', QuizController::class)->except(['index']);

        Route::prefix('/users')->group(function () {
            Route::get('/', [UserController::class, 'all'])->name('users.index');
            Route::get('/profs', [UserController::class, 'listProfs'])->name('users.profs');
            Route::post('/profs', [UserController::class, 'acceptProf'])->name('prof.update');

            Route::get('/{user}', [UserController::class, 'show'])->name('users.show');
            Route::get('/{user}/edit', [UserController::class, 'edit'])->name('users.edit');
            Route::put('/{user}/edit', [UserController::class, 'update'])->name('users.update');
            Route::delete('/{users}', [UserController::class, 'destroy'])->name('users.destroy');
        });
        Route::put('/users/{user}/roles', [UserController::class, 'updateRole'])->name('users.update.role');

        Route::get('/ecole',[EcoleController::class,]);
    });
});

require __DIR__ . '/auth.php';
