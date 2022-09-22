<?php

namespace App\Http\Controllers\Api\v1;

use App\Http\Controllers\Controller;
use App\Http\Resources\v1\Parent\ParentCollection;
use App\Http\Resources\v1\Parent\ParentResource;
use App\Models\ParentUser;
use Illuminate\Http\Request;

class ParentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return new ParentCollection(ParentUser::paginate());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([]);
        $parent = ParentUser::create($request->all());

        return response()->json([
            "data" => new ParentResource($parent)
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $parent = ParentUser::find($id);
        return response()->json([
            "data" => new ParentResource($parent)
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
        $request->validate([]);
        $parent = Parent::findOrFail($id);
        $result = $parent->update($request->all());

        return response()->json([
            "success" => $result
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $parent = Parent::findOrFail($id);
        $result = $parent->delete();
        return response()->json([
            "success" => $result
        ]);
    }
}
