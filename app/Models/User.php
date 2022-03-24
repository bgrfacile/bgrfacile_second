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

    public function phone()
    {
        return $this->morphOne(Phone::class, 'phoneable');
    }

    /**
     * Get the slug user.
     */
    public function slugUser()
    {
        return $this->hasOne(SlugUser::class);
    }

    public function follow(User $user)
    {
        if (!$this->isFollowing($user)) {
            Follow::create([
                'user_id' => auth()->id(),
                'following_id' => $user->id
            ]);
        }
    }

    public function unfollow(User $user)
    {
        Follow::where('user_id', auth()->id())->where('following_id', $user->id)->delete();
    }

    public function isFollowing(User $user)
    {
        return $this->following()->where('users.id', $user->id)->exists();
    }
    public function isFollowers(User $user)
    {
        return $this->followers()->where('follows.id', $user->id)->exists();
    }

    public function following()
    {
        return $this->hasManyThrough(User::class, Follow::class, 'user_id', 'id', 'id', 'following_id');
    }

    public function followers()
    {
        return $this->hasManyThrough(User::class, Follow::class, 'following_id', 'id', 'id', 'user_id');
    }

    public function cours()
    {
        return $this->belongsToMany(Cours::class, 'cours_users', 'user_id', 'cour_id');
    }
    public function comments()
    {
        return $this->hasMany(Comment::class);
    }
    public function exercices()
    {
        return $this->belongsToMany(Exercice::class, 'exercices_users', 'user_id', 'exercice_id');
    }
    public function solutions()
    {
        return $this->belongsToMany(Solution::class, 'solutions_users', 'user_id', 'solution_id');
    }
}
