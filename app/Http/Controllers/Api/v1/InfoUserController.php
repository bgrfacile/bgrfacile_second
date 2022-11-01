<?php

namespace App\Http\Controllers\Api\v1;

use App\Events\AcceptDemandeEvent;
use App\Http\Controllers\Controller;
use App\Http\Resources\v1\User\UserCollection;
use App\Http\Resources\v1\User\UserResource;
use App\Models\Ecole;
use App\Models\InfoUser;
use App\Models\User;
use App\Services\v1\CustumerQuery;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class InfoUserController extends Controller
{
    /**
     * @OA\Get(
     *     path="/users",
     *     description="all users pagninate",
     *     @OA\Response(
     *      response=200,
     *      description="json avec une clé data")
     * )
     * @param Request $request
     * @return UserCollection
     */
    public function index(Request $request): UserCollection
    {
        $queryItems = $request->query();
        $users = User::paginate(15);
        if (count($queryItems) != 0) {
            $collectQuery = collect($queryItems);
            if ($collectQuery->has('role')) {
                $users = User::whereHas('roles', function ($q) use ($collectQuery) {
                    $q->where('roles.name', '=', $collectQuery->get('role'));
                })->paginate(15);
            }
        }
        return new UserCollection($users);
    }

    /**
     * @param \Illuminate\Http\Request $request
     * @param App\Models\User $user
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, User $user)
    {
    }

    /**
     * @OA\Get(
     *     path="/users/{id}",
     *     description="all users pagninate",
     *     @OA\parameter(
     *          name="id",
     *          in="path",
     *          required=true,
     *      ),
     *     @OA\Response(
     *      response=200,
     *      description="json avec une clé data"
     * ),
     * ),
     *
     * @param User $user
     * @return \Illuminate\Http\Response
     */
    public function show(User $user)
    {
        return new UserResource($user);
    }

    /**
     * @OA\PUT(
     *     path="/users/{id}",
     *     description="all users pagninate",
     *     @OA\parameter(
     *          name="id",
     *          in="path",
     *          required=true,
     *      ),
     *     @OA\Response(
     *      response=200,
     *      description="json avec une clé data"
     * ),
     * ),
     * @param \Illuminate\Http\Request $request
     * @param User $user
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
     * @OA\DELETE(
     *     path="/users/{id}",
     *     description="all users pagninate",
     *     @OA\parameter(
     *          name="id",
     *          in="path",
     *          required=true,
     *      ),
     *     @OA\Response(
     *      response=200,
     *      description="json avec une clé data"
     * ),
     * ),
     *
     * @param int $id
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

    /**
     * @OA\GET(
     *     path="/users/{name}",
     *     description="recherche user",
     *     @OA\parameter(
     *          name="name",
     *          in="path",
     *          required=true,
     *      ),
     *     @OA\Response(
     *      response=200,
     *      description="json avec une clé data"
     * ),
     * ),
     */
    public function search(string $name)
    {
        $users = User::where('name', 'like', '%' . $name . '%')
            ->orWhere('email', 'like', '%' . $name . '%')
            ->paginate(15);
        return new UserCollection($users);
    }

    public function ajoutForcedEcole(Request $request)
    {
        $request->validate([
            "ecole_id" => "required",
            "user_id" => "required",
        ]);
        $user = User::findOrFail($request->user_id);
        $user->demandesUser()->create([
            "response" => 'accepter',
            "user_id" => $user->id,
            "ecole_id" => $request->ecole_id,
        ]);
        // event(new AcceptDemandeEvent($user));

        return response()->json([
            "message" => "ecole ajouter avec success",
        ], 200);
    }
    public function demandeAtEcole(Request $request)
    {
        $request->validate([
            "ecole_id" => "required",
            "user_id" => "required",
        ]);
        $user = User::findOrFail($request->user_id);
        $demandes = DB::table("ecoles_has_users")
            ->where("ecoles_has_users.user_id", $user->id)
            ->where("ecoles_has_users.ecole_id", $request->ecole_id)
            ->get();
        if (count($demandes) > 0) {
            return response()->json([
                "message" => "demande deja envoyer",
            ], 200);
        }
        $user->demandesUser()->create([
            "response" => 'attente',
            "user_id" => $user->id,
            "ecole_id" => $request->ecole_id,
        ]);
        return response()->json([
            "message" => "demande envoyer",
        ], 200);
    }
    public function acceptDemandeEcole(Request $request)
    {
        $request->validate([
            "ecole_id" => "required",
            "user_id" => "required",
        ]);
        $user = User::findOrFail($request->user_id);
        $user->demandesUser()->update([
            "response" => 'accepter',
            "ecole_id" => $request->ecole_id,
        ]);
        return response()->json([
            "message" => "demande accepter",
        ], 200);
    }
    public function refuseDemandeEcole(Request $request)
    {
        $request->validate([
            "ecole_id" => "required",
            "user_id" => "required",
        ]);
        $user = User::findOrFail($request->user_id);
        $user->demandesUser()->update([
            "response" => 'refuser',
            "ecole_id" => $request->ecole_id,
        ]);
        return response()->json([
            "message" => "demande refuser",
        ], 200);
    }
    public function deleteDemandeEcole(Request $request)
    {
        $request->validate([
            "ecole_id" => "required",
            "user_id" => "required",
        ]);
        $user = User::findOrFail($request->user_id);
        $user->demandesUser()->delete([
            "ecole_id" => $request->ecole_id,
        ]);
        return response()->json([
            "message" => "supprimer avec success",
        ], 200);
    }
}
