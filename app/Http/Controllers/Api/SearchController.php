<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\CoursResource;
use App\Http\Resources\Exercice\CustumExerciceResource;
use App\Models\Cours;
use App\Models\Exercice;
use Illuminate\Http\Request;

class SearchController extends Controller
{
    public function search(Request $request, $query)
    {
        $cours = Cours::where('isActif', "1")
            ->where('title', 'like', '%' . $query . '%')
            ->orWhere('description', 'like', '%' . $query . '%')
            ->get()->reverse();
        return CoursResource::collection($cours);
    }


}
