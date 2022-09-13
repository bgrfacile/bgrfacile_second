<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Cours extends Model
{
    use HasFactory, SoftDeletes;

    protected $guarded = [];

    public function contents()
    {
        return $this->morphMany(Content::class, 'contentable');
    }

    public function cycles()
    {
        return $this->belongsToMany(Cycle::class, "cours_has_cycles", "cour_id", "cycle_id");
    }

    public function levels()
    {
        return $this->belongsToMany(Level::class, "cours_has_levels", "cour_id", "level_id");
    }
    public function matieres()
    {
        return $this->belongsToMany(Matiere::class, "cours_has_matieres", "cour_id", "matiere_id");
    }
}
