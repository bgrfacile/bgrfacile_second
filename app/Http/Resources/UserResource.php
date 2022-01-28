<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Str;

class UserResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        $slug = Str::slug($this->name, '-');
        return [
            'id' => $this->id,
            'name' => $this->name,
            'lastname' => $this->lastname,
            'profileImage' => $this->url_image == null ? "https://ui-avatars.com/api/?name=$slug&background=0D8ABC&color=fff" : url($this->url_image),
            'birthday' => $this->birthday,
            'email' => $this->email,
            'roles' => RoleResource::collection($this->roles),
        ];
    }
}
