<?php

namespace App\Http\Controllers\Api\v1;

use Exception;
use App\Models\ImagesEcole;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Storage;
use App\Http\Resources\v1\ImageEcole\ImageEcoleResource;
use Illuminate\Support\Facades\Request as FacadesRequest;

class ImageEcoleController extends Controller
{
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
            'path_image' => 'required|image|mimes:png,jpg,jpeg,mp4,gif',
            'description' => 'string|nullable'
        ]);
        $path_image = null;
        if ($request->hasFile('path_image')) {
            saveFileToStorageDirectory($request, "path_image", "images_ecoles");
            // $imageName = time() . '_' . $request->file('path_image')->getClientOriginalName();
            // $path_image = "/storage/" . $request->file('path_image')->storeAs('images_ecoles', $imageName, 'public');
        }
        $imageEcole = ImagesEcole::create([
            'path_image' => $path_image,
            "ecole_id" => $request->ecole_id,
            'description' => $request->description
        ]);
        return response()->json([
            'success' => true,
            "data" => [
                'image_ecole' => new ImageEcoleResource($imageEcole)
            ]
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function show(ImagesEcole $imageEcole)
    {
        return new ImageEcoleResource($imageEcole);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, int $id)
    {
        $imageEcole = ImagesEcole::findOrFail($id);

        $request->validate([
            'ecole_id' => 'required',
            'path_image' => 'nullable|image|mimes:png,jpg,jpeg,mp4',
            'description' => 'string|nullable'
        ]);
        $path_image = $imageEcole->path_image;
        if ($request->hasFile('path_image')) {
            Storage::delete(storage_path($imageEcole->path_image));
            saveFileToStorageDirectory($request, "path_image", "images_ecoles");
            // $imageName = time() . '_' . Str::slug($request->file('path_image')->getClientOriginalName());
            // $path_image = DIRECTORY_SEPARATOR . "storage" . DIRECTORY_SEPARATOR . $request->file('path_image')->storeAs('images_ecoles', $imageName, 'public');
        }
        $imageUpadate = $imageEcole->update([
            "path_image" => $path_image,
            "ecole_id" => $request->ecole_id,
            "description" => $request->description ?? $imageEcole->description
        ]);
        return response()->json([
            'success' => $imageUpadate,
            "data" => [
                'image_ecole' => new ImageEcoleResource($imageEcole)
            ]
        ]);
    }

    /**
     * Remove the specified resource from storage.
     * @return \Illuminate\Http\Response
     */
    public function destroy(int $id)
    {
        $imageEcole = ImagesEcole::findOrFail($id);
        Storage::delete(storage_path($imageEcole->path_image));
        $result = $imageEcole->delete();
        return response()->json([
            "success" => $result,
        ]);
    }
}
