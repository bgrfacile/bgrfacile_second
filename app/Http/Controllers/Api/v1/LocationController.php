<?php

namespace App\Http\Controllers\Api\v1;

use App\Http\Controllers\Controller;
use App\Http\Resources\v1\Location\LocationRessource;
use App\Models\Location;
use Illuminate\Http\Request;

class LocationController extends Controller
{
    /**
     *     @OA\GET(
     *     path="/locations",
     *     description="locations paginer",
     *     @OA\Response(
     *      response=200,
     *      description="json avec une clé data"
     * ),
     * ),
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Location::paginate(15);
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
     *     @OA\GET(
     *     path="/locations/{id}",
     *     description="locations paginer",
     *     @OA\parameter(
     *          name="id",
     *          in="path",
     *          required=true,
     *      ),
     *     @OA\Response(
     *      response=200,
     *      description="json avec une clé data"
     * ),
     * ),
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
     *     @OA\PUT(
     *     path="/locations/{id}",
     *     description="locations paginer",
     *     @OA\parameter(
     *          name="id",
     *          in="path",
     *          required=true,
     *      ),
     *     @OA\Response(
     *      response=200,
     *      description="json avec une clé data"
     * ),
     * ),
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
     *     @OA\DELETE(
     *     path="/locations/{id}",
     *     description="locations delete",
     *     @OA\parameter(
     *          name="id",
     *          in="path",
     *          required=true,
     *      ),
     *     @OA\Response(
     *      response=200,
     *      description="json avec une clé data"
     * ),
     * ),
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
