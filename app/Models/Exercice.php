<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Exercice extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function users()
    {
        return $this->belongsToMany(User::class, 'exercices_users', 'exercice_id', 'user_id');
    }

    public function cours()
    {
        return $this->belongsToMany(Cours::class, 'cours_exercices', 'exercice_id', 'cour_id');
    }
    public function contents()
    {
        return $this->morphMany(Content::class, 'contentable');
    }
    public function cycles()
    {
        return $this->belongsToMany(Cycle::class, 'cycles_exercices', 'cycle_id', 'exercice_id');
    }
    public function levels()
    {
        return $this->belongsToMany(Level::class, 'exercices_levels', 'exercice_id', 'level_id');
    }

    public function matieres()
    {
        return $this->belongsToMany(Matiere::class, 'exercices_matieres', 'exercice_id', 'matiere_id');
    }

    public function solutions()
    {
        return $this->hasMany(Solution::class, 'exercice_id');
    }
    public function likes()
    {
        return $this->morphMany(Like::class, 'likeable', 'likeable_type', 'likeable_id');
    }
    public function islike($user)
    {
        if ($user) {
            return $this->likes->where('user_id', $user->id)->count() > 0;
        }
        return false;
    }
    public function raitings()
    {
        return $this->morphMany(Rating::class, 'raiteable', 'ratingable_type', 'ratingable_id');
    }
}
