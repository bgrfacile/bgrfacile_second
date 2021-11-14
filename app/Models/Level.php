<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Level extends Model
{
    use HasFactory;

    protected $guarded =[];

    public function cours()
    {
        return $this->belongsToMany(Cours::class,'cours_levels');
    }
    public function exercices()
    {
        return $this->belongsToMany(Exercice::class,'exercices_levels');
    }
}
