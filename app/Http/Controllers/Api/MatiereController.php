<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\Matiere\BasicMatiereResource;
use App\Http\Resources\MatiereResource;
use App\Models\Matiere;

class MatiereController extends Controller
{
    public function customs()
    {
        $matieres = Matiere::where('isActif', '1')->get();
        return MatiereResource::collection($matieres);
    }
    public function nonCustoms()
    {
        $matieres = Matiere::where('isActif', '1')->get();
        return BasicMatiereResource::collection($matieres);
    }
}
