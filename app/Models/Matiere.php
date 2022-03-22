<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Matiere extends Model
{
    use HasFactory;

    protected $guarded =[];

    public function cours()
    {
        return $this->belongsToMany(Cours::class,'cours_matieres');
    }
    public function exercices()
    {
        return $this->belongsToMany(Exercice::class,'exercices_matieres','exercice_id','matiere_id');
    }
    public function levels()
    {
        return $this->belongsToMany(Level::class,'level_matiere','level_id','matiere_id');
    }
}
