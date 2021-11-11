<?php

use App\Http\Controllers\Admin\UserController;
use App\Http\Controllers\Site\AboutController;
use App\Http\Controllers\Site\CoursController;
use App\Http\Controllers\Site\DonationController;
use App\Http\Controllers\Site\HomeController;
use App\Http\Controllers\Site\ProfilController;
use App\Models\User;
use Illuminate\Support\Facades\Route;
use Spatie\Permission\Models\Role;



Route::get('/', HomeController::class)->name('home.page');
Route::get('/donation', DonationController::class)->name('donation.page');
Route::get('/qui-sommes-nous', AboutController::class)->name('about.page');
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
    Route::get('/dashboard', function () {
        $users = User::all()->reverse();
        return view('dashboard', ['users' => $users]);
    })->name('dashboard');

    Route::get('/profile/{name?}', [ProfilController::class, 'index'])->name('profil.index');
});



Route::middleware(['auth'])->prefix('admin')->name('admin.')->group(function () {
    Route::get('user', [UserController::class, 'index']);
});

require __DIR__ . '/auth.php';
