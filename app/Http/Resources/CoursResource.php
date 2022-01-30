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
            'id'=>$this->id,
            'title'=>$this->title,
            'description'=>$this->description,
            'coverImage'=>$this->coverImage == null ? "https://mui.com/static/images/cards/contemplative-reptile.jpg" : url($this->coverImage),
            'isActif'=>$this->isActif,
            'created_at'=>$this->created_at,
            'updated_at'=>$this->updated_at,
            'users'=>$this->users ? UserResource::collection($this->users) : null,
        ];
    }
}
