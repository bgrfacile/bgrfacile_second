<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
    public function updateUser(Request $request)
    {
        $user = User::findOrFail($request->user_id);
        $validator = Validator::make($request->all(), [
            'email' => 'required|email|unique:users',
            'name' => 'required|string|max:255',
        ]);
        // dd($validator->validate());
        if ($validator->fails()) {
            $user->email = $request->email;
            $user->name = $request->name;
            $user->save();
        } else {
            return response([
                'message' => $validator->validate(),
            ], 404);
        }

        return response([
            'message' => 'user updated successfully',
            'user' => new UserResource($user),
        ], 200);
    }

    public function updateImage(Request $request)
    {
        $request->validate(
            [
                'user_id' => 'required|exists:users,id',
                'file' => 'image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            ]
        );
        $user = User::find($request->user_id);
        if ($request->hasFile('file')) {
            $imageName = time() . '_' . $request->file('file')->getClientOriginalName();
            $user->url_image = "/storage/" . $request->file('file')->storeAs('profile_images', $imageName, 'public');
        }
        $user->save();
        return response([
            'message' => 'user updated successfully',
            'user' => new UserResource($user),
        ], 200);
    }
}
