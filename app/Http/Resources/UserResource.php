<?php

namespace App\Http\Resources;

use App\Http\Resources\User\UserLambdaResource;
use Carbon\Carbon;
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
            'user_id' => $this->id,
            'user_name' => $this->name,
            'firstname' => $this->firstname,
            'lastname' => $this->lastname,
            'telephone' => $this->phone != null ? $this->phone->number_phone : null,
            'age' => "",
            'gender' => [
                'label' => $this->gender == 'M' ? 'homme' : 'femme',
                'value' => $this->gender,
            ],
            'email' => $this->email,
            'country' => $this->country,
            'url_image' => $this->url_image == null ? "https://ui-avatars.com/api/?name=$slug&background=0D8ABC&color=fff" : url($this->url_image),
            'birthday' => formaterDate($this->birthday),
            'createdAt' => formaterDate($this->created_at),
            'roles' => RoleResource::collection($this->roles),
            'followers' => $this->followers->count(),
            'following' => $this->following->count(),
            // 'likes_cours' => $this->likes->where('likeable_type', 'App\Models\Cours')->toArray(),
            'user_followers' => UserLambdaResource::collection($this->followers),
            'user_following' => UserLambdaResource::collection($this->following),
        ];
    }
}
