<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Cours extends Model
{
    use HasFactory, SoftDeletes;

    protected $guarded = [];
    protected $casts = [
        'created_at' => 'datetime:M d Y',
    ];

    // public function setDateAttribute( $value ) {
    //     $this->attributes['created_at'] = (new Carbon($value))->format('d/m/y');
    //   }

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
    public function authors()
    {
        return $this->belongsToMany(User::class, "cours_users", "cour_id", "user_id");
    }
}
