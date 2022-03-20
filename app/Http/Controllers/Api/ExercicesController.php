<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
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
        $exercices = Exercice::with('cours')->orderBy('created_at', 'desc')->take(5)->get();
        return response()->json($exercices);
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
