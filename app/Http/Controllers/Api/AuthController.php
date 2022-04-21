<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\LoginApiRequest;
use App\Http\Requests\Api\RegisterRequest;
use App\Http\Resources\User\UserResource;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Laravel\Socialite\Facades\Socialite;

class AuthController extends Controller
{
    public function register(RegisterRequest $request)
    {
        $fields = $request->all();
        $user = User::create([
            'pseudo' => $fields['name'],
            'email' => $fields['email'],
            'password' => Hash::make($fields['password']),
        ]);
        // $token = $user->createToken("myappToken")->plainTextToken;
        // event(new Registered($user));
        User::count() <= 1 ?
            $user->assignRole('super-admin') :
            $user->assignRole('etudiant');

        $user->infoUser()->create(['slug' => Str::slug($user->pseudo)]);
        Auth::login($user, true);
        return response([
            'status' => 'success',
            'message' => 'user create successfully',
            'user' => new UserResource($user)
        ], 201);
    }

    public function login(LoginApiRequest $request)
    {
        if (!Auth::attempt($request->only(['email', 'password']))) {
            return  response([
                'message' => 'Aucun utilisateurs trouvé avec ces identifiants',
            ], 404);
        } else {
            $user = User::where('email', $request->email)->first();
            Auth::login($user, $request->rememberMe ? true : false);
            // $token = $user->createToken('bgrfacileToken')->plainTextToken;
            // $request->session()->regenerate();
            return response([
                'message' => 'Authentification réussie',
                'user' => new UserResource($user),
                // 'access_token' => $token
            ], 200);
        }
    }
    public function me()
    {
        auth()->check() ?
            $user = User::findOrFail(auth()->user()->id) :
            $user = null;
        return response([
            'message' => 'Authentification réussie',
            'user' => new UserResource($user),
        ]);
    }

    public function oauthGoogle()
    {
        return Socialite::driver('google')->redirect();
    }
    public function oauthGoogleCallback()
    {
        $user = Socialite::driver('google')->user();
        $authUser = User::where('email', $user->email)->first();
        if ($authUser) {
            Auth::login($authUser, true);
            return redirect()->route('cours.page');
        } else {
            $newUser = User::create([
                'pseudo' => $user->name,
                'email' => $user->email,
                'url_image' => $user->avatar,
                'email_verified_at' => Carbon::now(),
            ]);
            $newUser->infoUser()->create(['slug' => Str::slug($user->name)]);
            User::count() <= 1 ?
                $newUser->assignRole('super-admin') :
                $newUser->assignRole('etudiant');
            Auth::login($newUser, true);
            return redirect()->route('cours.page');
        }
    }


    public function logout(Request $request)
    {
        Auth::logout();
        return response([
            'message' => 'Vous êtes déconnecté'
        ], 200);
    }
}
