<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Solution extends Model
{
    use HasFactory;

    protected $guarded = [];

    // public function cycles()
    // {
    //     return $this->belongsToMany(Cycle::class, 'cycles_solutios', 'cycle_id', 'solution_id');
    // }
    // public function levels()
    // {
    //     return $this->belongsToMany(Level::class, 'levels_solutions', 'level_id', 'solution_id');
    // }

    // public function matieres()
    // {
    //     return $this->belongsToMany(Matiere::class, 'matieres_solutions', 'matiere_id', 'solution_id');
    // }

    public function exercice()
    {
        return $this->belongsTo(Exercice::class);
    }
    public function users()
    {
        return $this->belongsToMany(User::class, 'solutions_users', 'solution_id', 'user_id');
    }
    public function contents()
    {
        return $this->morphMany(Content::class, 'contentable');
    }
}
