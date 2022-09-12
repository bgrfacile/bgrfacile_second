<?php

namespace App\Http\Controllers\Api\v1;

use App\Models\Cours;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\v1\Cours\CoursCollection;
use App\Http\Resources\v1\Cours\CoursResource;

class CoursController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return new CoursCollection(Cours::paginate(15));
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
            "name" => "required|string|max:255",
            'description' => 'nullable|string|min:5',
            'path_image' => 'nullable|image|min:5',
            'is_actif' => 'nullable|boolean',
        ]);
        $path_image = null;
        if ($request->hasFile('path_image')) {
            $path_image =  saveFileToStorageDirectory($request, "path_image", "image_cours");
        }

        $cour = Cours::create([
            "name" => $request->name,
            "slug" => Str::slug($request->name),
            "description" => $request->description,
            "path_image" => $path_image,
            "is_actif" => $request->is_actif != null ? $request->is_actif : true,
        ]);

        return response()->json([
            "message" => "creation avec success",
            "data" => [
                "cour" => new CoursResource($cour)
            ]
        ], 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  Cours  $cour
     * @return \Illuminate\Http\Response
     */
    public function show(Cours $cour)
    {
        return new CoursResource($cour);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  Cours  $cour
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, int $id)
    {
        $cour = Cours::findOrFail($id);
        // dd($request->all(), $cour);
        $request->validate([
            "name" => "nullable|string|max:255",
            'description' => 'nullable|string|min:5',
            'path_image' => 'nullable|image|min:5',
            'is_actif' => 'nullable|boolean',
        ]);

        $path_image = $cour->path_image;
        if ($request->hasFile('path_image')) {
            $path_image =  saveFileToStorageDirectory($request, "path_image", "image_cours");
        }

        $result = $cour->update([
            "name" => $request->name ?? $cour->name,
            "slug" => Str::slug($request->name ?? $cour->name),
            "description" => $request->description ?? $cour->description,
            "path_image" => $path_image,
            "is_actif" => $request->is_actif ?? $cour->is_actif,
        ]);

        return response()->json([
            "success" => $result,
            "message" => "mise à jours de la resource effectué",
            "data" => [
                "cour" => new CoursResource($cour)
            ]
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  Cours  $cour
     * @return \Illuminate\Http\Response
     */
    public function destroy(Cours $cour)
    {
        $result = $cour->delete();

        return response()->json([
            "success" => $result,
        ], 201);
    }

    public function search(string $name)
    {
        $cours = Cours::where('is_actif', "1")
            ->where('name', 'like', '%' . $name . '%')
            ->orWhere('description', 'like', '%' . $name . '%')
            ->paginate(15);
        return new CoursCollection($cours);
    }
}
