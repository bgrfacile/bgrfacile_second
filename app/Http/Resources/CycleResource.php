<?php

namespace App\Http\Resources;

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
            'id'=>$this->id,
            'name'=>$this->name,
            'diplome'=>$this->diplome,
            'isActif'=>$this->isActif,
            // 'created_at'=>formaterDate($this->created_at),
            // 'updated_at'=>formaterDate($this->updated_at),
            // 'levels'=>LevelSimpleResource::collection($this->levels),
            'levels'=>LevelSimpleResource::collection($this->levels),
        ];
    }
}
