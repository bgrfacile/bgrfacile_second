<?php

namespace App\Http\Resources\v1\Location;

use Illuminate\Http\Resources\Json\JsonResource;

class LocationRessource extends JsonResource
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
            "ecole_id" => $this->ecole_id,
            "address" => $this->address,
            "longitude" => $this->longitude,
            "latitude" => $this->latitude,
            "code_postal" => $this->code_postal,
            "created_at" => $this->created_at,
            "updated_at" => $this->updated_at,
        ];
    }
}
