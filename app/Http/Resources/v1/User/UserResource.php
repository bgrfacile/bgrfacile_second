<?php

namespace App\Http\Resources\v1\User;

use Carbon\Carbon;
use App\Models\User;
use App\Models\Ecole;
use Illuminate\Support\Facades\DB;
use App\Http\Resources\v1\Role\RoleCollection;
use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        $listeDemandes = DB::table("ecoles_has_users")
            ->where("response", "attente")
            ->where("user_id", $this->id)
            ->get();
        $listeEcolesAccepter = DB::table("ecoles_has_users")
            ->where("response", "accepter")
            ->where("user_id", $this->id)
            ->get();
        return [
            'id' => $this->id,
            'name' => $this->name,
            "slug" => $this->infoUser->slug ?? null,
            'email' => $this->email ?? null,
            "first_name" => $this->infoUser->first_name ?? null,
            "last_name" => $this->infoUser->last_name ?? null,
            "image_path" => $this->infoUser->image_path ?? null,
            "address" => $this->infoUser->address ?? null,
            "genre" => $this->infoUser->genre ?? null,
            "city" => $this->infoUser->city ?? null,
            "phone" => $this->infoUser->phone ?? null,
            "roles" => new RoleCollection($this->roles),
            "demandes" => $listeDemandes->map(function ($demande) {
                if ($demande->demandeable_type === 'App\\Models\\Ecole') {
                    $ecole = Ecole::find($demande->ecole_id);
                    return [
                        "initiateur" => 'ecole',
                        "response" => $demande->response,
                        "demande_id" => $demande->id,
                        "ecole_id" => $ecole->id,
                        "ecole_name" => $ecole->name,
                        "demande_at" => $demande->created_at,
                    ];
                } elseif ($demande->demandeable_type === 'App\\Models\\User') {
                    $ecole = Ecole::find($demande->ecole_id);
                    return [
                        "initiateur" => 'user',
                        "response" => $demande->response,
                        "demande_id" => $demande->id,
                        "ecole_id" => $ecole->id,
                        "ecole_name" => $ecole->name,
                        "demande_at" => $demande->created_at,
                    ];
                }
            }),
            "ecoles" => $listeEcolesAccepter->map(function ($demande) {
                if ($demande->demandeable_type === 'App\\Models\\Ecole') {
                    $ecole = Ecole::find($demande->ecole_id);
                    return [
                        "initiateur" => 'ecole',
                        "response" => $demande->response,
                        "demande_id" => $demande->id,
                        "ecole_id" => $ecole->id,
                        "ecole_name" => $ecole->name,
                        "accept_at" => $demande->updated_at,
                    ];
                } elseif ($demande->demandeable_type === 'App\\Models\\User') {
                    $ecole = Ecole::find($demande->ecole_id);
                    return [
                        "initiateur" => 'ecole',
                        "response" => $demande->response,
                        "demande_id" => $demande->id,
                        "ecole_id" => $ecole->id,
                        "ecole_name" => $ecole->name,
                        "accept_at" => $demande->updated_at,
                    ];
                }
            }),
            "updated_at" => $this->updated_at,
            'created_at' => $this->created_at,
        ];
    }
}
