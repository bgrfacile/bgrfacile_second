<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Cours;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        // $users = User::all()->reverse();
        $countusers = User::all()->count();
        $countCours = Cours::all()->count();
        return Inertia::render('Dashboard/Index', [
            'countusers' => $countusers,
            'countCours' => $countCours,
        ]);
    }
}
