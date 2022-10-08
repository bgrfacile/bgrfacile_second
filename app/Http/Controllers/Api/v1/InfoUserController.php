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
        if (count($queryItems) == 0) {
            return new UserCollection(User::paginate(15));
        }
        else {
            $users = collect([]);
            foreach ($queryItems as $query) {
                if ($query == 'apprenant') {
                    $users = User::whereHas('roles', function ($q) use ($query) {
                        $q->where('roles.name', '=', $query);
                    })->paginate(15);
                } elseif ($query == 'apprenant-ecole') {
                    $users = User::whereHas('roles', function ($q) use ($query) {
                        $q->where('roles.name', '=', $query);
                    })->paginate(15);
                }
            }
            return new UserCollection($users);
        }

        // $filter = new CustumerQuery();
        // $queryItems = $filter->transform($request);  // [['colum','orperator','value']]
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

    /**
     * @OA\POST(
     *     path="/users/add/ecole",
     *     description="envoyer demande adhesion à une école",
     *     @OA\Response(
     *      response=200,
     *      description="json avec une clé data"
     * ),
     * ),
     */
    public function addEcole(Request $request)
    {
        $request->validate([
            "ecole_id" => "required",
            "user_id" => "required",
        ]);
        $user = User::findOrFail($request->user_id);
        $demandeHasUser = $user->demandesUser();
        $ecole = Ecole::findOrFail($request->ecole_id);
        $demandeHasEcole = $ecole->demandesEcole();

        if (count($demandeHasUser
                ->where('ecole_id', $request->ecole_id)
                ->where('user_id', $request->user_id)
                ->get()) == 0) {
            if (
                $demandeHasEcole
                    ->where('ecole_id', $request->ecole_id)
                    ->where('user_id', $request->user_id)
                    ->where('demandeable_type', "App\Models\Ecole")
                    ->first() == null
            ) {
                $demandeHasUser->create([
                    "user_id" => $request->user_id,
                    "ecole_id" => $request->ecole_id,
                ]);
                return response()->json([
                    "data" => new UserResource($user),
                ], 200);
            }
        }

        return response()->json([
            "message" => "impossible de faire cette demande",
        ], 400);
    }

    /**
     * @OA\PUT(
     *     path="/users/refuse/ecole",
     *     description="refuser demande adhesion faite par une école",
     *     @OA\Response(
     *      response=200,
     *      description="json avec une clé data"
     * ),
     * ),
     */
    public function refuseEcole(Request $request)
    {
        $request->validate([
            "ecole_id" => "required",
            "user_id" => "required",
        ]);
        $demandeRecup = DB::table("ecoles_has_users")
            ->where("user_id", $request->user_id)
            ->where("ecole_id", $request->ecole_id);
        if ($demandeRecup->first() != null) {
            if (boolval($demandeRecup->first()->response)) {
                $demandeRecup->first()->response = false;
                // $demandeRecup->save();
                return response()->json([
                    "message" => "mise à jour avec succes",
                ], 200);
            } else {
                $result = $demandeRecup->delete();
                return response()->json([
                    "success" => $result,
                ], 200);
            }
        }
        return response()->json([
            "message" => "impossible de faire cette demande",
        ], 400);
    }

    /**
     * @OA\PUT(
     *     path="/users/accept/ecole",
     *     description="accepter demande adhesion faite par une école",
     *     @OA\Response(
     *      response=200,
     *      description="json avec une clé data"
     * ),
     * ),
     */
    public function acceptEcole(Request $request)
    {
        $request->validate([
            "ecole_id" => "required",
            "user_id" => "required",
        ]);
        $ecole = Ecole::findOrFail($request->ecole_id);
        $demandeHasEcole = $ecole->demandesEcole()
            ->where('ecole_id', $request->ecole_id)
            ->where('user_id', $request->user_id)
            ->where('demandeable_type', "App\Models\Ecole")
            ->first();
        if ($demandeHasEcole != null) {
            if ($demandeHasEcole->response == false) {
                $demandeHasEcole->response = true;
                event(new AcceptDemandeEvent($request->user_id));
                $result = $demandeHasEcole->save();
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
