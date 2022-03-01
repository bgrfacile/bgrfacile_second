<?php

namespace App\Http\Resources\Matiere;

use Illuminate\Http\Resources\Json\JsonResource;

class BasicMatiereResource extends JsonResource
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
            'isActif' => $this->isActif,
        ];
    }
}
