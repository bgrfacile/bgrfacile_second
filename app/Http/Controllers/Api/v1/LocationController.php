<?php

namespace App\Http\Controllers\Api\v1;

use App\Http\Controllers\Controller;
use App\Http\Resources\v1\Location\LocationRessource;
use App\Models\Location;
use Illuminate\Http\Request;

class LocationController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
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
            'ecole_id' => 'required',
            'adresse' => 'string',
            'lng' => 'required|numeric',
            'lat' => 'required|numeric',
        ]);

        $location = Location::create([
            'ecole_id' => $request->ecole_id,
            'adresse' => $request->adresse,
            'lng' => $request->lng,
            'lat' => $request->lat,
        ]);
        return response()->json([
            "data" => [
                "location" => $location
            ]
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
        $location = Location::find($id);
        return new LocationRessource($location);
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
            'ecole_id' => 'required',
            'adresse' => 'string',
            'lng' => 'required|numeric',
            'lat' => 'required|numeric',
        ]);
        $location = Location::findOrFail($id);
        $result = $location->update([
            'ecole_id' => $request->ecole_id,
            'adresse' => $request->adresse,
            'lng' => $request->lng,
            'lat' => $request->lat,
        ]);
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
        $location = Location::findOrFail($id);
        $result = $location->delete();
        return response()->json([
            "success" => $result
        ]);
    }
}
