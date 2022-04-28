<?php

namespace App\Http\Resources\User;

use App\Http\Resources\Role\RoleResource;
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
            'user_id' => $this->id,
            'pseudo' => $this->pseudo,
            'slug' => $this->infoUser->slug,
            'email_verified_at' => $this->email_verified_at == null ? false : true,
            'has_password' => $this->password == null ? false : true,
            'firstname' => $this->infoUser->firstname,
            'lastname' => $this->infoUser->lastname,
            'telephone' => $this->phone != null ? $this->phone->number_phone : null,
            'bio' => $this->infoUser->bio != null ? $this->infoUser->bio : null,
            'gender' => $this->infoUser->gender != null ? $this->infoUser->gender : null,
            'email' => $this->email,
            'country' => $this->infoUser->country,
            'url_image' => $this->url_image == null ? 'https://ui-avatars.com/api/?name=' . $this->infoUser->slug . '&background=0D8ABC&color=fff' : url($this->url_image),
            'birthday' => formaterDate($this->infoUser->birthday),
            'createdAt' => formaterDate($this->created_at),
            'roles' => RoleResource::collection($this->roles),
            'isResquestProfs' => $this->profileProf()->count() > 0 ? true : false,
            'followers' => $this->followers->count(),
            'following' => $this->following->count(),
            'user_followers' => UserLambdaResource::collection($this->followers),
            'user_following' => UserLambdaResource::collection($this->following),
        ];
    }
}
