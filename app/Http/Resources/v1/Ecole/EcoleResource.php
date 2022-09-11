<?php

namespace App\Http\Resources\v1\Ecole;

use App\Http\Resources\v1\ImageEcole\ImageEcoleCollection;
use App\Http\Resources\v1\ImageEcole\ImageEcoleResource;
use App\Http\Resources\v1\Location\LocationRessource;
use Illuminate\Http\Resources\Json\JsonResource;

class EcoleResource extends JsonResource
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
            "slug" => $this->slug,
            'category' => $this->category,
            'type_ecole' => $this->typeEcole->map(function ($typeEcole) {
                return [
                    "id" => $typeEcole->id,
                    "name" => $typeEcole->name,
                ];
            }),
            "email" => $this->email,
            "site_web" => $this->site_web,
            "description" => $this->description,
            "avantages" => $this->avantages,
            "path_logo" => url($this->path_logo),
            "path_baniere" => url($this->path_baniere),
            // "images_ecole" => new ImageEcoleCollection($this->imagesEcole),
            "images_ecole" => ImageEcoleResource::collection($this->imagesEcole),
            "location" => new LocationRessource($this->location),
            "created_at" => $this->created_at,
            "updated_at" => $this->updated_at,
        ];
    }
}
