<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\Exercice\CustumExerciceResource;
use App\Http\Resources\Exercice\ExerciceSimpleResource;
use App\Models\Exercice;
use Illuminate\Http\Request;

class ExercicesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // $exercices = Exercice::with('cours')->orderBy('created_at', 'desc')->take(5)->get();
        // return response()->json($exercices);
        $exercices = Exercice::where('isActif', '1')->orderBy('created_at', 'desc')->get();
        return CustumExerciceResource::collection($exercices);
    }
    public function getExosByCycle($idCycle)
    {
        $exercices = Exercice::where('isActif', "1")
            ->whereHas('cycles', function ($query) use ($idCycle) {
                $query->where('cycles.id', $idCycle);
            })
            ->get()->reverse();
        return CustumExerciceResource::collection($exercices);
    }
    public function getExosByLevel($idCycle, $idLevel)
    {
        if ($idCycle != "undefined") {
            $exercices = Exercice::where('isActif', "1")
                ->whereHas('levels', function ($query) use ($idLevel) {
                    $query->where('levels.id', $idLevel);
                })
                ->whereHas('cycles', function ($query) use ($idCycle) {
                    $query->where('cycles.id', $idCycle);
                })
                ->get()->reverse();
            return CustumExerciceResource::collection($exercices);
        } else {
            $exercices = Exercice::where('isActif', "1")
                ->whereHas('levels', function ($query) use ($idLevel) {
                    $query->where('levels.id', $idLevel);
                })
                // ->whereHas('cycles', function ($query) use ($idCycle) {
                //     $query->where('cycles.id', $idCycle);
                // })
                ->get()->reverse();
            return CustumExerciceResource::collection($exercices);
        }
    }

    public function getExosByMatiere($idCycle, $idLevel, $idMatiere)
    {
        $exercices = null;
        if ($idLevel == "undefined" && $idCycle == "undefined") {
            $exercices = Exercice::where('isActif', "1")
                ->whereHas('matieres', function ($query) use ($idMatiere) {
                    $query->where('matieres.id', $idMatiere);
                })
                ->get()->reverse();
        } elseif ($idCycle == "undefined") {
            $exercices = Exercice::where('isActif', "1")
                ->whereHas('levels', function ($query) use ($idLevel) {
                    $query->where('levels.id', $idLevel);
                })
                ->whereHas('matieres', function ($query) use ($idMatiere) {
                    $query->where('matieres.id', $idMatiere);
                })
                ->get()->reverse();
        } elseif ($idLevel == "undefined") {
            $exercices = Exercice::where('isActif', "1")
                ->whereHas('cycles', function ($query) use ($idCycle) {
                    $query->where('cycles.id', $idCycle);
                })
                ->whereHas('matieres', function ($query) use ($idMatiere) {
                    $query->where('matieres.id', $idMatiere);
                })
                ->get()->reverse();
        } else {
            $exercices = Exercice::where('isActif', "1")
                ->whereHas('cycles', function ($query) use ($idCycle) {
                    $query->where('cycles.id', $idCycle);
                })
                ->whereHas('levels', function ($query) use ($idLevel) {
                    $query->where('levels.id', $idLevel);
                })
                ->whereHas('matieres', function ($query) use ($idMatiere) {
                    $query->where('matieres.id', $idMatiere);
                })
                ->get()->reverse();
        }
        return CustumExerciceResource::collection($exercices);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // dd($request->all());
        $request->validate([
            'title' => 'required',
            'description' => 'string|min:5',
            'isActif' => 'required',
            'isHandout' => 'required',
        ]);
        $exercice = Exercice::create([
            'title' => $request->title,
            'description' => $request->description,
            'isActif' => $request->isActif,
            'is_handout' => $request->isHandout,
        ]);
        $exercice->contents()->create([
            // 'contentable_id' => $exercice->id,
            // 'contentable_type' => 'App\Models\Exercice',
            'content' => $request->content,
            'type_content' => $request->type_content,
        ]);
        $exercice->cours()->attach($request->cours_id);
        $exercice->cycles()->attach($request->cycle_id);
        $exercice->levels()->attach($request->level_id);
        $exercice->matieres()->attach($request->matiere_id);
        $exercice->users()->attach($request->user_id);
        return response([
            'message' => 'exercice created successfully',
            'exercice' => new ExerciceSimpleResource($exercice),
        ], 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
