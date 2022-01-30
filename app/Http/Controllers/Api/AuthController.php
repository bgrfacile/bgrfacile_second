<?php

namespace App\Http\Controllers\APi;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\LoginApiRequest;
use App\Http\Requests\Api\RegisterRequest;
use App\Http\Requests\Auth\LoginRequest;
use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;

class AuthController extends Controller
{
    public function register(RegisterRequest $request)
    {
        $fields = $request->all();
        $user = User::create([
            'name' => $fields['name'],
            'email' => $fields['email'],
            'password' => Hash::make($fields['password']),
        ]);
        $token = $user->createToken("myappToken")->plainTextToken;
        // event(new Registered($user));
        User::count() <= 1 ?
            $user->assignRole('super-admin') :
            $user->assignRole('etudiant');

        $slug_user = $user->slugUser()->create(['slug' => Str::slug($user->name)]);
        return response([
            'message' => 'user create successfully',
            'user' => new UserResource($user),
            'access_token' => $token
        ], 201);
    }

    public function login(LoginApiRequest $request)
    {
        if (!Auth::attempt($request->only(['email', 'password']))) {
            return  response([
                'message' => 'Aucun utilisateurs trouvé avec ces identifiants',
            ], 404);
        } else {
            $request->session()->regenerate();
            $user = User::where('email', $request->email)->first();
            $token = $user->createToken('myappToken')->plainTextToken;
            $respon = [
                'status' => 'success',
                'message' => 'Authentification réussie',
                'status_code' => 200,
                'access_token' => $token,
                'token_type' => 'Bearer',
                'user' => new UserResource($user),
            ];
            return response($respon, 200);
        }
    }

    public function logout(Request $request)
    {
        $request->user()->token()->revoke();
        Auth::logout();
        Session::flush();
        return response([
            'message' => 'Successfully logged out'
        ], 200);
    }
}
