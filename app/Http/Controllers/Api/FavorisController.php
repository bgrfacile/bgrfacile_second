<?php

namespace App\Http\Controllers\APi;

use App\Http\Controllers\Controller;
use App\Http\Resources\Cours\CoursResource;
use App\Http\Resources\Exercice\ExerciceFullResource;
use App\Models\Cours;
use App\Models\Exercice;
use App\Models\User;

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
        return ExerciceFullResource::collection($exercices);
    }
}
