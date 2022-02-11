<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\UserResource;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;

class UserController extends Controller
{
    public function updateUser(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|email|unique:users',
            'name' => 'required|string|max:255',
            'user_id' => 'required',
            'birthday' => 'date',
            'country' => 'string',
            'gender' => 'string',
            'numberPhone' => 'string',
        ]);
        $user = User::findOrFail($request->user_id);
        if ($validator->fails()) {
            $user->update([
                'email' => $request->email,
                'name' => $request->name,
                'birthday' => $request->birthday,
                'country' => $request->country,
                'gender' => $request->gender['value']
            ]);
            if ($request->has('numberPhone') && $request->numberPhone != null) {
                $user->phone()->create([
                    'number_phone' => $request->numberPhone
                ]);
            }
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
            $imageName = time() . '_' . Str::slug($request->file('file')->getClientOriginalName(), '-');
            $user->url_image = "/storage/" . $request->file('file')->storeAs('profile_images', $imageName, 'public');
        }
        $user->save();
        return response([
            'message' => 'user updated successfully',
            'user' => new UserResource($user),
        ], 200);
    }
}
