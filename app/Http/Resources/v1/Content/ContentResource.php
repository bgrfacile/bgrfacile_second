<?php

namespace App\Http\Resources\v1\Content;

use Illuminate\Http\Resources\Json\JsonResource;

class ContentResource extends JsonResource
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
            "content" => $this->type_content != "text" ? url($this->content) : $this->content,
            "type_content" => $this->type_content,
            "contentable_type" => $this->contentable_type,
            "created_at" => $this->created_at,
            "updated_at" => $this->updated_at,
        ];
    }
}
