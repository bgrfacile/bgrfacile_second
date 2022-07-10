<?php

namespace App\Http\Controllers\Api\v2;

use App\Http\Controllers\Controller;
use App\Models\Cours;
use Illuminate\Http\Request;
use PhpParser\Node\Stmt\Switch_;

class CoursController extends Controller
{
    /**
     * @OA\Get(
     *  path="/cours",
     *  tags={"Cours"},
     *  summary="recuperation des cours avec une pagination",
     *  description="recuperation des cours avec une pagination",
     * parameters={
     *     {"name"="page", "in"="query", "description"="page", "required"=false, "type"="integer"},
     *    {"name"="limit", "in"="query", "description"="limit", "required"=false, "type"="integer"},
     * },
     *  @OA\Response(
     *      response=200,
     *      description="successful operation",
     *      @OA\MediaType(
     *      mediaType="application/json",
     *      @OA\Schema(
     *          schema="Cours",
     *          type="array",
     *          @OA\Items(ref="#/components/schemas/Cours")
     *      )
     *     )
     *  )
     * )
     */
    public function getCours(Request $request)
    {
        return Cours::paginate($request->input('per_page', 10));
        $errors = null;
        if ($request->has('cycle')) {
            // $cours = Cours::where('isActif', "1")
            //     ->whereHas('cycles', function ($query) use ($request) {
            //         $query->where('cycles.id', $request->cycle);
            //     })
            //     ->get()->reverse();
            $cours = [];
        } else {
            $cours = Cours::where('isActif', "1")->get()->reverse();
        }
        return response([
            'status' => 'success',
            'cours' => $cours,
            'errors' => $errors,
        ], 200);
    }
}
