<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\CoursResource;
use App\Models\Cours;
use Illuminate\Http\Request;
use Inertia\Inertia;

class QuizController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        $cours = Cours::findOrFail($request->cour_id);
        return Inertia::render('Quiz/create', [
            'cours' => new CoursResource($cours)
        ]);
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
            'quizzes' => 'required',
            'cours_id' => 'required',
        ]);
        $cours = Cours::findOrFail($request->cours_id);
        $quiz = $cours->quizzes()->create([
            'title' => $request->quizzes['title'],
        ]);
        foreach ($request->quizzes['questions'] as $question) {
            $newQuestion = $quiz->questions()->create([
                'body' => $question['title'],
                'media' => $question['media'] ?? null,
                'media_type' => $question['media_type'] ?? null,
            ]);
            foreach ($question['responses'] as $answer) {
                $newQuestion->answers()->create([
                    'answer' => $answer['title'],
                    'is_correct' => $answer['isCorrect'],
                ]);
            }
        }
        return redirect()->route('cours.show', $cours->id);
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
