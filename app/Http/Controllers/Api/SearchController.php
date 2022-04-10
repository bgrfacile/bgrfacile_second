<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\CoursResource;
use App\Http\Resources\Exercice\CustumExerciceResource;
use App\Http\Resources\Solution\SolutionResource;
use App\Models\Cours;
use App\Models\Exercice;
use App\Models\Solution;
use Illuminate\Http\Request;

class SearchController extends Controller
{

    public function searchAll(Request $request, $query)
    {
        $cours = $this->searchCours($query);
        $exercices = $this->searchExercices($query);
        $solutions = $this->searchSolutions($query);
        return response([
            'cours' => $cours,
            'exercices' => $exercices,
            'solutions' => $solutions
        ], 200);
    }

    private function searchCours($query)
    {
        $cours = Cours::where('isActif', "1")
            ->where('title', 'like', '%' . $query . '%')
            ->orWhere('description', 'like', '%' . $query . '%')
            ->get()->reverse();
        return CoursResource::collection($cours);
    }

    private function searchExercices($query)
    {
        $exercices = Exercice::where('title', 'like', '%' . $query . '%')
            ->where('title', 'like', '%' . $query . '%')
            ->orWhere('description', 'like', '%' . $query . '%')
            ->get()->reverse();
        return CustumExerciceResource::collection($exercices);
    }

    private function searchSolutions($query)
    {
        $solutions = Solution::where('title', 'like', '%' . $query . '%')
            ->where('title', 'like', '%' . $query . '%')
            ->orWhere('resume', 'like', '%' . $query . '%')
            ->get()->reverse();
        return SolutionResource::collection($solutions);
    }
}
