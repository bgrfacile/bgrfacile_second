<?php

namespace App\Http\Controllers\Site;

use App\Models\Cours;
use Illuminate\View\View;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Redirect;

class CoursController extends Controller
{

    public function index(): View
    {

        return view('site.contenus.index');
    }

    public function randomCours()
    {
        $cours = Cours::inRandomOrder()->first();
        $slugNameCours = Str::slug($cours->title);
        return Redirect::to("/cours/read/$slugNameCours-$cours->id");
    }
}
