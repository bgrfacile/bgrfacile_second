<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\MatiereResource;
use App\Models\Matiere;
use Illuminate\Http\Request;

class MatiereController extends Controller
{
    public function __invoke()
    {
        $matieres = Matiere::all();
        return MatiereResource::collection($matieres);
    }
}
