<?php

namespace App\Http\Controllers\Site;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class AboutController extends Controller
{
    public function about()
    {
        return view('site.about');
    }
    public function who()
    {
        return view('site.qui-sommes-nous');
    }
    public function politiqueDeConfidentialite()
    {
        return view('site.politique');
    }
}
