<?php

namespace App\Http\Controllers\Api;

use Carbon\Carbon;
use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;
use App\Http\Resources\User\UserResource;
use App\Http\Resources\User\UserShowResource;

class UserController extends Controller
{

    public function updateUser(Request $request)
    {
        $request->validate([
            'email' => 'required|email|exists:users,email',
            'name' => 'required|string|max:255',
            'bio' => 'nullable|string',
            // 'birthday' => 'required',
            // 'country' => 'required',
            'gender' => 'nullable|string',
            // 'numberPhone' => 'string',
        ]);
        $user = User::findOrFail(Auth::user()->id);
        if ($request->has('numberPhone') && $request->numberPhone != null) {
            if ($user->phone()->exists()) {
                $user->phone()->update([
                    'number_phone' => $request->numberPhone,
                ]);
            } else {
                $user->phone()->create([
                    'number_phone' => $request->numberPhone,
                ]);
            }
            // $user->phone()->updateOrCreate(['number_phone' => $request->numberPhone]);

        }
        $user->update([
            'email' => $request->email,
            'pseudo' => $request->name,
        ]);
        $user->infoUser()->update([
            'bio' => $request->bio,
            'birthday' => $request->birthday == null ? null : Carbon::parse($request->birthday)->format('Y-m-d'),
            'country' => is_array($request->country) ? $request->country["label"] : $request->country,
            'gender' => $request->gender == 'femme' ? 'F' : 'M',
        ]);
        $user->save();

        return response([
            'message' => 'user updated successfully',
            'user' => new UserResource($user),
        ], 200);
    }

    public function updateImage(Request $request)
    {
        $request->validate([
            // 'user_id' => 'required|exists:users,id',
            'file' => 'image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);
        $user = User::findOrFail(Auth::user()->id);
        if ($request->hasFile('file')) {
            try {
                if ($user->url_image != null && File::exists(public_path($user->url_image))) {
                    unlink(public_path($user->url_image));
                }
                $imageName = time() . '_' . uniqid() . '.' . $request->file('file')->getClientOriginalExtension();
                $user->url_image = "/storage/" . $request->file('file')->storeAs('images_profile_utilisateurs', $imageName, 'public');
            } catch (\Exception $e) {
                return response([
                    'message' => 'error',
                    'error' => $e->getMessage(),
                ], 500);
            }
        }
        $user->save();
        return response([
            'message' => 'user updated successfully',
            'user' => new UserResource($user),
        ], 200);
    }

    public function updatePassword(Request $request)
    {
        $request->validate(
            [
                'password' => 'required|string|min:6|confirmed',
            ]
        );
        $user = User::find(Auth::user()->id);
        $user->password = Hash::make($request->password);
        $user->save();
        return response([
            'message' => 'user updated successfully',
            'user' => new UserResource($user),
        ], 200);
    }

    public function show($user)
    {
        $userFind = User::findOrFail($user);
        return new UserShowResource($userFind);
    }
}
