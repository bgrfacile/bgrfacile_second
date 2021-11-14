<?php

use App\Http\Controllers\Admin\UserController;
use App\Http\Controllers\Site\AboutController;
use App\Http\Controllers\Site\ContactController;
use App\Http\Controllers\Site\CoursController;
use App\Http\Controllers\Site\DonationController;
use App\Http\Controllers\Site\EcoleEnLigneController;
use App\Http\Controllers\Site\HomeController;
use App\Http\Controllers\Site\ProfilController;
use App\Models\User;
use Illuminate\Support\Facades\Route;
use Spatie\Permission\Models\Role;
use Inertia\Inertia;



Route::get('/', HomeController::class)->name('home.page');
Route::get('/ecole-en-ligne', [EcoleEnLigneController::class, 'index'])->name('ecoleEnLigne.page');
Route::get('/ecole-en-ligne/create', [EcoleEnLigneController::class, 'create'])->name('ecoleEnLigne.create');
Route::get('/donation', DonationController::class)->name('donation.page');
Route::get('/qui-sommes-nous', [AboutController::class, 'who'])->name('who.page');
Route::get('/about', [AboutController::class, 'about'])->name('about.page');
Route::get('/politique-de-confidentialite', [AboutController::class, 'politiqueDeConfidentialite'])->name('politique.page');
Route::get('/contact', [ContactController::class, 'index'])->name('contact.page');
Route::get('/login2', function () {
    return view('site.login2');
});

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


Route::middleware(['auth'])->group(function () {

    Route::prefix('dashboard')->group(function () {
        Route::get('/', function () {
            $users = User::all()->reverse();
            return view('dashboard', ['users' => $users]);
        })->name('dashboard');

        Route::get('user', [UserController::class, 'index']);

        Route::get('test', function () {
            return Inertia::render('Dashboard/Index', [
                'name' => "benji",
            ]);
        });
    });



    Route::get('/profile/{name?}', [ProfilController::class, 'index'])->name('profil.index');
});

require __DIR__ . '/auth.php';
