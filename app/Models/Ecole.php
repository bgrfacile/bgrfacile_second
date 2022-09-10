<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Ecole extends Model
{
    use HasFactory, SoftDeletes;

    protected $guarded = [];

    public function location()
    {
        return $this->hasOne(Location::class);
    }

    public function imagesEcole()
    {
        return $this->hasMany(ImagesEcole::class);
    }
}
