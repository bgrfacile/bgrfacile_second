<?php

use App\Http\Controllers\Admin\UserController;
use App\Http\Controllers\Site\CoursController;
use App\Http\Controllers\Site\HomeController;
use App\Models\User;
use Illuminate\Support\Facades\Route;
use Spatie\Permission\Models\Role;



Route::get('/', HomeController::class)->name('home.page');
// Route::get('/cours',CoursController::class)->name('cours.page');

Route::view('/cours/{path?}', 'site.contenus.appCours')
    ->where('path', '.*')
    ->name('cours.page');

Route::view('/exercices/{path?}', 'site.contenus.appCours')
    ->where('path', '.*')
    ->name('exercices.page');

Route::get('/dashboard', function () {
    $users = User::all()->reverse();
    return view('dashboard', [
        'users' => $users
    ]);
})->middleware(['auth'])->name('dashboard');


Route::middleware(['auth'])->prefix('admin')->name('admin.')->group(function () {
    Route::get('user', [UserController::class, 'index']);
});

require __DIR__ . '/auth.php';
