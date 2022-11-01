<?php

namespace App\Http\Controllers\Api\v1;

use App\Http\Controllers\Controller;
use App\Http\Resources\v1\Tuteur\TuteurCollection;
use App\Http\Resources\v1\Tuteur\TuteurResource;
use App\Models\Tuteur;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class TuteurController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        return new TuteurCollection(Tuteur::paginate(15));
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
            'first_name' => 'string|max:255',
            'last_name' => 'string|max:255',
            'email' => 'required|email|unique:tuteurs',
            'phone' => 'string',
            'path_image' => 'image',
            'password' => 'required|string|min:8',
        ]);
        $path_image = null;
        if ($request->hasFile('path_image')) {
            $path_image =  saveFileToStorageDirectory($request, "path_image", "image_parent");
        }
        $tuteur = Tuteur::create([
            'first_name' => $request->first_name,
            'last_name' => $request->last_name,
            'email' => $request->email,
            'phone' => $request->phone,
            'path_image' => $path_image,
            'password' => Hash::make($request->password),
        ]);

        return response()->json([
            "message" => "creation avec success",
            "data" => new TuteurResource($tuteur)
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
        $tuteur = Tuteur::findOrFail($id);
        return response()->json([
            "data" => new TuteurResource($tuteur)
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
            'first_name' => 'string|max:255',
            'last_name' => 'string|max:255',
            'phone' => 'string',
            'path_image' => 'image',
        ]);
        $tuteur = Tuteur::find($id);
        $path_image = $tuteur->path_image;
        if ($request->hasFile('path_image')) {
            $path_image =  saveFileToStorageDirectory($request, "path_image", "image_parent");
        }
        $tuteur->update([
            'first_name' => $request->first_name,
            'last_name' => $request->last_name,
            'phone' => $request->phone,
            'path_image' => $path_image,
        ]);

        return response()->json([
            "message" => "modification avec success",
            "data" => new TuteurResource($tuteur)
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
        $tuteur = Tuteur::find($id);
        $tuteur->delete();
        return response()->json([
            "message" => "suppression avec success",
            "data" => new TuteurResource($tuteur)
        ]);
    }
}
