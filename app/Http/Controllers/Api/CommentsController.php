<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\Comment\CommentResource;
use App\Models\Cours;
use App\Models\Exercice;
use App\Models\Solution;
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
    public function store(Request $request, $id)
    {
        $request->validate([
            'content' => 'required|string|max:255|min:1',
            'typeContent' => 'required|string|max:255|min:1',
        ]);
        if ($request->typeContent == 'cours') {
            $cours = Cours::find($id);
            $comment = $cours->comments()->create([
                'content' => $request->content,
                'user_id' => auth()->user()->id,
            ]);
            return response([
                'message' => 'comment created successfully',
                'cours_id' => $cours->id,
                'comment' => new CommentResource($comment),
            ], 200);
        } elseif ($request->typeContent == 'exercice') {
            $exercice = Exercice::find($id);
            $comment = $exercice->comments()->create([
                'content' => $request->content,
                'user_id' => auth()->user()->id,
            ]);
            return response([
                'message' => 'comment created successfully',
                'exercice_id' => $exercice->id,
                'comment' => new CommentResource($comment),
            ], 200);
        } elseif ($request->typeContent == 'solution') {
            $solution = Solution::find($id);
            $comment = $solution->comments()->create([
                'content' => $request->content,
                'user_id' => auth()->user()->id,
            ]);
            return response([
                'message' => 'comment created successfully',
                'solution_id' => $solution->id,
                'comment' => new CommentResource($comment),
            ], 200);
        }

        // $cours = Cours::findOrFail($id);
        // $comment = $cours->comments()->create([
        //     'user_id' => $request->user()->id,
        //     'content' => $request->content,
        // ]);
        // return response([
        //     'message' => 'commentaire créé avec succès',
        //     'cours_id' => $cours->id,
        //     'comment' => new CommentResource($comment),
        // ], 201);
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
