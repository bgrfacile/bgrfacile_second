<?php

namespace App\Http\Resources\Cycle;

use App\Http\Resources\Level\LevelResource;
use Illuminate\Http\Resources\Json\JsonResource;

class FrontCycleResource extends JsonResource
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
            'levels' => LevelResource::collection($this->levels),
        ];
    }
}
