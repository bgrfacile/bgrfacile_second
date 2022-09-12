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
    public function typeEcole()
    {
        return $this->belongsToMany(TypeEcole::class, "ecole_has_type", "ecole_id", "type_ecole_id");
    }

    public function cycles()
    {
        return $this->belongsToMany(Cycle::class, "cycles_has_ecoles", "ecole_id", "cycle_id");
    }
}
