<?php

namespace App\Http\Controllers\Api\v1;

use App\Models\Cours;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\v1\Content\ContentResource;
use App\Http\Resources\v1\Cours\CoursCollection;
use App\Http\Resources\v1\Cours\CoursResource;

class CoursController extends Controller
{
    /**
     *     @OA\GET(
     *     path="/cours",
     *     description="cours paginer",
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
        return new CoursCollection(Cours::paginate(15));
    }

    /**
     *     @OA\POST(
     *     path="/cours",
     *     description="creer un cours",
     *     @OA\Response(
     *      response=200,
     *      description="json avec une clé data"
     * ),
     * ),
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
     *     @OA\GET(
     *     path="/cours/{id}",
     *     description="creer un cours",
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
     * @param  Cours  $cour
     * @return \Illuminate\Http\Response
     */
    public function show(Cours $cour)
    {
        return new CoursResource($cour);
    }

    /**
     *     @OA\PUT(
     *     path="/cours/{id}",
     *     description="creer un cours",
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
     *     @OA\DELETE(
     *     path="/cours/{id}",
     *     description="supprimer un cours",
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
    /**
     *     @OA\GET(
     *     path="/cours/{name}",
     *     description="rechercher un cours",
     *     @OA\parameter(
     *          name="name",
     *          in="path",
     *          required=true,
     *      ),
     *     @OA\Response(
     *      response=200,
     *      description="json avec une clé data"
     * ),
     * ),
     */
    public function search(string $name)
    {
        $cours = Cours::where('is_actif', "1")
            ->where('name', 'like', '%' . $name . '%')
            ->orWhere('description', 'like', '%' . $name . '%')
            ->paginate(15);
        return new CoursCollection($cours);
    }

    /**
     *     @OA\POST(
     *     path="/cours/add/content",
     *     description="ajouter un contenu à un cours",
     *     @OA\Response(
     *      response=200,
     *      description="json avec une clé data"
     * ),
     * ),
     */
    public function addContent(Request $request)
    {
        $request->validate([
            'cour_id' => "required",
            "type_content" => "required",
            "content" => "required"
        ]);
        $cour = Cours::findOrFail($request->cour_id);
        $contentValue = $request->content;
        if ($request->type_content != "texte" && $request->hasFile("content")) {
            $contentValue = saveFileToStorageDirectory($request, "content", "contenus");
        }

        $content = $cour->contents()->create([
            "type_content" => $request->type_content,
            "content" => $contentValue,
        ]);
        return response()->json([
            "data" => new ContentResource($content)
        ]);
    }

    /**
     *     @OA\POST(
     *     path="/cours/remove/content",
     *     description="supprimer un contenu à un cours",
     *     @OA\Response(
     *      response=200,
     *      description="json avec une clé data"
     * ),
     * ),
     */
    public function removeContent(Request $request)
    {
        $request->validate([
            'cour_id' => "required",
            'content_id' => "required"
        ]);
        $cour = Cours::findOrFail($request->cour_id);
        $result = $cour->contents()->where('id', '=', $request->content_id)->delete();
        return response()->json([
            "success" => $result,
            "data" => new CoursResource($cour)
        ]);
    }

    /**
     *     @OA\POST(
     *     path="/cours/add/cycle",
     *     description="ajouter un cycle à un cours",
     *     @OA\Response(
     *      response=200,
     *      description="json avec une clé data"
     * ),
     * ),
     */
    public function addCycle(Request $request)
    {
        $request->validate([
            "cour_id" => "required",
            "cycle_id" => "required",
        ]);

        $cour = Cours::findOrFail($request->cour_id);
        $result = $cour->cycles()->attach($request->cycle_id);

        return response()->json([
            "success" => $result,
            "data" => new CoursResource($cour)
        ]);
    }

    /**
     *     @OA\POST(
     *     path="/cours/add/level",
     *     description="ajouter un level à un cours",
     *     @OA\Response(
     *      response=200,
     *      description="json avec une clé data"
     * ),
     * ),
     */
    public function addLevel(Request $request)
    {
        $request->validate([
            "cour_id" => "required",
            "level_id" => "required",
        ]);

        $cour = Cours::findOrFail($request->cour_id);
        $result = $cour->levels()->attach($request->level_id);

        return response()->json([
            "success" => $result,
            "data" => new CoursResource($cour)
        ]);
    }

    /**
     *     @OA\POST(
     *     path="/cours/add/matiere",
     *     description="ajouter un matiere à un cours",
     *     @OA\Response(
     *      response=200,
     *      description="json avec une clé data"
     * ),
     * ),
     */
    public function addMatiere(Request $request)
    {
        $request->validate([
            "cour_id" => "required",
            "matiere_id" => "required",
        ]);

        $cour = Cours::findOrFail($request->cour_id);
        $result = $cour->matieres()->attach($request->matiere_id);

        return response()->json([
            "success" => $result,
            "data" => new CoursResource($cour)
        ]);
    }

    /**
     *     @OA\POST(
     *     path="/cours/remove/cycle",
     *     description="ajouter un matiere à un cours",
     *     @OA\Response(
     *      response=200,
     *      description="json avec une clé data"
     * ),
     * ),
     */
    public function removeCycle(Request $request)
    {
        $request->validate([
            "cour_id" => "required",
            "cycle_id" => "required",
        ]);

        $cour = Cours::findOrFail($request->cour_id);
        $result = $cour->cycles()->detach($request->cycle_id);

        return response()->json([
            "success" => $result,
            "data" => new CoursResource($cour)
        ]);
    }

    /**
     *     @OA\POST(
     *     path="/cours/remove/level",
     *     description="supprimer un level à un cours",
     *     @OA\Response(
     *      response=200,
     *      description="json avec une clé data"
     * ),
     * ),
     */
    public function removeLevel(Request $request)
    {
        $request->validate([
            "cour_id" => "required",
            "level_id" => "required",
        ]);

        $cour = Cours::findOrFail($request->cour_id);
        $result = $cour->levels()->detach($request->level_id);

        return response()->json([
            "success" => $result,
            "data" => new CoursResource($cour)
        ]);
    }

    /**
     *     @OA\POST(
     *     path="/cours/remove/matiere",
     *     description="supprimer une matiere à un cours",
     *     @OA\Response(
     *      response=200,
     *      description="json avec une clé data"
     * ),
     * ),
     */
    public function removeMatiere(Request $request)
    {
        $request->validate([
            "cour_id" => "required",
            "matiere_id" => "required",
        ]);

        $cour = Cours::findOrFail($request->cour_id);
        $result = $cour->matieres()->detach($request->matiere_id);

        return response()->json([
            "success" => $result,
            "data" => new CoursResource($cour)
        ]);
    }
}
