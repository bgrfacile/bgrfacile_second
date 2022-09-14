<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EcolesHasUsers extends Model
{
    use HasFactory;

    protected $guarded = [];
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'ecoles_has_users';

    public function demandeables()
    {
        return $this->morphTo();
    }
}
