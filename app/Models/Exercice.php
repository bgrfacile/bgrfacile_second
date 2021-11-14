<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Exercice extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function users(){
        return $this->belongsToMany(User::class);
    }

    public function cycles()
    {
        return $this->belongsToMany(Cycle::class, 'exercices_cycles');
    }

    public function levels()
    {
        return $this->belongsToMany(Level::class, 'exercices_levels');
    }

    public function matieres()
    {
        return $this->belongsToMany(Matiere::class, 'exercices_matiere');
    }

    public function solutions()
    {
        return $this->hasMany(Solution::class);
    }

    public function contentAudios()
    {
        return $this->morphMany(ContentAudio::class, 'contentable');
    }

    public function contentImages()
    {
        return $this->morphMany(ContentImage::class, 'contentable');
    }

    public function contentPdfs()
    {
        return $this->morphMany(ContentPdf::class, 'contentable');
    }

    public function contentTextes()
    {
        return $this->morphMany(ContentTexte::class, 'contentable');
    }

    public function contentVideos()
    {
        return $this->morphMany(ContentVideo::class, 'contentable');
    }

    public function typeExos()
    {
        return $this->belongsToMany(TypeExo::class,'exercices_type_exos');
    }
}
