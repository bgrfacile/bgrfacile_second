<?php

namespace App\Http\Resources\v1\Calendar;

use Illuminate\Http\Resources\Json\JsonResource;

class CalendarResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param \Illuminate\Http\Request $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'ecole_id' => $this->ecole_id,
            'calendars_json' => $this->calendars_json,
        ];
    }
}
