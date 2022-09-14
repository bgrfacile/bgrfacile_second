<?php

namespace App\Http\Controllers\Api\v1;

use App\Http\Controllers\Controller;
use App\Http\Resources\v1\User\UserCollection;
use App\Http\Resources\v1\User\UserResource;
use App\Models\Ecole;
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
        $users = User::where('name', 'like', '%' . $name . '%')
            ->orWhere('email', 'like', '%' . $name . '%')
            ->paginate(15);
        return new UserCollection($users);
    }

    public function addEcole(Request $request)
    {
        $request->validate([
            "ecole_id" => "required",
            "user_id" => "required",
        ]);
        $user = User::findOrFail($request->user_id);
        if (count($user->demandesUser()->where('ecole_id', $request->ecole_id)->where('user_id', $request->user_id)->get()) == 0) {
            $user->demandesUser()->create([
                "user_id" => $request->user_id,
                "ecole_id" => $request->ecole_id,
            ]);
            return response()->json([
                "data" => new UserResource($user),
            ], 200);
        }

        return response()->json([
            "message" => "impossible de faire cette demande",
        ], 400);
    }

    public function removeEcole(Request $request)
    {
        $request->validate([
            "ecole_id" => "required",
            "user_id" => "required",
        ]);
        $user = User::findOrFail($request->user_id);
        $demandeRecup = $user->demandesUser()
            ->where('ecole_id', $request->ecole_id)
            ->where('user_id', $request->user_id)
            ->first();
        if ($demandeRecup != null) {
            if ($demandeRecup->response == false) {
                $result = $demandeRecup->first()->delete();
                return response()->json([
                    "success" => $result,
                ], 200);
            }
        }
        return response()->json([
            "message" => "impossible de faire cette demande",
        ], 400);
    }

    public function acceptEcole(Request $request)
    {
        $request->validate([
            "ecole_id" => "required",
            "user_id" => "required",
        ]);
        $user = User::findOrFail($request->user_id);
        $demandeRecup = $user->demandesUser()
            ->where('ecole_id', $request->ecole_id)
            ->where('user_id', $request->user_id)
            ->where('demandeable_type', "App\Models\Ecole")
            ->first();
        // dd($demandeRecup);
        if ($demandeRecup != null) {
            if ($demandeRecup->response == false) {
                $demandeRecup->response = true;
                $result = $demandeRecup->save();
                return response()->json([
                    "success" => $result,
                ], 200);
            }
        }
        return response()->json([
            "message" => "impossible de faire cette demande",
        ], 400);
    }
}
