<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        $users = User::all()->reverse();
        return Inertia::render('Dashboard/Index', [
            'users' => $users->toJson(),
        ]);
    }
}
