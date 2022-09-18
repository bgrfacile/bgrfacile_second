<?php

namespace App\Http\Resources\v1\User;

use App\Http\Resources\v1\Role\RoleCollection;
use Illuminate\Http\Resources\Json\JsonResource;

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
        return [
            'id' => $this->id,
            'name' => $this->name,
            "slug" => $this->infoUser->slug ?? null,
            'email' => $this->email ?? null,
            "first_name" => $this->infoUser->first_name ?? null,
            "last_name" => $this->infoUser->last_name ?? null,
            "image_path" => $this->infoUser->image_path ?? null,
            "address" => $this->infoUser->address ?? null,
            "genre" => $this->infoUser->genre ?? null,
            "city" => $this->infoUser->city ?? null,
            "phone" => $this->infoUser->phone ?? null,
            "roles" => new RoleCollection($this->roles),
            "demandes" => $this->demandesUser->where("response", false)->where("user_id", $this->id),
            "ecoles" => $this->demandesUser->where("response", true),
            "updated_at" => $this->updated_at ?? null,
            'created_at' => $this->created_at ?? null,
        ];
    }
}
