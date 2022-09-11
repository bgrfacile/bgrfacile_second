<?php

namespace App\Http\Controllers\Api\v1;

use App\Models\Ecole;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\v1\Ecole\EcoleResource;
use App\Http\Resources\v1\Ecole\EcoleCollection;

class EcoleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return new EcoleCollection(Ecole::paginate(15));
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
            "name" => "required|string|unique:ecoles,name",
            "slug" => "nullable|string",
            "email" => "nullable|email",
            "site_web" => "nullable|string|url",
            "description" => "nullable|string|max:800",
            "avantages" => "string",
            "path_logo" => "nullable|image",
            "path_baniere" => "nullable|image",
        ]);
        $path_logo = null;
        if ($request->hasFile('path_logo')) {
            $path_logo =  saveFileToStorageDirectory($request, "path_logo", "logo_ecole");
        }
        $path_baniere = null;
        if ($request->hasFile('path_baniere')) {
            $path_baniere =  saveFileToStorageDirectory($request, "path_baniere", "baniere_ecole");
        }
        $ecole =  Ecole::create([
            "name" => $request->name,
            "slug" => Str::slug($request->name),
            "email" => $request->email,
            "site_web" => $request->site_web,
            "description" => $request->description,
            "avantages" => $request->avantages,
            "path_logo" => $path_logo,
            "path_baniere" => $path_baniere,
        ]);
        return response()->json([
            "sucess" => true,
            "message" => "creation avec success",
            "data" => [
                "ecole" => new EcoleResource($ecole)
            ]
        ], 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  Ecole  $ecole
     * @return \Illuminate\Http\Response
     */
    public function show(Ecole $ecole)
    {
        return new EcoleResource($ecole);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, int $id)
    {
        $request->validate([
            "name" => "string|unique:ecoles,name",
            "slug" => "string",
            "email" => "email",
            "site_web" => "string|url",
            "description" => "string|max:800",
            "avantages" => "string",
            "path_logo" => "nullable|image",
            "path_baniere" => "nullable|image",
        ]);
        $path_logo = $request->path_logo;
        if ($request->hasFile('path_logo')) {
            $path_logo =  saveFileToStorageDirectory($request, "path_logo", "logo_ecole");
        }
        $path_baniere = $request->path_baniere;
        if ($request->hasFile('path_baniere')) {
            $path_baniere =  saveFileToStorageDirectory($request, "path_baniere", "baniere_ecole");
        }
        $ecole = Ecole::findOrFail($id);
        $result = $ecole->update([
            "name" => $request->name ?? $ecole->name,
            // "slug" => $request->name != null ? Str::slug($request->name) : $ecole->slug,
            "email" => $request->email ?? $ecole->email,
            "site_web" => $request->site_web ?? $ecole->site_web,
            "description" => $request->description ?? $ecole->description,
            "avantages" => $request->avantages ?? $ecole->avantages,
            "path_logo" => $path_logo,
            "path_baniere" => $path_baniere,
        ]);
        return response()->json([
            "sucess" => $result,
        ]);
    }

    /**
     * Remove the specified resource from storage.
     * @return \Illuminate\Http\Response
     */
    public function destroy(Ecole $ecole)
    {
        $result = $ecole->delete();
        return response()->json([
            "success" => $result,
        ], 200);
    }

    public function search(string $name)
    {
        $ecoles = Ecole::where('name', 'like', '%' . $name . '%')->paginate(10);
        return new EcoleCollection($ecoles);
    }
}
