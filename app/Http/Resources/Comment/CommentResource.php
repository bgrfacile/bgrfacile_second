<?php

namespace App\Http\Resources\Comment;

use Illuminate\Http\Resources\Json\JsonResource;

class CommentResource extends JsonResource
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
            'content' => $this->content,
            'comment_user_id' => $this->user_id,
            'comment_user_url_image' => $this->user()->first()->url_image == null ?
                'https://ui-avatars.com/api/?name=' . $this->user()->first()->infoUser->slug . '&background=0D8ABC&color=fff' : url($this->user()->first()->url_image),
            'comment_user_name' => $this->user()->first()->name,
            'createdAt' => formaterDateWithTime($this->created_at),
            'updatedAt' => formaterDateWithTime($this->updated_at),
        ];
    }
}
