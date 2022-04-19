<?php

namespace App\Http\Resources\Level;

use App\Http\Resources\Matiere\MatiereResource;
use Illuminate\Http\Resources\Json\JsonResource;

class LevelResource extends JsonResource
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
            'name' => $this->name,
            'slug' => $this->slug,
            'isActif' => $this->isActif,
            'matieres' => MatiereResource::collection($this->matieres),
        ];
    }
}
