<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Cycle extends Model
{
    use HasFactory,SoftDeletes;

    protected $guarded =[];

    public function cours()
    {
        return $this->belongsToMany(Cours::class,'cours_cycles','cycle_id','cour_id');
    }
    public function exercices()
    {
        return $this->belongsToMany(Exercice::class,'cycles_exercices','cycle_id','exercice_id');
    }
    public function levels()
    {
        return $this->belongsToMany(Level::class,'cycle_level','cycle_id','level_id');
    }
}
