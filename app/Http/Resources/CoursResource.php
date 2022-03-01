<?php

namespace App\Http\Resources;

use App\Http\Resources\Cycle\BasicCycleResource;
use App\Http\Resources\Level\BasicLevelResource;
use App\Http\Resources\Matiere\BasicMatiereResource;
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
            'title' => $this->title,
            'description' => $this->description,
            'coverImage' => $this->coverImage == null ? "https://mui.com/static/images/cards/contemplative-reptile.jpg" : url($this->coverImage),
            'isActif' => $this->isActif,
            'cycle' => new BasicCycleResource($this->cycles->first()),
            'level' => new BasicLevelResource($this->levels->first()),
            'matiere' => new BasicMatiereResource($this->matieres->first()),
            'contents' => ContentResource::collection($this->contents),
            'comments' => CommentResource::collection($this->comments->reverse()),
            'users' => $this->users ? UserResource::collection($this->users) : null,
            'created_at' => formaterDate($this->created_at),
            'updated_at' => formaterDate($this->updated_at),
        ];
    }
}
