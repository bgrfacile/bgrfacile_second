<?php

namespace App\Http\Resources\v1\Cycle;

use App\Http\Resources\v1\Level\LevelCollection;
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
            "id" => $this->id,
            "name" => $this->name,
            'slug' => $this->slug,
            "levels" => new LevelCollection($this->levels),
            "created_at" => $this->created_at,
            "updated_at" => $this->updated_at,
        ];
    }
}
