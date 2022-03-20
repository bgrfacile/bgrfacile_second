<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Exercice extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function users(){
        return $this->belongsToMany(User::class);
    }

    public function cours()
    {
        return $this->belongsToMany(Cours::class, 'cours_exercices', 'exercice_id', 'cour_id');
    }
    public function cycles()
    {
        return $this->belongsToMany(Cycle::class, 'exercices_cycles', 'exercice_id', 'cycle_id');
    }

    public function contents()
    {
        return $this->morphMany(Content::class, 'contentable');
    }

    public function levels()
    {
        return $this->belongsToMany(Level::class, 'exercices_levels');
    }

    public function matieres()
    {
        return $this->belongsToMany(Matiere::class, 'exercices_matiere');
    }

    public function solutions()
    {
        return $this->hasMany(Solution::class);
    }
}
