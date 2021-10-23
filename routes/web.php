<?php

use App\Http\Controllers\Admin\UserController;
use App\Http\Controllers\Site\HomeController;
use App\Models\User;
use Illuminate\Support\Facades\Route;
use Spatie\Permission\Models\Role;



Route::get('/',HomeController::class)->name('home.page');

Route::get('/dashboard', function () {
    $users = User::all()->reverse();
    return view('dashboard',[
        'users'=>$users
    ]);
})->middleware(['auth'])->name('dashboard');
Route::get('/demo',function(){
return view('demo');
});
Route::middleware(['auth'])->prefix('admin')->name('admin.')->group(function(){
    Route::get('user',[UserController::class,'index']);
});

require __DIR__ . '/auth.php';
