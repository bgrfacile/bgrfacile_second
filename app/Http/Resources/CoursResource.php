<?php

namespace App\Http\Resources;

use App\Http\Resources\Cycle\BasicCycleResource;
use App\Http\Resources\Exercice\CustumExerciceResource;
use App\Http\Resources\Exercice\ExerciceSimpleResource;
use App\Http\Resources\Level\BasicLevelResource;
use App\Http\Resources\Matiere\BasicMatiereResource;
use App\Http\Resources\Quiz\QuizResource;
use App\Http\Resources\User\UserLambdaResource;
use Illuminate\Http\Resources\Json\JsonResource;

class CoursResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'type' => "cours",
            'title' => $this->title,
            'description' => $this->description,
            'coverImage' => $this->coverImage == null ? url('/assets/img/logo_short_bgrfacile.png.png') : url($this->coverImage),
            'isActif' => $this->isActif,
            'likes' => $this->likes->count(),
            'isLike' => $this->islike($request->user()),
            'rating' => round($this->raitings->avg('rating'), 1),
            'cycle' => new BasicCycleResource($this->cycles->first()),
            'level' => new BasicLevelResource($this->levels->first()),
            'matiere' => new BasicMatiereResource($this->matieres->first()),
            'contents' => ContentResource::collection($this->contents),
            'comments' => CommentResource::collection($this->comments->reverse()),
            'exercices' => ExerciceSimpleResource::collection($this->exercices),
            'quizzes' => QuizResource::collection($this->quizzes),
            'users' => $this->users ? UserResource::collection($this->users) : null,
            // 'users' => $this->users ? UserLambdaResource::collection($this->users) : null,
            'created_at' => formaterDate($this->created_at),
            'updated_at' => formaterDate($this->updated_at),
        ];
    }
}
