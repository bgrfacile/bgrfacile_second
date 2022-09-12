<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cycle extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function ecoles()
    {
        return $this->belongsToMany(Ecole::class, "cycles_has_ecoles", "cycle_id", "ecole_id");
    }

    public function levels()
    {
        return $this->belongsToMany(Level::class, "cycles_has_levels", "cycle_id", "level_id");
    }
}
