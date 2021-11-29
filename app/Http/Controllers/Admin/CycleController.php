<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Cycle;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;

class CycleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $cycles = Cycle::all();
        return Inertia::render('Cycle/index', [
            'cycles' => $cycles
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render('Cycle/create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        Validator::make($request->all(), [
            'name' => ['required', 'string'],
            'diplome' => ['string'],
        ])->validate();

        Cycle::create([
            'name' => $request->name,
            'diplome' => $request->diplome
        ]);

        return redirect()->route('cycle.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $cycle = Cycle::find($id);
        return Inertia::render('Cycle/show', [
            "cycle" => $cycle
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $cycle = Cycle::find($id);
        return Inertia::render('Cycle/edit', [
            "cycle" => $cycle
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
            "name" => "string|required",
            "diplome" => "string",
        ]);
        $cycle = Cycle::findOrFail($id);
        $cycle->name = $request->name;
        $cycle->diplome = $request->diplome;
        $cycle->save();
        return redirect()->route('cycle.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $cycle = Cycle::findOrFail($id);
        $cycle->delete();
        return back();
    }
}
