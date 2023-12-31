<?php

namespace App\Http\Resources\v1\Level;

use App\Http\Resources\v1\Matiere\MatiereCollection;
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
            "id" => $this->id,
            "name" => $this->name,
            'slug' => $this->slug,
            "matieres" => new MatiereCollection($this->matieres),
        ];
    }
}
