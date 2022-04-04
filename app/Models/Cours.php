<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cours extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function islike($user)
    {
        if ($user) {
            return $this->likes->where('user_id', $user->id)->count() > 0;
        }
        return false;
    }

    public function users()
    {
        return $this->belongsToMany(User::class, 'cours_users', 'cour_id', 'user_id');
    }
    public function exercices()
    {
        return $this->belongsToMany(Exercice::class, 'cours_exercices', 'exercice_id', 'cour_id');
    }
    public function contents()
    {
        return $this->morphMany(Content::class, 'contentable');
    }
    public function comments()
    {
        return $this->morphMany(Comment::class, 'commentable');
    }

    public function cycles()
    {
        return $this->belongsToMany(Cycle::class, 'cours_cycles', 'cour_id', 'cycle_id');
    }
    public function levels()
    {
        return $this->belongsToMany(Level::class, 'cours_levels', 'cour_id', 'level_id');
    }
    public function matieres()
    {
        return $this->belongsToMany(Matiere::class, 'cours_matieres', 'cour_id', 'matiere_id');
    }
    public function likes()
    {
        return $this->morphMany(Like::class, 'likeable', 'likeable_type', 'likeable_id');
    }
    public function raitings()
    {
        return $this->morphMany(Rating::class, 'raiteable', 'ratingable_type', 'ratingable_id');
    }
}
