<?php

namespace App\Http\Resources\Solution;

use App\Http\Resources\Content\ContentResource;
use Illuminate\Http\Resources\Json\JsonResource;

class SolutionsSimpleRessource extends JsonResource
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
            'type' => "solution",
            'title' => $this->title,
            'slug' => $this->slug,
            'coverImage' => $this->coverImage == null ? url('/assets/img/logo_short_bgrfacile.png.png') : url($this->coverImage),
            'resumer' => $this->resumer,
            'isActif' => $this->isActif,
            'contents' => ContentResource::collection($this->contents),
            'users' => $this->users,
            'created_at' => formaterDate($this->created_at),
            'updated_at' => formaterDate($this->updated_at),
        ];
    }
}
