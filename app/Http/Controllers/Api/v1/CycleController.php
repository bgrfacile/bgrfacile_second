<?php

namespace App\Http\Controllers\Api\v1;

use App\Http\Controllers\Controller;
use App\Http\Resources\v1\Cycle\CycleCollection;
use App\Http\Resources\v1\Cycle\CycleResource;
use App\Models\Cycle;
use Illuminate\Http\Request;

class CycleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $queryItems = collect($request->query());
        // if(count($queryItems) != 0){
            if ($queryItems->has("paginate")) {
                return new CycleCollection(Cycle::all());
        }
        // } else {
            return new CycleCollection(Cycle::paginate(15));
        // }
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
            "name" => "required|string|unique:cycles,name",
        ]);
        $cycle = Cycle::create([
            "name" => $request->name
        ]);

        return response()->json([
            "data" => new CycleResource($cycle)
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  Cycle  $cycle
     * @return \Illuminate\Http\Response
     */
    public function show(Cycle $cycle)
    {
        return new CycleResource($cycle);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  Cycle  $cycle
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Cycle $cycle)
    {
        $request->validate([
            "name" => "required|string",
        ]);
        $result = $cycle->update([
            "name" => $request->name
        ]);
        return response()->json([
            "success" => $result
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  Cycle  $cycle
     * @return \Illuminate\Http\Response
     */
    public function destroy(Cycle $cycle)
    {
        $result = $cycle->delete();
        return response()->json([
            "success" => $result
        ]);
    }
    public function search(string $name)
    {
        $cycles = Cycle::where('name', 'like', '%' . $name . '%')->paginate(15);
        return new CycleCollection($cycles);
    }

    public function addLevel(Request $request)
    {
        $request->validate([
            "cycle_id" => "required",
            "level_id" => "required"
        ]);
        $cycle = Cycle::findOrFail($request->cycle_id);
        $result = $cycle->levels()->attach($request->level_id);
        return response()->json([
            "success" => true,
            "data" => new CycleResource($cycle)
        ], 200);
    }
    public function removeLevel(Request $request)
    {
        $request->validate([
            "cycle_id" => "required",
            "level_id" => "required"
        ]);
        $cycle = Cycle::findOrFail($request->cycle_id);
        $result = $cycle->levels()->detach($request->level_id);
        return response()->json([
            "success" => true,
            "data" => new CycleResource($cycle)
        ], 200);
    }
}
