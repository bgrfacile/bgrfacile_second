<?php

namespace App\Http\Resources\v1\Tuteur;

use Illuminate\Http\Resources\Json\JsonResource;

class TuteurResource extends JsonResource
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
            'first_name' => $this->first_name,
            'last_name' => $this->last_name,
            'email' => $this->email,
            'phone' => $this->phone,
            'path_image' => $this->image_path,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
            'users' => $this->users->map(function ($user) {
                return [
                    'id' => $user->id,
                    'name' => $user->name,
                ];
            }),
            'ecoles' => $this->ecoles->map(function ($ecole) {
                return [
                    'id' => $ecole->id,
                    'name' => $ecole->name,
                ];
            }),
        ];
    }
}
