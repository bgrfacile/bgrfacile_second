<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\Comment\CommentResource;
use App\Models\Cours;
use Illuminate\Http\Request;

class CommentsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Cours $cours)
    {
        return response([
            'message' => 'comments retrieved successfully',
            'cours_id' => $cours->id,
            'comments' => CommentResource::collection($cours->comments->reverse()),
        ], 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, Cours $cours)
    {
        $request->validate([
            'content' => 'required|string|max:255|min:1',
        ]);
        $comment = $cours->comments()->create([
            'user_id' => $request->user()->id,
            'content' => $request->content,
        ]);
        return response([
            'message' => 'commentaire créé avec succès',
            'cours_id' => $cours->id,
            'comment' => new CommentResource($comment),
        ], 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Cours $cours, $id)
    {
        $comment = $cours->comments()->findOrFail($id);
        $comment->update([
            'content' => $request->content,
        ]);
        return response([
            'message' => 'comment updated successfully',
            'comment' => new CommentResource($comment),
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @param  Cours  $cours
     * @return \Illuminate\Http\Response
     */
    public function destroy(Cours $cours, $id)
    {
        $comment = $cours->comments()->findOrFail($id);
        $comment->delete();
        return response([
            'message' => 'comment deleted successfully',
            'comment_id' => $comment->id,
        ], 200);
    }
}
