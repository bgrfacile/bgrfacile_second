<?php

namespace App\Http\Controllers\Api\v1;

use App\Models\Ecole;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\v1\Ecole\EcoleResource;
use App\Http\Resources\v1\Ecole\EcoleCollection;
use App\Models\User;

class EcoleController extends Controller
{
    /**
     * Liste de tous les cours
     *
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return new EcoleCollection(Ecole::paginate(15));
    }

    /**
     * Creation d'un cours
     *
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
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
     * @return \Illuminate\Http\Response
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

    public function addUser(Request $request)
    {
        $request->validate([
            "ecole_id" => "required",
            "user_id" => "required",
        ]);
        $ecole = Ecole::findOrFail($request->ecole_id);
        $demandeEcole = $ecole->demandesEcole();
        $user = User::findOrFail($request->user_id);
        $demandeUser = $user->demandesUser();

        if (
            count($demandeEcole
                ->where('ecole_id', $request->ecole_id)
                ->where('user_id', $request->user_id)
                ->get()) == 0
        ) {
            if (
                $demandeUser
                ->where('ecole_id', $request->ecole_id)
                ->where('user_id', $request->user_id)
                ->where('demandeable_type', "App\Models\Ecole")
                ->first() == null
            ) {
                $demandeEcole->create([
                    "user_id" => $request->user_id,
                    "ecole_id" => $request->ecole_id,
                ]);
                return response()->json([
                    "data" => new EcoleResource($ecole),
                ], 200);
            }
        }

        return response()->json([
            "message" => "impossible de faire cette demande",
        ], 400);
    }

    public function removeUser(Request $request)
    {
        $request->validate([
            "ecole_id" => "required",
            "user_id" => "required",
        ]);
        $ecole = Ecole::findOrFail($request->ecole_id);
        $demandeEcole = $ecole->demandesEcole();
        $user = User::findOrFail($request->user_id);
        $demandeUser = $user->demandesUser();

        if (
            $demandeUser->where('ecole_id', $request->ecole_id)->first() ||
            $demandeEcole->where('user_id', $request->user_id)->first()
        ) {
            $result = $demandeEcole->where('user_id', $request->user_id)->where('user_id', $request->user_id)->delete($request->user_id);
            return response()->json([
                "success" => $result,
            ], 200);
        }
        return response()->json([
            "message" => "impossible de faire cette demande",
        ], 400);
    }

    public function acceptUser(Request $request)
    {
        $request->validate([
            "ecole_id" => "required",
            "user_id" => "required",
        ]);
        $ecole = Ecole::findOrFail($request->ecole_id);
        $result = $ecole->users()->detach($request->user_id);
        return response()->json([
            "success" => $result,
        ], 200);
    }

    public function refuserUser(Request $request)
    {
        dd(" refuser demande");
    }
}
