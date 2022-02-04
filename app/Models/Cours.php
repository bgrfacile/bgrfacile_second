<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cours extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function users(){
        return $this->belongsToMany(User::class, 'cours_users', 'cour_id', 'user_id');
    }

    public function contents()
    {
        return $this->morphMany(Content::class, 'contentable');
    }

    public function cycles()
    {
        return $this->belongsToMany(Cycle::class,'cours_cycles');
    }
    public function levels()
    {
        return $this->belongsToMany(Level::class,'cours_levels');
    }
    public function matieres()
    {
        return $this->belongsToMany(Matiere::class,'cours_matieres');
    }
}
