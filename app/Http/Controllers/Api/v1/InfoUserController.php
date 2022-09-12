<?php

namespace App\Http\Controllers\Api\v1;

use App\Http\Controllers\Controller;
use App\Http\Resources\v1\User\UserCollection;
use App\Http\Resources\v1\User\UserResource;
use App\Models\InfoUser;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class InfoUserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return new UserCollection(User::paginate(15));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  App\Models\User $user
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, User $user)
    {
        // $request->validate([
        //     "slug" => "string",
        //     "first_name" => "string",
        //     "last_name" => "string",
        //     "image_path" => "image",
        //     "address" => "string",
        //     "genre" => "in:M,F",
        //     "city" => "string",
        //     "phone" => "string",
        // ]);
        // $user->infoUser()->create($request->all());
        // return response()->json([
        //     "success" => true,
        //     "message" => "mise à jour des informations de l'utilisateur",
        // ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  User  $user
     * @return \Illuminate\Http\Response
     */
    public function show(User $user)
    {
        return new UserResource($user);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  User  $user
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, User $user)
    {
        $request->validate([
            "slug" => "string",
            "first_name" => "string",
            "last_name" => "string",
            "image_path" => "image",
            "address" => "string",
            "genre" => "in:M,F",
            "city" => "string",
            "phone" => "string",
        ]);
        $user->infoUser()->update($request->all());
        return response()->json([
            "success" => true,
            "message" => "mise à jour des informations de l'utilisateur",
            "data" => [
                "user" => new UserResource($user)
            ]
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(User $user)
    {
        $user->delete();
        return response()->json([
            "success" => true,
            "message" => "utilisation supprimer avec success"
        ]);
    }

    public function search(string $name)
    {
        $users = User::where('name', 'like', '%' . $name . '%')->paginate(10);
        return new UserCollection($users);
    }
}
