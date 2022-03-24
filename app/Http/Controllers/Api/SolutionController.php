<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\Solution\SolutionResource;
use App\Models\Exercice;
use App\Models\Solution;
use Illuminate\Http\Request;

class SolutionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $solutions = Solution::where('isActif', '1')->orderBy('created_at', 'desc')->get();
        return SolutionResource::collection($solutions);
    }

    public function mySolution(Request $request)
    {
        $user = $request->user();
        $solutions = $user->solutions;
        return SolutionResource::collection($solutions);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
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
            'exercice_id' => 'required',
            'resumer' => 'string|min:5',
        ]);
        $exercice = Exercice::find($request->exercice_id);
        $solution = $exercice->solutions()->create([
            'resume' => $request->resumer,
        ]);
        $solution->contents()->create([
            'content' => $request->content,
        ]);
        $solution->users()->attach(auth()->user()->id);

        return response([
            'message' => 'solution created successfully',
            'solution' => new SolutionResource($solution),
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
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
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
