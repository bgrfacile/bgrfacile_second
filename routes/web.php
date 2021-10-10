<?php

use App\Http\Controllers\Admin\UserController;
use App\Http\Controllers\Site\HomeController;
use App\Models\User;
use Illuminate\Support\Facades\Route;
use Spatie\Permission\Models\Role;



Route::get('/',[HomeController::class,'index'])->name('welcome');

Route::get('/dashboard', function () {
    $users = User::all()->reverse();
    return view('dashboard',[
        'users'=>$users
    ]);
})->middleware(['auth'])->name('dashboard');

Route::middleware(['auth'])->prefix('admin')->name('admin.')->group(function(){
    Route::get('user',[UserController::class,'index']);
});

require __DIR__ . '/auth.php';
