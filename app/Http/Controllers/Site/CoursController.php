<?php

namespace App\Http\Controllers\Site;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class CoursController extends Controller
{
    public function __invoke()
    {

        return view('site.contenus.index');
    }
}
