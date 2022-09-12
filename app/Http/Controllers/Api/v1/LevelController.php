<?php

namespace App\Http\Controllers\Api\v1;

use App\Http\Controllers\Controller;
use App\Http\Resources\v1\Level\LevelCollection;
use App\Http\Resources\v1\Level\LevelResource;
use App\Models\Level;
use Illuminate\Http\Request;

class LevelController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return new LevelCollection(Level::paginate(15));
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
            "name" => "required|string|unique:levels,name",
        ]);
        $level = Level::create([
            "name" => $request->name
        ]);

        return response()->json([
            "data" => new LevelResource($level)
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  Level  $level
     * @return \Illuminate\Http\Response
     */
    public function show(Level $level)
    {
        return new LevelResource($level);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  Level  $level
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Level $level)
    {
        $request->validate([
            "name" => "required|string|unique:levels,name",
        ]);
        $result = $level->update([
            "name" => $request->name
        ]);

        return response()->json([
            "success" => $result,
            "data" => new LevelResource($level)
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  Level  $level
     * @return \Illuminate\Http\Response
     */
    public function destroy(Level $level)
    {
        $result = $level->delete();
        return response()->json([
            "success" => $result,
        ]);
    }

    public function search(string $name)
    {
        $levels = Level::where('name', 'like', '%' . $name . '%')->paginate(15);
        return new LevelCollection($levels);
    }
}
