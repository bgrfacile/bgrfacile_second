<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Spatie\Permission\Traits\HasRoles;

class User extends Authenticatable implements MustVerifyEmail
{
    use HasApiTokens, HasFactory, Notifiable;
    use HasRoles;

    /**
     * The attributes that are mass assignable.
     *
     * @var string[]
     */
//    protected $fillable = [
//        'name',
//        'lastname',
//        'profileImage',
//        'birthday',
//        'email',
//        'password',
//    ];
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

    /**
     * Get the slug user.
     */
    public function slugUser()
    {
        return $this->hasOne(SlugUser::class);
    }

    public function cours()
    {
        return $this->belongsToMany(Cours::class);
    }
    public function exercices()
    {
        return $this->belongsToMany(Exercice::class);
    }

}
