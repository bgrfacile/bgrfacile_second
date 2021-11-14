<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cours extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function users(){
        return $this->belongsToMany(User::class);
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
}
