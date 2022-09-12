<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Level extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function cycles()
    {
        return $this->belongsToMany(Cycle::class, "cycles_has_levels", "level_id", "cycle_id");
    }

    public function matieres()
    {
        return $this->belongsToMany(Matiere::class, "levels_has_matieres", "level_id", "matiere_id");
    }
}
