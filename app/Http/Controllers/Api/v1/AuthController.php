<?php

namespace App\Http\Controllers\Api\v1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    /**
     * Create User
     * @param Request $request
     * @return User
     */
    public function createUser(Request $request)
    {
        try {
            $validateUser = Validator::make($request->all(), [
                "name" => "required",
                "email" => "required|email|unique:users,email",
                "password" => "required"
            ]);

            if ($validateUser->fails()) {
                return response()->json([
                    "status" => false,
                    "message" => "validation error",
                    "errors" => $validateUser->errors()
                ], 401);
            }
        } catch (\Throwable $th) {
            return response()->json([
                "status" => false,
                "message" => $th->getMessage(),
            ], 401);
        }
    }
}
