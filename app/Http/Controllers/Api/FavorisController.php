<?php

namespace App\Http\Controllers\APi;

use App\Http\Controllers\Controller;
use App\Http\Resources\CoursResource;
use App\Http\Resources\Exercice\CustumExerciceResource;
use App\Http\Resources\Exercice\ExerciceSimpleResource;
use App\Models\Cours;
use App\Models\Exercice;
use App\Models\User;
use Illuminate\Http\Request;

class FavorisController extends Controller
{
    public function getCoursFavoris()
    {
        $user = User::find(request()->user()->id);
        $likes = $user->likes()->where('likeable_type', 'App\Models\Cours')->get()->reverse();
        $cours = [];
        foreach ($likes as $like) {
            $cours[] = Cours::find($like->likeable_id);
        }
        return CoursResource::collection($cours);
    }
    public function getExerciceFavoris()
    {
        $user = User::find(request()->user()->id);
        $likes = $user->likes()->where('likeable_type', 'App\Models\Exercice')->get()->reverse();
        $exercices = [];
        foreach ($likes as $like) {
            $exercices[] = Exercice::find($like->likeable_id);
        }
        // return ExerciceSimpleResource::collection($exercices);
        return CustumExerciceResource::collection($exercices);
    }
}
