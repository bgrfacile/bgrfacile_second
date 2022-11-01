<?php

namespace App\Models;

use App\Notifications\ResetPasswordNotification;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Spatie\Permission\Traits\HasRoles;

class User extends Authenticatable implements MustVerifyEmail
{
    use HasApiTokens, HasFactory, Notifiable;
    use HasRoles, SoftDeletes;

    protected $guarded = [];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function sendPasswordResetNotification($token)
    {
        $url = url() . "?token=" . $token;
        $this->notify(new ResetPasswordNotification($url));
    }

    public function demandesUser()
    {
        return $this->morphMany(EcolesHasUsers::class, 'demandeables', "demandeable_type");
    }

    public function infoUser()
    {
        return $this->hasOne(InfoUser::class);
    }

    public function ecoles()
    {
        return $this->belongsToMany(Ecole::class, "ecoles_has_users", "user_id", "ecole_id");
    }
    public function cours()
    {
        return $this->belongsToMany(Cours::class, "cours_users", "user_id", "cour_id");
    }
    public function tuteurs()
    {
        return $this->belongsToMany(Tuteur::class);
    }
}
