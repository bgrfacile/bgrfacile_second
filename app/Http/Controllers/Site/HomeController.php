<?php

namespace App\Http\Controllers\Site;

use App\Models\User;
use Illuminate\Http\Request;
use Spatie\Permission\Models\Role;
use App\Http\Controllers\Controller;

class HomeController extends Controller
{
    public function __invoke()
    {
        if (Role::count() == 0) {
            app()[\Spatie\Permission\PermissionRegistrar::class]->forgetCachedPermissions();
            Role::create(['name' => 'super-admin']);
            Role::create(['name' => 'admin']);
            Role::create(['name' => 'etudiant']);
            Role::create(['name' => 'etudiant-has-ecole']);
            Role::create(['name' => 'professeur']);
            Role::create(['name' => 'promoteur']);
        }


        return view('site.Home');
    }
}
