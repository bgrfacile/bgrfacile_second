<?php

namespace App\Http\Resources\Exercice;

use App\Http\Resources\ContentResource;
use App\Http\Resources\Cycle\BasicCycleResource;
use App\Http\Resources\Level\BasicLevelResource;
use App\Http\Resources\Matiere\BasicMatiereResource;
use Illuminate\Http\Resources\Json\JsonResource;

class CustumExerciceResource extends JsonResource
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
            'coverImage' => $this->coverImage ? $this->coverImage : $this->cours()->first()->coverImage,
            'description' => $this->description,
            'isActif' => (int) $this->isActif,
            'isHandout' => $this->is_handout,
            'contents' => ContentResource::collection($this->contents),
            'cours' => [],
            'comments' => [],
            'likes' => $this->likes->count(),
            'isLike' => $this->islike($request->user()),
            'rating' => round($this->raitings->avg('rating'), 1),
            'users' => [],
            'solutions' => [],
            'cycle' => new BasicCycleResource($this->cycles->first()),
            'level' => new BasicLevelResource($this->levels->first()),
            'matiere' => new BasicMatiereResource($this->matieres->first()),
            'createdAt' => formaterDate($this->created_at),
            'updatedAt' => formaterDate($this->updated_at),
        ];
    }
}
