<?php

namespace App\Http\Resources\Solution;

use App\Http\Resources\ContentResource;
use Illuminate\Http\Resources\Json\JsonResource;

class SolutionResource extends JsonResource
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
            'type' => "solution",
            'exercice_id' => $this->exercice_id,
            'exercice' => $this->exercice->title,
            'resumer' => $this->resumer,
            'isActif' => (int) $this->isActif,
            'contents' => ContentResource::collection($this->contents),
            'users' => $this->users,
            'created_at' => formaterDate($this->created_at),
            'updated_at' => formaterDate($this->updated_at),
        ];
    }
}
