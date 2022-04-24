<?php

namespace App\Http\Controllers\Api;

use Exception;
use App\Models\User;
use App\Models\Cours;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\Http\Resources\Cours\CoursResource;
use Illuminate\Http\Resources\Json\JsonResource;

class CoursController extends Controller
{
    public function randomCours(): JsonResource
    {
        $cours = Cours::inRandomOrder()->first();
        return new CoursResource($cours);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $cours = Cours::where('isActif', "1")->get()->reverse();
        return CoursResource::collection($cours);
    }
    public function getCoursByCycle($idCycle)
    {
        $cours = Cours::where('isActif', "1")
            ->whereHas('cycles', function ($query) use ($idCycle) {
                $query->where('cycles.id', $idCycle);
            })
            ->get()->reverse();
        return CoursResource::collection($cours);
    }
    public function getCoursByLevel($idCycle, $idLevel)
    {
        $cours = Cours::where('isActif', "1")
            ->whereHas('levels', function ($query) use ($idLevel) {
                $query->where('levels.id', $idLevel);
            })
            ->whereHas('cycles', function ($query) use ($idCycle) {
                $query->where('cycles.id', $idCycle);
            })
            ->get()->reverse();
        return CoursResource::collection($cours);
    }
    public function getCoursByMatiere($idCycle, $idLevel, $idMatiere)
    {
        $cours = Cours::where('isActif', "1")
            ->whereHas('cycles', function ($query) use ($idCycle) {
                $query->where('cycles.id', $idCycle);
            })
            ->whereHas('levels', function ($query) use ($idLevel) {
                $query->where('levels.id', $idLevel);
            })
            ->whereHas('matieres', function ($query) use ($idMatiere) {
                $query->where('matieres.id', $idMatiere);
            })
            ->get()->reverse();

        return CoursResource::collection($cours);
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string',
            'description' => 'string|min:5',
            'cycle_id' => 'required',
            'level_id' => 'required',
            'matiere_id' => 'required',
            'content' => 'required',
        ]);
        switch ($request->type_content) {
            case 'PDF':
                $cours = $this->sauveCoursPDF($request, Auth::user());
                break;
            case 'TEXTE':
                $cours = $this->sauveCoursTEXTE($request, Auth::user());
                break;
            case 'IMAGE':
                // code...
                break;
            case 'VIDEO':
                // code...
                break;
            case 'AUDIO':
                // code...
                break;
            default:
                throw new Exception("Une Erreur dans la request", 1);
                break;
        }
        return response([
            'message' => 'le cours a été créé avec succès',
            'cours' => new CoursResource($cours),
        ], 200);
    }

    private function sauveCoursPDF(Request $request, User $user)
    {
        $coverImage = null;
        if ($request->hasFile('coverImage')) {
            $imageName = time() . '_' . $request->file('coverImage')->getClientOriginalName();
            $coverImage = "/storage/" . $request->file('coverImage')->storeAs('images_contenus', $imageName, 'public');
        }
        $cours = $user->cours()->create([
            'title' => $request->title,
            'slug' => Str::slug($request->title),
            'description' => $request->description,
            'coverImage' => $coverImage,
            'isActif' => $request->isActif ? "1" : "0",
        ]);
        $content = null;
        if ($request->hasFile('content')) {
            $nameContent = time() . '_' . $request->file('content')->getClientOriginalName();
            $content = "/storage/" . $request->file('content')->storeAs('contenus_pdf', $nameContent, 'public');
        }
        $cours->contents()->create([
            'content' => $content,
            'type_content' => $request->type_content,
        ]);
        $cours->cycles()->attach($request->cycle_id);
        $cours->levels()->attach($request->level_id);
        $cours->matieres()->attach($request->matiere_id);
        return $cours;
    }
    private function sauveCoursTEXTE(Request $request, User $user)
    {
        $coverImage = null;
        if ($request->hasFile('coverImage')) {
            $imageName = time() . '_' . $request->file('coverImage')->getClientOriginalName();
            $coverImage = "/storage/" . $request->file('coverImage')->storeAs('images_contenus', $imageName, 'public');
        }
        $cours = $user->cours()->create([
            'title' => $request->title,
            'slug' => Str::slug($request->title),
            'description' => $request->description,
            'coverImage' => $coverImage,
            'isActif' => $request->isActif ? "1" : "0",
        ]);
        $cours->contents()->create([
            'content' => $request->content,
            'type_content' => $request->type_content,
        ]);
        $cours->cycles()->attach($request->cycle_id);
        $cours->levels()->attach($request->level_id);
        $cours->matieres()->attach($request->matiere_id);
        return $cours;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $cours = Cours::findOrFail($id);
        return new CoursResource($cours);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $request->validate([
            'title' => 'required|string',
            'description' => 'nullable|string|min:5',
            'cycle_id' => 'required',
            'level_id' => 'required',
            'matiere_id' => 'required',
            // 'content' => 'required',
        ]);
        $cours = Cours::findOrFail($id);
        $coverImage = null;
        if ($request->hasFile('coverImage')) {
            // if ($cours->coverImage != null) {
            //     unlink(public_path($cours->coverImage));
            // }
            $imageName = time() . '_' . Str::slug($request->file('coverImage')->getClientOriginalName());
            $coverImage = "/storage/" . $request->file('coverImage')->storeAs('images_contenus', $imageName, 'public');
        }
        switch ($request->type_content) {
            case 'PDF':
                $content = null;
                // $pathContentOfDb = $cours->contents[0]->content;
                if ($request->hasFile('content')) {
                    // if ($pathContentOfDb != null) {
                    //     unlink(public_path($pathContentOfDb));
                    // }
                    $nameContent = time() . '_' . Str::slug($request->file('content')->getClientOriginalName());
                    $content = "/storage/" . $request->file('content')->storeAs('contenus_pdf', $nameContent, 'public');
                }
                $cours->title = $request->title;
                $cours->slug = Str::slug($request->title);
                $cours->description = $request->description;
                $cours->coverImage = $coverImage != null ? $coverImage : $cours->coverImage;
                $cours->contents()->update([
                    'content' => $content,
                ]);
                break;
            case 'TEXTE':
                $cours->title = $request->title;
                $cours->slug = Str::slug($request->title);
                $cours->description = $request->description;
                $cours->coverImage = $coverImage != null ? $coverImage : $cours->coverImage;
                $cours->contents()->update([
                    'content' => $request->content,
                ]);
                break;
            case 'IMAGE':
                // code...
                break;
            case 'VIDEO':
                // code...
                break;
            case 'AUDIO':
                // code...
                break;
            default:
                throw new Exception("Une Erreur dans la request", 1);
                break;
        }
        $cours->save();
        return response([
            'message' => 'cours mis à jour avec succès',
            'cours' => new CoursResource($cours),
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $cours = Cours::findOrFail($id);
        $cours->delete();
        return response([
            'message' => 'cours deleted successfully',
            'cours' => new CoursResource($cours),
        ], 200);
    }

    public function CoursToUser($userId = null)
    {
        if ($userId != null && is_int($userId)) {
            $user = User::findOrFail($userId);
        } else {
            $user = User::findOrFail(Auth::user()->id);
        }
        return CoursResource::collection($user->cours->reverse());
    }


    public function updateVisibilityCours($courId, Request $request)
    {
        $request->validate([
            'isActif' => 'required|boolean',
        ]);
        // $user = User::find($request->user_id);
        // $cours = $user->cours()->find($courId);
        $cours = Cours::findOrFail($courId);
        $cours->isActif = $request->isActif;
        $cours->save();
        return response([
            'message' => 'cours mis à jour avec succès',
            'cours' => new CoursResource($cours),
        ], 200);
    }
}
