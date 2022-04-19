<?php

namespace App\Http\Resources\User;

use App\Http\Resources\Cours\CoursResource;
use App\Http\Resources\Exercice\ExerciceSimpleResource;
use App\Models\User;
use Illuminate\Http\Resources\Json\JsonResource;

class UserShowResource extends JsonResource
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
            'profile' => [
                'user_id' => $this->id,
                'pseudo' => $this->pseudo,
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
            ],
            'is_following' => auth()->check() ? $this->isFollowing(User::findOrFail($this->id)) : false,
            'is_followers' => auth()->check() ? $this->isFollowers(User::findOrFail($this->id)) : false,
            'cours' => CoursResource::collection($this->cours->where('isActif', '=', '1')->reverse()),
            'exercices' => ExerciceSimpleResource::collection($this->exercices->where('isActif', '=', '1')->reverse()),

        ];
    }
}
