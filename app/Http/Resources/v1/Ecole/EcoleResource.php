<?php

namespace App\Http\Resources\v1\Ecole;

use App\Http\Resources\v1\Cycle\CycleCollection;
use App\Http\Resources\v1\ImageEcole\ImageEcoleCollection;
use App\Http\Resources\v1\ImageEcole\ImageEcoleResource;
use App\Http\Resources\v1\Location\LocationRessource;
use App\Http\Resources\v1\Role\RoleCollection;
use App\Http\Resources\v1\TypeEcoleResource;
use App\Http\Resources\v1\User\UserCollection;
use App\Models\User;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\DB;

class EcoleResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param \Illuminate\Http\Request $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        $listeDemandes = DB::table("ecoles_has_users")
            ->where("response", "attente")
            ->where("ecole_id", $this->id)
            ->get();
        $listeUsersAccepter = DB::table("ecoles_has_users")
            ->where("response", "accepter")
            ->where("ecole_id", $this->id)
            ->get();
        return [
            "id" => $this->id,
            "name" => $this->name,
            "slug" => $this->slug,
            'category' => $this->category,
            'type_ecole' => TypeEcoleResource::collection($this->typeEcole),
            "cycles" => new CycleCollection($this->cycles),
            "email" => $this->email,
            "site_web" => $this->site_web,
            "description" => $this->description,
            "avantages" => $this->avantages,
            "path_logo" => url($this->path_logo),
            "path_baniere" => url($this->path_baniere),
            "images_ecole" => ImageEcoleResource::collection($this->imagesEcole),
            "location" => new LocationRessource($this->location),
            "demandes" => $listeDemandes->map(function ($demande) {
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
            "users" => $listeUsersAccepter->map(function ($demande) {
                if ($demande->demandeable_type === 'App\\Models\\Ecole') {
                    $user = User::find($demande->user_id);
                    return [
                        "initiateur" => 'ecole',
                        "response" => $demande->response,
                        "demande_id" => $demande->id,
                        "user_id" => $user->id,
                        "user_name" => $user->name,
                        "accept_at" => $demande->updated_at,
                    ];
                } elseif ($demande->demandeable_type === 'App\\Models\\User') {
                    $user = User::find($demande->user_id);
                    return [
                        "initiateur" => 'user',
                        "response" => $demande->response,
                        "demande_id" => $demande->id,
                        "user_id" => $user->id,
                        "user_name" => $user->name,
                        "accept_at" => $demande->updated_at,
                    ];
                }
            }),
            "created_at" => $this->created_at,
            "updated_at" => $this->updated_at,
        ];
    }
}
