<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TypeEcole extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function ecoles()
    {
        return $this->belongsToMany(Ecole::class,"ecole_has_type","type_ecole_id","ecole_id");
    }
}
