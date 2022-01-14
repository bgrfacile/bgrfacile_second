<?php

namespace App\Http\Controllers\APi;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\LoginApiRequest;
use App\Http\Requests\Auth\LoginRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $fields = $request->validate([
            'name' => 'required|string|max:255',
            // 'lastname' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|confirmed'
        ]);
        $user = User::create([
            'name' => $fields['name'],
            // 'lastname' => $fields['lastname'],
            'email' => $fields['email'],
            'password' => Hash::make($fields['password']),
        ]);
        $token = $user->createToken("myappToken")->plainTextToken;
        // event(new Registered($user));
        User::count() <= 1 ?
            $user->assignRole('super-admin') :
            $user->assignRole('viewer');

        $slug_user = $user->slugUser()->create(['slug' => Str::slug($user->name)]);
        return response([
            'message' => 'user create successfully',
            'contents' => [
                'user' => $user,
                'token' => $token
            ]
        ], 201);
    }

    public function login(LoginApiRequest $request)
    {
        // $validator = Validator::make($request->all(), [
        //     'email' => ['required', 'string', 'email'],
        //     'password' => ['required', 'string', 'min:6'],
        // ])->validate();

        if (!Auth::attempt($request->only(['email', 'password']))) {
            return  response([
                'message' => 'Aucun utilisateur trouvé avec ces identifiants',
            ], 404);
        } else {
            $token = Auth::user()->createToken('myappToken')->plainTextToken;
            $user = auth()->user();

            $respon = [
                'status' => 'success',
                'message' => 'Authentification réussie',
                'content' => [
                    'status_code' => 200,
                    'access_token' => $token,
                    'token_type' => 'Bearer',
                    'user_name' => $user->name,
                    'user_email' => $user->email,
                    'user_id' => $user->id,
                ]
            ];
            return response($respon, 200);
        }
    }

    public function logout(Request $request)
    {
        $request->user()->token()->revoke();
        return response([
            'message' => 'Successfully logged out'
        ], 200);
    }
}
