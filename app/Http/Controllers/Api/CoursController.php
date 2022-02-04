<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\CoursResource;
use App\Http\Resources\UserResource;
use App\Models\Cours;
use App\Models\User;
use Illuminate\Http\Request;

class CoursController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return CoursResource::collection(Cours::all()->reverse());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // dd($request->all());
        $user = User::find($request->user_id);
        $coverImage = null;
        if ($request->hasFile('coverImage')) {
            $imageName = time() . '_' . $request->file('coverImage')->getClientOriginalName();
            $coverImage = "/storage/" . $request->file('coverImage')->storeAs('coverImage', $imageName, 'public');
        }
        $cours = $user->cours()->create([
            'title' => $request->title,
            'description' => $request->description,
            'coverImage' => $coverImage,
            'isActif' => $request->isActif,
        ]);
        $cours->contents()->create([
            'content'=>$request->content,
            'type_content'=> $request->type_content,
        ]);
        return response([
            'message' => 'cours created successfully',
            'cours' => new CoursResource($cours),
        ], 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
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
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
