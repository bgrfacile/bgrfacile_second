<?php

namespace App\Http\Controllers\Api\v1;

use App\Models\User;
use App\Models\Ecole;
use App\Enums\PaginateType;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use App\Http\Resources\v1\Ecole\EcoleResource;
use App\Http\Resources\v1\Ecole\EcoleCollection;

class EcoleController extends Controller
{

    public function index(Request $request): EcoleCollection
    {
        $queryItems = $request->query();
        return new EcoleCollection(Ecole::paginate(PaginateType::standards));
    }

    /**
     * Creation d'un cours
     *
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request)
    {
        $request->validate([
            "name" => "required|string|unique:ecoles,name",
            "slug" => "nullable|string",
            "category" => "required|in:public,private",
            "email" => "nullable|email",
            "site_web" => "nullable|string|url",
            "description" => "nullable|string|max:800",
            "avantages" => "string",
            "path_logo" => "nullable|image",
            "path_baniere" => "nullable|image",
        ]);
        $path_logo = null;
        if ($request->hasFile('path_logo')) {
            $path_logo = saveFileToStorageDirectory($request, "path_logo", "logo_ecole");
        }
        $path_baniere = null;
        if ($request->hasFile('path_baniere')) {
            $path_baniere = saveFileToStorageDirectory($request, "path_baniere", "baniere_ecole");
        }
        $ecole = Ecole::create([
            "name" => $request->name,
            "slug" => Str::slug($request->name),
            "category" => $request->category,
            "email" => $request->email,
            "site_web" => $request->site_web,
            "description" => $request->description,
            "avantages" => $request->avantages,
            "path_logo" => $path_logo,
            "path_baniere" => $path_baniere,
        ]);
        return response()->json([
            "sucess" => true,
            "message" => "creation avec success",
            "data" => [
                "ecole" => new EcoleResource($ecole)
            ]
        ], 201);
    }

    /**
     * Display the specified resource.
     *
     * @param Ecole $ecole
     * @return \Illuminate\Http\Response
     */
    public function show(Ecole $ecole)
    {
        return new EcoleResource($ecole);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(Request $request, int $id)
    {
        $request->validate([
            "name" => "string|unique:ecoles,name",
            "slug" => "string",
            "category" => "nullable|in:public,private",
            "email" => "email",
            "site_web" => "string|url",
            "description" => "string|max:800",
            "avantages" => "string",
            "path_logo" => "nullable|image",
            "path_baniere" => "nullable|image",
        ]);
        $path_logo = $request->path_logo;
        if ($request->hasFile('path_logo')) {
            $path_logo = saveFileToStorageDirectory($request, "path_logo", "logo_ecole");
        }
        $path_baniere = $request->path_baniere;
        if ($request->hasFile('path_baniere')) {
            $path_baniere = saveFileToStorageDirectory($request, "path_baniere", "baniere_ecole");
        }
        $ecole = Ecole::findOrFail($id);
        $result = $ecole->update([
            "name" => $request->name ?? $ecole->name,
            "category" => $request->category ?? $ecole->category,
            // "slug" => $request->name != null ? Str::slug($request->name) : $ecole->slug,
            "email" => $request->email ?? $ecole->email,
            "site_web" => $request->site_web ?? $ecole->site_web,
            "description" => $request->description ?? $ecole->description,
            "avantages" => $request->avantages ?? $ecole->avantages,
            "path_logo" => $path_logo,
            "path_baniere" => $path_baniere,
        ]);
        return response()->json([
            "sucess" => $result,
        ]);
    }

    /**
     * Remove the specified resource from storage.
     * @return \Illuminate\Http\Response
     */
    public function destroy(Ecole $ecole)
    {
        $result = $ecole->delete();
        return response()->json([
            "success" => $result,
        ], 200);
    }

    public function search(string $name)
    {
        $ecoles = Ecole::where('name', 'like', '%' . $name . '%')->paginate(10);
        return new EcoleCollection($ecoles);
    }

    public function addTypeEcole(Request $request)
    {
        $request->validate([
            "ecole_id" => "required",
            "type_ecole_id" => "required"
        ]);
        $ecole = Ecole::findOrFail($request->ecole_id);
        $result = $ecole->typeEcole()->attach($request->type_ecole_id);
        return response()->json([
            "success" => true,
            "data" => new EcoleResource($ecole)
        ], 200);
    }

    public function removeTypeEcole(Request $request)
    {
        $request->validate([
            "ecole_id" => "required",
            "type_ecole_id" => "required"
        ]);
        $ecole = Ecole::findOrFail($request->ecole_id);
        $result = $ecole->typeEcole()->detach($request->type_ecole_id);
        return response()->json([
            "success" => true,
            "data" => new EcoleResource($ecole)
        ], 200);
    }


    public function addCycle(Request $request)
    {
        $request->validate([
            "cycle_id" => "required",
            "ecole_id" => "required"
        ]);
        $ecole = Ecole::findOrFail($request->ecole_id);
        $result = $ecole->cycles()->attach($request->cycle_id);
        return response()->json([
            "success" => $result,
        ], 200);
    }

    public function removeCycle(Request $request)
    {
        $request->validate([
            "cycle_id" => "required",
            "ecole_id" => "required"
        ]);
        $ecole = Ecole::findOrFail($request->ecole_id);
        $result = $ecole->cycles()->detach($request->cycle_id);
        return response()->json([
            "success" => $result,
        ], 200);
    }

    public function ajoutForcedUser(Request $request)
    {
        $request->validate([
            "ecole_id" => "required",
            "user_id" => "nullable",
            "email" => "nullable|email",
        ]);
        $ecole = Ecole::findOrFail($request->ecole_id);
        if ($request->email !== null) {
            $user = User::where('email', $request->email)->first();
            if ($user == null) {
                $ecole->demandesEcole()->create([
                    "response" => "accepter",
                    "user_id" => $user->id,
                    "ecole_id" => $request->ecole_id,
                ]);
            }
            return response()->json([
                "message" => "user ajouter avec success",
            ], 200);
        }

        // event(new AcceptDemandeEvent($user));
        $ecole->demandesEcole()->create([
            "response" => "accepter",
            "user_id" => $request->user_id,
            "ecole_id" => $request->ecole_id,
        ]);
        return response()->json([
            "message" => "user ajouter avec success",
        ], 200);
    }

    public function demandeAtUser(Request $request)
    {
        $request->validate([
            "ecole_id" => "required",
            "user_id" => "nullable",
            "email" => "nullable|email",
        ]);
        $demandes = DB::table("ecoles_has_users")
            ->where("ecoles_has_users.user_id", $request->user_id)
            ->where("ecoles_has_users.ecole_id", $request->ecole_id)
            ->get();
        if (count($demandes) > 0) {
            return response()->json([
                "message" => "demande deja envoyer",
            ], 200);
        }
        $ecole = Ecole::findOrFail($request->ecole_id);
        if ($request->email !== null) {
            $user = User::where('email', $request->email)->first();
            if ($user == null) {
                $ecole->demandesEcole()->create([
                    "response" => "attente",
                    "user_id" => $user->id,
                    "ecole_id" => $request->ecole_id,
                ]);
            }
            return response()->json([
                "message" => "demande envoyer",
            ], 200);
        }
        // event(new AcceptDemandeEvent($user));
        $ecole->demandesEcole()->create([
            "response" => "attente",
            "user_id" => $request->user_id,
            "ecole_id" => $request->ecole_id,
        ]);
        return response()->json([
            "message" => "demande envoyer",
        ], 200);
    }
    public function acceptDemandeUser(Request $request)
    {
        $request->validate([
            "ecole_id" => "required",
            "user_id" => "nullable",
            "email" => "nullable|email",
        ]);
        $ecole = Ecole::findOrFail($request->ecole_id);
        // event(new AcceptDemandeEvent($user));
        $ecole->demandesEcole()->update([
            "response" => "accepter",
            "user_id" => $request->user_id,
        ]);
        return response()->json([
            "message" => "demande accepter",
        ], 200);
    }
    public function refuseDemandeUser(Request $request)
    {
        $request->validate([
            "ecole_id" => "required",
            "user_id" => "nullable",
            "email" => "nullable|email",
        ]);
        $ecole = Ecole::findOrFail($request->ecole_id);
        // event(new AcceptDemandeEvent($user));
        $ecole->demandesEcole()->update([
            "response" => "refuser",
            "user_id" => $request->user_id,
        ]);
        return response()->json([
            "message" => "demande accepter",
        ], 200);
    }
    public function deleteDemandeUser(Request $request)
    {
        $request->validate([
            "ecole_id" => "required",
            "user_id" => "nullable",
            "email" => "nullable|email",
        ]);
        $ecole = Ecole::findOrFail($request->ecole_id);
        // event(new AcceptDemandeEvent($user));
        $ecole->demandesEcole()->delete([
            "user_id" => $request->user_id,
        ]);
        return response()->json([
            "message" => "supprimer avec success",
        ], 200);
    }

    public function demandes(Request $request)
    {
        $request->validate([
            "ecole_id" => "required",
        ]);
        $listeDemandes = DB::table("ecoles_has_users")
            ->where("response", "attente")
            ->where("ecole_id", $request->ecole_id)
            ->get();
        // $ecole = Ecole::findOrFail($request->ecole_id);
        return response()->json([
            "success" => true,
            "data" => $listeDemandes->map(function ($demande) {
                if ($demande->demandeable_type === 'App\\Models\\Ecole') {
                    $user = User::find($demande->user_id);
                    return [
                        "initiateur" => 'ecole',
                        "response" => $demande->response,
                        "demande_id" => $demande->id,
                        "user_id" => $user->id,
                        "user_name" => $user->name,
                        "demande_at" => $demande->created_at,
                    ];
                } elseif ($demande->demandeable_type === 'App\\Models\\User') {
                    $user = User::find($demande->user_id);
                    return [
                        "initiateur" => 'user',
                        "response" => $demande->response,
                        "demande_id" => $demande->id,
                        "user_id" => $user->id,
                        "user_name" => $user->name,
                        "demande_at" => $demande->created_at,
                    ];
                }
            }),
        ], 200);
    }

    public function ajoutLocalisation(Request $request)
    {
        $request->validate([
            "ecole_id" => "required",
            "latitude" => "required",
            "longitude" => "required",
            "address" => "string",
            "code_postal" => "string",
        ]);
        $ecole = Ecole::findOrFail($request->ecole_id);
        $ecole->location()->create([
            "latitude" => $request->latitude,
            "longitude" => $request->longitude,
            "address" => $request->address,
            "code_postal" => $request->code_postal,
        ]);
        return response()->json([
            "message" => "localisation ajouter avec success",
        ], 200);
    }

    public function updateLocalisation(Request $request)
    {
        $request->validate([
            "ecole_id" => "required",
            "localisation_id" => "required",
            "latitude" => "required",
            "longitude" => "required",
            "address" => "string",
            "code_postal" => "string",
        ]);
        $ecole = Ecole::findOrFail($request->ecole_id);
        $ecole->location()->update([
            "latitude" => $request->latitude,
            "longitude" => $request->longitude,
            "address" => $request->address,
            "code_postal" => $request->code_postal,
        ]);
        return response()->json([
            "message" => "localisation modifier avec success",
        ], 200);
    }

    public function deleteLocalisation(Request $request)
    {
        $request->validate([
            "ecole_id" => "required",
            "localisation_id" => "required",
        ]);
        $ecole = Ecole::findOrFail($request->ecole_id);
        $ecole->location()->delete([
            "id" => $request->localisation_id,
        ]);
        return response()->json([
            "message" => "localisation supprimer avec success",
        ], 200);
    }
}
