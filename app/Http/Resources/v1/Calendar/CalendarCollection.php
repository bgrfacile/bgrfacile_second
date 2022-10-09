<?php

namespace App\Http\Resources\v1\Calendar;

use Illuminate\Http\Resources\Json\ResourceCollection;

class CalendarCollection extends ResourceCollection
{
    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request): array|\JsonSerializable|\Illuminate\Contracts\Support\Arrayable
    {
        return parent::toArray($request);
    }
}
