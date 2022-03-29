<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\Exercice\CustumExerciceResource;
use App\Http\Resources\Exercice\ExerciceSimpleResource;
use App\Models\Exercice;
use App\Models\User;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ExercicesController extends Controller
{
    public function myExercices(Request $request)
    {
        $user = $request->user();
        $exercices = $user->exercices;
        return CustumExerciceResource::collection($exercices);
    }
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
        $request->validate([
            'title' => 'required',
            'description' => 'string|min:5',
            'isActif' => 'required',
            'isSubjectExam' => 'required',
            'typeContent' => 'required',
            'content' => 'required',
            'coverImage' => 'image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);
        $coverImage = null;
        if ($request->hasFile('coverImage')) {
            $imageName = time() . '_' . $request->file('coverImage')->getClientOriginalName();
            $coverImage = "/storage/" . $request->file('coverImage')->storeAs('cover_exercice', $imageName, 'public');
        }
        $user = User::findorFail($request->user_id);
        switch ($request->typeContent) {
            case 'PDF':
                $content = null;
                if ($request->hasFile('content')) {
                    $content = "/storage/" . $request->file('content')->storeAs('/contenu/PDF/Exercices', $request->file('content')->getClientOriginalName(), 'public');
                }
                $exercice = $user->exercices()->create([
                    'title' => $request->title,
                    'coverImage' => $coverImage,
                    'description' => $request->description,
                    'isActif' => $request->isActif ? "1" : "0",
                    'is_SubjectExam' => $request->isSubjectExam ? 1 : 0,
                ]);
                $exercice->contents()->create([
                    'content' => $content,
                    'type_content' => $request->typeContent,
                ]);
                break;
            case 'TEXTE':
                $exercice = $user->exercices()->create([
                    'title' => $request->title,
                    'coverImage' => $coverImage,
                    'description' => $request->description,
                    'isActif' => $request->isActif ? "1" : "0",
                    'is_SubjectExam' => $request->isSubjectExam ? 1 : 0,
                ]);
                $exercice->contents()->create([
                    'content' => $request->content,
                    'type_content' => $request->typeContent,
                ]);
                break;
            case 'IMAGE':
                # code...
                break;
            case 'VIDEO':
                # code...
                break;
            case 'AUDIO':
                # code...
                break;
            default:
                throw new Exception("Une Erreur dans la request", 1);
                break;
        }

        // $exercice->cours()->attach($request->cours_id);
        $exercice->cycles()->attach($request->cycle_id);
        $exercice->levels()->attach($request->level_id);
        $exercice->matieres()->attach($request->matiere_id);
        return response([
            'message' => $request->isActif ? 'Exercice poster avec succès' : 'Exercice mis en brouillon avec succès',
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
