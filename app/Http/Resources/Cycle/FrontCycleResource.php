<?php

namespace App\Http\Resources\Cycle;

use App\Http\Resources\LevelResource;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Str;

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
            'slugName' => Str::slug($this->name),
            'diplome' => $this->diplome,
            'isActif' => $this->isActif,
            'levels' => LevelResource::collection($this->levels),
        ];
    }
}
