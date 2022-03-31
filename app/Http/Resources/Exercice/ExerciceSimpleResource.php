<?php

namespace App\Http\Resources\Exercice;

use Illuminate\Http\Resources\Json\JsonResource;

class ExerciceSimpleResource extends JsonResource
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
            'title' => $this->title,
            'description' => $this->description,
            'coverImage' => $this->coverImage == null ? url('/assets/img/logo_short_bgrfacile.png.png') : url($this->coverImage),
            'isActif' => $this->isActif,
            'is_SubjectExam' => $this->is_SubjectExam,
            'created_at' => formaterDate($this->created_at),
            'updated_at' => formaterDate($this->updated_at),
        ];
    }
}
