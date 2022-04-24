<?php

namespace App\Http\Controllers\Api;

use Exception;
use App\Models\User;
use App\Models\Exercice;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\Http\Resources\Exercice\ExerciceFullResource;

class ExercicesController extends Controller
{
    public function myExercices(Request $request)
    {
        $user = $request->user();
        $exercices = $user->exercices;
        return ExerciceFullResource::collection($exercices);
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
        return ExerciceFullResource::collection($exercices);
    }
    public function getExosByCycle($idCycle)
    {
        $exercices = Exercice::where('isActif', "1")
            ->whereHas('cycles', function ($query) use ($idCycle) {
                $query->where('cycles.id', $idCycle);
            })
            ->get()->reverse();
        return ExerciceFullResource::collection($exercices);
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
            return ExerciceFullResource::collection($exercices);
        } else {
            $exercices = Exercice::where('isActif', "1")
                ->whereHas('levels', function ($query) use ($idLevel) {
                    $query->where('levels.id', $idLevel);
                })
                // ->whereHas('cycles', function ($query) use ($idCycle) {
                //     $query->where('cycles.id', $idCycle);
                // })
                ->get()->reverse();
            return ExerciceFullResource::collection($exercices);
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
        return ExerciceFullResource::collection($exercices);
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
            'cours_id' => 'nullable',
            'coverImage' => 'image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);
        $coverImage = null;
        if ($request->hasFile('coverImage')) {
            $imageName = time() . '_' . $request->file('coverImage')->getClientOriginalName();
            $coverImage = "/storage/" . $request->file('coverImage')->storeAs('images_contenus', $imageName, 'public');
        }
        $user = User::findorFail(Auth::user()->id); //$request->user_id
        switch ($request->typeContent) {
            case 'PDF':
                $content = null;
                if ($request->hasFile('content')) {
                    $nameContent = time() . '_' . $request->file('content')->getClientOriginalName();
                    $content = "/storage/" . $request->file('content')->storeAs('contenus_pdf', $nameContent, 'public');
                }
                $exercice = $user->exercices()->create([
                    'title' => $request->title,
                    'slug' => Str::slug($request->title),
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
                    'slug' => Str::slug($request->title),
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

        if ($request->cours_id != "null") {
            $exercice->cours()->attach($request->cours_id);
        }
        $exercice->cycles()->attach($request->cycle_id);
        $exercice->levels()->attach($request->level_id);
        $exercice->matieres()->attach($request->matiere_id);
        return response([
            'message' => $request->isActif ? 'Exercice poster avec succès' : 'Exercice mis en brouillon avec succès',
            'exercice' => new ExerciceFullResource($exercice),
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
        $cours = Exercice::findOrFail($id);
        return new ExerciceFullResource($cours);
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
        $request->validate([
            'title' => 'required|string',
            'description' => 'nullable|string|min:3',
            'cycle_id' => 'required',
            'level_id' => 'required',
            'matiere_id' => 'required',
        ]);
        // dd($request->all());
        $exercice = Exercice::findOrFail($id);
        $coverImage = null;
        if ($request->hasFile('coverImage')) {
            $imageName = time() . '_' . Str::slug($request->file('coverImage')->getClientOriginalName());
            $coverImage = "/storage/" . $request->file('coverImage')->storeAs('images_contenus', $imageName, 'public');
        }

        $exercice->update([
            'title' => $request->title,
            'slug' => Str::slug($request->title),
            'description' => $request->description,
            'coverImage' => $coverImage,
            'isActif' => $request->isActif ? "1" : "0",
            'is_SubjectExam' => $request->isSubjectExam ? 1 : 0,
        ]);

        switch ($request->type_content) {
            case 'PDF':
                $content = null;
                if ($request->hasFile('content')) {
                    $nameContent = time() . '_' . Str::slug($request->file('content')->getClientOriginalName());
                    $content = "/storage/" . $request->file('content')->storeAs('contenus_pdf', $nameContent, 'public');
                }
                $exercice->contents()->update([
                    'content' => $content,
                ]);
                break;
            case 'TEXTE':
                $exercice->contents()->updateOrCreate([
                    'type_content' => $request->type_content,
                ], [
                    'content' => $request->content,
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
        $exercice->cycles()->sync($request->cycle_id);
        $exercice->levels()->sync($request->level_id);
        $exercice->matieres()->sync($request->matiere_id);
        return response([
            'message' => 'Exercice mis à jour avec succès',
            'exercice' => new ExerciceFullResource($exercice),
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $exercice = Exercice::findOrFail($id);
        $exercice->delete();
        return response([
            'message' => 'Exercice supprimé avec succès',
            'exercice' => new ExerciceFullResource($exercice),
        ], 200);
    }

    public function exercicesUser($exercicesId)
    {
        $user = User::findOrFail($exercicesId);
        $exercices = $user->exercices()->get()->reverse();
        return ExerciceFullResource::collection($exercices);
    }

    public function updateIsactif($exercicesId, Request $request)
    {
        $request->validate([
            'isActif' => 'required|boolean',
        ]);
        $exercice = Exercice::findOrFail($exercicesId);
        $exercice->isActif = $request->isActif;
        $exercice->save();
        return response([
            'message' => 'Exercice mis à jour avec succès',
            'exercice' => new ExerciceFullResource($exercice),
        ], 200);
    }
}
