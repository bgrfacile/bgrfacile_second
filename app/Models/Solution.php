<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Solution extends Model
{
    use HasFactory;

    protected $guarded =[];

    public function exercice()
    {
        return $this->belongsTo(Exercice::class);
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
