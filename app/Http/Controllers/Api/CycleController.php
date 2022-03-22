<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\Cycle\BasicCycleResource;
use App\Http\Resources\Cycle\FrontCycleResource;
use App\Http\Resources\CycleResource;
use App\Models\Cycle;
use Illuminate\Http\Request;

class CycleController extends Controller
{
    public function custums()
    {
        $cycles = Cycle::all();
        return FrontCycleResource::collection($cycles);
    }
    public function nonCustums()
    {
        $cycles = Cycle::all();
        return BasicCycleResource::collection($cycles);
    }
}
