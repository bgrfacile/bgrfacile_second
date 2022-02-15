<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\LevelResource;
use App\Http\Resources\MatiereResource;
use App\Models\Level;
use App\Models\Matiere;
use Illuminate\Http\Request;
use Inertia\Inertia;

class LevelController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $levels = Level::all()->reverse();
        $matieres = Matiere::all()->reverse();
        return Inertia::render('Level/IndexLevel', [
            'levels' => LevelResource::collection($levels),
            'matieres' => MatiereResource::collection($matieres),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render('Level/create');
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
            'name' => 'string|required'
        ]);
        Level::create([
            'name' => $request->name
        ]);
        return redirect()->route('level.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $level = Level::findOrFail($id);
        return Inertia::render('Level/show', [
            'level' => $level
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $level = Level::findOrFail($id);
        return Inertia::render('Level/edit', [
            'level' => $level
        ]);
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
            'name' => 'string|required'
        ]);
        $level = Level::findOrFail($id);
        $level->name = $request->name;
        $level->save();
        return redirect()->route('level.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $level = Level::findOrFail($id);
        $level->delete();
        return back();
    }

    public function syncToMatieres($id, Request $request)
    {
        $level = Level::findOrFail($id);
        $level->matieres()->sync(array_values($request->newCheckMatiere));
        return back();
    }

    public function attachToMatiere($id, Request $request)
    {
        $matiere = Matiere::create([
            'name' => $request->name,
            'isActif' => '1',
        ]);
        $level = Level::findOrFail($id);
        $level->matieres()->attach($matiere->id);
        return back();
    }
}
