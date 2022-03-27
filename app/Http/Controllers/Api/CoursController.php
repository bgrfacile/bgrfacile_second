<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\CoursResource;
use App\Http\Resources\UserResource;
use App\Models\Cours;
use App\Models\Cycle;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CoursController extends Controller
{

    public function randomCours()
    {
        $cours = Cours::inRandomOrder()->first();
        return new CoursResource($cours);
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $cours = Cours::where('isActif', "1")->get()->reverse();
        return CoursResource::collection($cours);
    }
    public function getCoursByCycle($idCycle)
    {
        $cours = Cours::where('isActif', "1")
            ->whereHas('cycles', function ($query) use ($idCycle) {
                $query->where('cycles.id', $idCycle);
            })
            ->get()->reverse();
        // $cycle = Cycle::findOrFail($idCycle);
        // $cours = $cycle->cours->where('isActif', "1")->reverse();
        return CoursResource::collection($cours);
    }
    public function getCoursByLevel($idCycle, $idLevel)
    {
        // $cours = DB::table('cours')
        //     ->join('cours_cycles', 'cours.id', '=', 'cours_cycles.cour_id')
        //     ->join('cycles', 'cours_cycles.cycle_id', '=', 'cycles.id')
        //     ->join('cours_levels', 'cours.id', '=', 'cours_levels.cour_id')
        //     ->join('levels', 'cours_levels.level_id', '=', 'levels.id')
        //     ->where('cycles.id', $idCycle)
        //     ->where('levels.id', $idLevel)
        //     ->where('cours.isActif', "1")
        //     ->get()->reverse();
        $cours = Cours::where('isActif', "1")
            ->whereHas('levels', function ($query) use ($idLevel) {
                $query->where('levels.id', $idLevel);
            })
            ->whereHas('cycles', function ($query) use ($idCycle) {
                $query->where('cycles.id', $idCycle);
            })
            ->get()->reverse();
        return CoursResource::collection($cours);
    }

    /**
     *  Get the cours by cycle and level and matiere
     *  @param int $idCycle, int $idLevel, int $idMatiere
     *  @return App\Http\Resources\CoursResource
     */
    public function getCoursByMatiere($idCycle, $idLevel, $idMatiere)
    {
        $cours = Cours::where('isActif', "1")
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

        return CoursResource::collection($cours);
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $user = User::find($request->user_id);
        $coverImage = null;
        if ($request->hasFile('coverImage')) {
            $imageName = time() . '_' . $request->file('coverImage')->getClientOriginalName();
            $coverImage = "/storage/" . $request->file('coverImage')->storeAs('coverImage', $imageName, 'public');
        }
        $cours = $user->cours()->create([
            'title' => $request->title,
            'description' => $request->description,
            'coverImage' => $coverImage,
            'isActif' => $request->isActif,
        ]);
        $cours->contents()->create([
            'content' => $request->content,
            'type_content' => $request->type_content,
        ]);
        $cours->matieres()->attach($request->matiereId);
        $cours->cycles()->attach($request->cycleId);
        $cours->levels()->attach($request->levelId);
        return response([
            'message' => 'cours created successfully',
            'cours' => new CoursResource($cours),
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
        $cours = Cours::find($id);
        return response([
            'message' => 'cours found successfully',
            'cours' => new CoursResource($cours),
        ], 200);
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
        $cours = Cours::findOrFail($id);
        $cours->update([]);
        return response([
            'message' => 'cours updated successfully',
            'cours' => new CoursResource($cours),
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
        $cours = Cours::findOrFail($id);
        $cours->delete();
        return response([
            'message' => 'cours deleted successfully',
        ], 200);
    }

    public function CoursToUser($userId)
    {
        $user = User::find($userId);
        return CoursResource::collection($user->cours->reverse());
    }


    public function updateVisibilityCours($courId, Request $request)
    {
        $request->validate(
            [
                'isActif' => 'required|boolean',
            ]
        );
        // $user = User::find($request->user_id);
        // $cours = $user->cours()->find($courId);
        $cours = Cours::find($courId);
        $cours->isActif = $request->isActif;
        $cours->save();
        return response([
            'message' => 'cours updated successfully',
        ], 200);
    }
}
