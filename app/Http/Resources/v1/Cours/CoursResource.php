<?php

namespace App\Http\Resources\v1\Cours;

use App\Http\Resources\v1\Content\ContentCollection;
use Illuminate\Http\Resources\Json\JsonResource;

class CoursResource extends JsonResource
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
            "description" => $this->description,
            "path_image" => url($this->path_image),
            "is_actif" => $this->is_actif,
            "contents" => new ContentCollection($this->contents),
            "created_at" => $this->created_at,
            "updated_at" => $this->updated_at,
        ];
    }
}
