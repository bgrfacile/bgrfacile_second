<?php

namespace App\Http\Resources\Exercice;

use App\Http\Resources\Comment\CommentResource;
use App\Http\Resources\Content\ContentResource;
use App\Http\Resources\Cours\CoursSimpleRessource;
use App\Http\Resources\Cycle\BasicCycleResource;
use App\Http\Resources\Level\BasicLevelResource;
use App\Http\Resources\Matiere\BasicMatiereResource;
use App\Http\Resources\Solution\SolutionsSimpleRessource;
use App\Http\Resources\User\UserResource;
use Illuminate\Http\Resources\Json\JsonResource;

class ExerciceFullResource extends JsonResource
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
            'type' => "exercice",
            'title' => $this->title,
            'slug' => $this->slug,
            'coverImage' => $this->coverImage == null ? url('/assets/img/logo_short_bgrfacile.png.png') : url($this->coverImage),
            'description' => $this->description,
            'isActif' => $this->isActif,
            'is_SubjectExam' => $this->is_SubjectExam == 0 ? false : true,
            'contents' => ContentResource::collection($this->contents),
            'cours' => CoursSimpleRessource::collection($this->cours),
            'comments' => CommentResource::collection($this->comments->reverse()),
            'likes' => $this->likes->count(),
            'isLike' => $this->islike($request->user()),
            'rating' => round($this->raitings->avg('rating'), 1),
            'users' => $this->users ? UserResource::collection($this->users) : null,
            'solutions' => SolutionsSimpleRessource::collection($this->solutions),
            'cycle' => new BasicCycleResource($this->cycles->first()),
            'level' => new BasicLevelResource($this->levels->first()),
            'matiere' => new BasicMatiereResource($this->matieres->first()),
            'created_at' => formaterDate($this->created_at),
            'updated_at' => formaterDate($this->updated_at),
        ];
    }
}
