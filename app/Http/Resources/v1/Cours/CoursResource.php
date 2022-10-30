<?php

namespace App\Http\Resources\v1\Cours;

use App\Http\Resources\v1\Content\ContentCollection;
use App\Http\Resources\v1\Cycle\CycleCollection;
use App\Http\Resources\v1\Level\LevelCollection;
use App\Http\Resources\v1\Matiere\MatiereCollection;
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
            "cycles" => new CycleCollection($this->cycles),
            "levels" => new LevelCollection($this->levels),
            "matieres" => new MatiereCollection($this->matieres),
            "authors" => $this->authors->map(function ($author) {
                return [
                    "id" => $author->id,
                    "name" => $author->name,
                ];
            }),
            "created_at" => $this->created_at,
            "updated_at" => $this->updated_at,
        ];
    }
}
