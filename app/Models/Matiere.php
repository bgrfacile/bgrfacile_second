<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Matiere extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function levels()
    {
        return $this->belongsToMany(Level::class, "levels_has_matieres", "matiere_id", "level_id");
    }
}
