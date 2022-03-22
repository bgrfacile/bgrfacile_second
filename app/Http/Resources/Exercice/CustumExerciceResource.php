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
            'title' => $this->title,
            'coverImage' => $this->coverImage,
            'description' => $this->description,
            'isActif' => $this->isActif,
            'isHandout' => $this->isHandout,
            'contents' => ContentResource::collection($this->contents),
            'cours' => $this->cours,
            'cycle' => new BasicCycleResource($this->cycles->first()),
            'level' => new BasicLevelResource($this->levels->first()),
            'matiere' => new BasicMatiereResource($this->matieres->first()),
        ];
    }
}
