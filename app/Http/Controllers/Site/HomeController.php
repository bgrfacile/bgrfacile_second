<?php

namespace App\Http\Controllers\Site;

use App\Models\User;
use Illuminate\Http\Request;
use Spatie\Permission\Models\Role;
use App\Http\Controllers\Controller;
use App\Models\Cours;
use App\Models\Solution;
use Illuminate\Support\Facades\Auth;

class HomeController extends Controller
{
    public function __invoke()
    {
        // if (Role::count() == 0) {
        //     app()[\Spatie\Permission\PermissionRegistrar::class]->forgetCachedPermissions();
        //     Role::create(['name' => 'super-admin']);
        //     Role::create(['name' => 'admin']);
        //     Role::create(['name' => 'etudiant']);
        //     Role::create(['name' => 'etudiant-has-ecole']);
        //     Role::create(['name' => 'professeur']);
        //     Role::create(['name' => 'promoteur']);
        // }
        $countCours = Cours::count();
        $countExercices = Cours::count();
        $countSolutions = Solution::count();

        return view('site.Home', [
            'countCours' => $countCours ?? 0,
            'countExercices' => $countExercices ?? 0,
            'countSolutions' => $countSolutions ?? 0,
            'countFormation' => 0,
        ]);
    }
}
