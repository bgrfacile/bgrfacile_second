<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ImagesEcole extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function ecole()
    {
        return $this->belongsToMany(Ecole::class);
    }
}
