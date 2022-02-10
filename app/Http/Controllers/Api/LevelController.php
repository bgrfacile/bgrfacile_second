<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\LevelResource;
use App\Models\Level;
use Illuminate\Http\Request;

class LevelController extends Controller
{
    public function __invoke()
    {
        $levels = Level::all();
        return LevelResource::collection($levels);
    }
}
