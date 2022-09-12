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
}
