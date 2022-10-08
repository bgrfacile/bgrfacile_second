<?php

namespace App\Http\Controllers\Api\v1;

use App\Http\Controllers\Controller;
use App\Http\Resources\v1\TypeEcoleCollection;
use App\Http\Resources\v1\TypeEcoleResource;
use App\Models\TypeEcole;
use Illuminate\Http\Request;

class TypeEcoleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return TypeEcoleCollection
     */
    public function index(): TypeEcoleCollection
    {
        return new TypeEcoleCollection(TypeEcole::paginate(15));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request): \Illuminate\Http\JsonResponse
    {
        $request->validate([
            'name' => "required|string"
        ]);
        $typeEcole = TypeEcole::create([
            'name' => $request->name
        ]);

        return response()->json([
            "data" => new TypeEcoleResource($typeEcole)
        ], 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  TypeEcole  $typeEcole
     * @return \Illuminate\Http\Response
     */
    public function show(TypeEcole $typeEcole)
    {
        return new TypeEcoleResource($typeEcole);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  TypeEcole  $typeEcole
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, TypeEcole $typeEcole)
    {
        $request->validate([
            'name' => 'required|string'
        ]);
        $result =  $typeEcole->update($request->all());
        return response()->json([
            "success" => $result
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  TypeEcole  $typeEcole
     * @return \Illuminate\Http\Response
     */
    public function destroy(TypeEcole $typeEcole)
    {
        $result = $typeEcole->delete();
        return response()->json([
            "success" => $result
        ]);
    }
}
