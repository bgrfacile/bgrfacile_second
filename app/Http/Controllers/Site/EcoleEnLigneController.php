<?php

namespace App\Http\Controllers\Site;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class EcoleEnLigneController extends Controller
{
    public function index()
    {
        return view("site.ecole-en-ligne.index", [
            "title" => "Ecole en ligne",
            "countSchools" => 1000, //\App\School::count()
        ]);
    }

    public function create()
    {
        return view("site.ecole-en-ligne.create");
    }
}
