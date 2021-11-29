<?php

namespace App\Http\Controllers\Site;

use App\Http\Controllers\Controller;
use App\Models\SlugUser;
use Illuminate\Http\Request;

class ProfilController extends Controller
{
    public function index($slugUser = null)
    {
        if($slugUser == null){
            return view('site.profile.profil',[
                'user'=>null
            ]);
        }
        $slug_user = SlugUser::where('slug',$slugUser)->first();
        return view('site.profile.profil',[
            'user'=>$slug_user->user
        ]);
    }
}
