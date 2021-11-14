<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TypeExo extends Model
{
    use HasFactory;

    protected $guarded =[];

    public function exercice()
    {
        return $this->belongsToMany(Exercice::class,'exercices_type_exos');
    }
}
