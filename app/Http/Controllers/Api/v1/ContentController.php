<?php

namespace App\Http\Controllers\Api\v1;

use App\Http\Controllers\Controller;
use App\Http\Resources\v1\Content\ContentCollection;
use App\Http\Resources\v1\Content\ContentResource;
use App\Models\Content;
use App\Models\Cours;
use Illuminate\Http\Request;

class ContentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return new ContentCollection(Content::paginate(15));
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
            "type_content" => "nullable",
            "content" => "required",
            "contentable_id" => "required",
            "contentable_type" => "required",
        ]);
        $contentValue = $request->content;
        if ($request->type_content != "texte" && $request->hasFile("content")) {
            $contentValue = saveFileToStorageDirectory($request, "content", "contenus");
        }
        if ($request->contentable_type == "cours" || $request->contentable_type == "\App\Models\Cours") {
            $cour = Cours::findOrFail($request->contentable_id);

            $content = $cour->contents()->create([
                "type_content" => $request->type_content,
                "content" => $contentValue,
            ]);

            return response()->json([
                "data" => new ContentResource($content),
            ], 201);
        }

        if ($request->contentable_type == "exercices" || $request->contentable_type == "\App\Models\Exercices") {
            dd("save exercice");
        }
        return response()->json([
            "success" => false,
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  Content  $content
     * @return \Illuminate\Http\Response
     */
    public function show(Content $content)
    {
        return new ContentResource($content);
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
            "type_content" => "nullable",
            "content" => "required",
            "contentable_id" => "nullable",
            "contentable_type" => "nullable",
        ]);
        $content = Content::findOrFail($id);
        $contentValue = $content->content;
        if ($request->type_content != "texte" && $request->hasFile("content")) {
            $contentValue = saveFileToStorageDirectory($request, "content", "contenus");
        }
        $result = $content->update([
            "type_content" => $request->type_content ?? $content->type_content,
            "content" => $request->content ?? $contentValue,
            "contentable_id" => $request->contentable_id ?? $content->contentable_id,
            "contentable_type" => $request->contentable_type ?? $content->contentable_type,
        ]);

        return response()->json([
            "success" => $result,
            "data" => new ContentResource($content)
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
        $content = Content::findOrFail($id);
        $result = $content->delete();
        return response()->json([
            "success" => $result
        ]);
    }
}
