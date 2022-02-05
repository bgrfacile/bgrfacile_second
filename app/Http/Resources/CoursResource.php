<?php

namespace App\Http\Resources;

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
            'id' => $this->id,
            'title' => $this->title,
            'description' => $this->description,
            'coverImage' => $this->coverImage == null ? "https://mui.com/static/images/cards/contemplative-reptile.jpg" : url($this->coverImage),
            'isActif' => $this->isActif,
            'created_at' => formaterDate($this->created_at),
            'updated_at' => formaterDate($this->updated_at),
            'contents' => ContentResource::collection($this->contents),
            'comments' => CommentResource::collection($this->comments->reverse()),
            'users' => $this->users ? UserResource::collection($this->users) : null,
        ];
    }
}
