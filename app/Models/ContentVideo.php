<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ContentVideo extends Model
{
    use HasFactory;

    protected $guarded =[];

    public function contentable()
    {
        return $this->morphTo();
    }
}