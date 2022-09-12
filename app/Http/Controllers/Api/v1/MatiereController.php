<?php

namespace App\Http\Controllers\Api\v1;

use App\Http\Controllers\Controller;
use App\Http\Resources\v1\Matiere\MatiereCollection;
use App\Http\Resources\v1\Matiere\MatiereResource;
use App\Models\Matiere;
use Illuminate\Http\Request;

class MatiereController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return new MatiereCollection(Matiere::paginate(15));
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
            "name" => "required|unique:matieres,name"
        ]);
        $matiere = Matiere::create($request->all());
        return response()->json([
            "data" => new MatiereResource($matiere)
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  Matiere $matiere
     * @return \Illuminate\Http\Response
     */
    public function show(Matiere $matiere)
    {
        return new MatiereResource($matiere);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  Matiere  $matiere
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Matiere $matiere)
    {
        $request->validate([
            "name" => "required|unique:matieres,name"
        ]);
        $result = $matiere->update($request->all());
        return response()->json([
            "success" => $result,
            "data" => new MatiereResource($matiere)
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  Matiere  $matiere
     * @return \Illuminate\Http\Response
     */
    public function destroy(Matiere $matiere)
    {
        $result = $matiere->delete();
        return response()->json([
            "success" => $result,
        ]);
    }


    public function search(string $name)
    {
        $matieres = Matiere::where('name', 'like', '%' . $name . '%')->paginate(15);
        return new MatiereCollection($matieres);
    }
}
