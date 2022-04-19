<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\Level\BasicLevelResource;
use App\Http\Resources\Level\LevelResource;
use App\Models\Level;

class LevelController extends Controller
{
    public function custums()
    {
        $levels = Level::where('isActif', '1')->get();
        return LevelResource::collection($levels);
    }
    public function nonCustums()
    {
        $levels = Level::where('isActif', '1')->get();
        return BasicLevelResource::collection($levels);
    }
}
