<?php

namespace App\Http\Resources\Cycle;

use App\Http\Resources\Level\LevelSimpleResource;
use Illuminate\Http\Resources\Json\JsonResource;

class CycleResource extends JsonResource
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
            'diplome' => $this->diplome,
            'isActif' => $this->isActif,
            'levels' => LevelSimpleResource::collection($this->levels),
        ];
    }
}
