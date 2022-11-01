<?php

namespace App\Http\Controllers\Api\v1;

use App\Models\User;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\v1\User\UserResource;
use Illuminate\Auth\Events\PasswordReset;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Password;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\ValidationException;

class AuthController extends Controller
{
    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function createToken(Request $request): \Illuminate\Http\JsonResponse
    {
        $request->validate([
            'token_name' => 'string'
        ]);
        $token = $request->user()->createToken($request->token_name);

        return response()->json([
            'data' => ['token' => $token->plainTextToken]
        ], 200);
    }

    /**
     * Create User
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function createUser(Request $request): \Illuminate\Http\JsonResponse
    {
        try {
            $validateUser = Validator::make($request->all(), [
                "name" => "required",
                "email" => "required|email|unique:users,email",
                "password" => "required"
            ]);

            if ($validateUser->fails()) {
                return response()->json([
                    "success" => false,
                    "message" => "validation error",
                    "errors" => $validateUser->errors()
                ], 401);
            }
            $request->session()->regenerate();
            $user = User::create([
                "name" => $request->name,
                "email" => $request->email,
                "password" => Hash::make($request->password)
            ]);
            $user->infoUser()->create([
                'slug' => Str::slug($request->name)
            ]);
            return response()->json([
                "success" => true,
                "message" => "user created successfully",
                "data" => [
                    "user" => new UserResource($user),
                    'access_token' => $user->createToken("create_user")->plainTextToken,
                    'token_type' => 'Bearer',
                ]
            ], 201);
        } catch (\Throwable $th) {
            return response()->json([
                "status" => false,
                "message" => $th->getMessage(),
            ], 500);
        }
    }

    /**
     * login User
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function loginUser(Request $request): \Illuminate\Http\JsonResponse
    {
        try {
            $validatUser = Validator::make($request->all(), [
                "email" => "required|email",
                "password" => "required"
            ]);

            if ($validatUser->fails()) {
                return response()->json([
                    "success" => false,
                    "message" => "validator error",
                    "errors" => $validatUser->errors()
                ], 401);
            }
            if (!Auth::attempt($request->only(["email", "password"]))) {
                return response()->json([
                    "success" => false,
                    "message" => "identifiants non valide"
                ], 401);
            }
            Auth::attempt($request->only(["email", "password"]), true);
            $user = User::where('email', $request->email)->first();
            $request->session()->regenerate();
            return response()->json([
                "success" => true,
                "message" => "user Logged In Successefully",
                "data" => [
                    "user" => new UserResource($user),
                    'access_token' => $user->createToken("create_user")->plainTextToken,
                    'token_type' => 'Bearer',
                ]
            ], 200);
        } catch (\Throwable $th) {
            return response()->json([
                "status" => false,
                "message" => $th->getMessage(),
            ], 500);
        }
    }

    /**
     * @param Request $request
     * @return mixed
     */
    public function me(Request $request): \Illuminate\Http\JsonResponse
    {
        if (\auth()->check()) {
            $request->session()->regenerate();
            $user = $request->user();
            return response()->json([
                "success" => true,
                "message" => "Authentification réussie",
                "data" => [
                    "user" => new UserResource($user)
                ]
            ], 200);
        } else {
            return response()->json([
                'message' => 'Authentification echec',
            ], 404);
        }
    }

    public function logout(Request $request): array
    {
        auth()->user()->tokens()->delete();
        $request->session()->invalidate();
        // $request->user()->currentAccessToken()->delete();
        // $request->session()->regenerateToken();
        return [
            "status" => true,
            "message" => "Logged out",
        ];
    }

    public function forgotPassword(Request $request): array|\Illuminate\Http\JsonResponse
    {
        try {
            $validate = Validator::make($request->all(), [
                "email" => "required|email",
            ]);
            if ($validate->fails()) {
                return response()->json([
                    "success" => false,
                    "message" => "validator error",
                    "errors" => $validate->errors()
                ], 401);
            }
            $status = Password::sendResetLink(
                $request->only('email')
            );

            if ($status == Password::RESET_LINK_SENT) {
                return [
                    "status" => "email de renitialisation du mot de passe envoyé " //. __($status)
                ];
            }
            throw ValidationException::withMessages([
                "email" => [trans($status)]
            ]);
        } catch (\Throwable $th) {
            return response()->json([
                "status" => false,
                "message" => $th->getMessage(),
            ], 500);
        }
    }

    public function resetPassword(Request $request)
    {
        $request->validate([
            'token' => 'required',
            'email' => 'required|email',
            'password' => 'required|min:8|confirmed',
        ]);

        $status = Password::reset(
            $request->only('email', 'password', 'password_confirmation', 'token'),
            function ($user) use ($request) {
                $user->forceFill([
                    "password" => Hash::make($request->password),
                    "remember_token" => Str::random(60)
                ])->save();

                $user->tokens()->delete();
                event(new PasswordReset($user));
            }
        );
        if ($status == Password::PASSWORD_RESET) {
            return response([
                "message" => "Password reset successufully"
            ]);
        }
        return response([
            "message" => __($status)
        ], 500);
    }
}
