<?php

namespace App\Http\Resources\v1\ImageEcole;

use Illuminate\Http\Resources\Json\JsonResource;

class ImageEcoleResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param \Illuminate\Http\Request $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            "id" => $this->id,
            "ecole_id" => $this->ecole_id,
            "path_image" => url($this->path_image),
            "description" => $this->description,
            "created_at" => $this->created_at,
            "updated_at" => $this->updated_at,
        ];
    }
}
