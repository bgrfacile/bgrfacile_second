<?php

namespace App\Http\Controllers\Api\v2;

use App\Http\Controllers\Controller;
use App\Models\Cours;
use Illuminate\Http\Request;

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
    public function index(Request $request)
    {
        $cours = Cours::paginate($request->input('per_page', 10));
        return $cours;
    }

     /**
     * @OA\Get(
     *  path="/cours/{id}",
     *  tags={"Cours"},
     *  summary="recuperation des cours avec une pagination",
     *  description="recuperation des cours avec une pagination",
     * parameters={
     *     {"name"="page", "in"="params", "description"="id cours", "required"=false, "type"="integer"}
     * },
     *  @OA\Response(
     *      response=200,
     *      description="successful operation",
     *      @OA\MediaType(
     *      mediaType="application/json",
     *      @OA\Schema(
     *          schema="Cours",
     *          type="object",
     *          @OA\Items(ref="#/components/schemas/Cours")
     *      )
     *     )
     *  )
     * )
     */
    public function show(int $id)
    {
        $cours = Cours::find($id);
        return $cours;
    }

    public function update(Request $request, int $id)
    {
        $cours = Cours::find($id);
        $cours->update($request->all());
        return $cours;
    }

    public function destroy(int $id)
    {
        $cours = Cours::find($id);
        $cours->delete();
        return $cours;
    }

    public function store(Request $request)
    {
        $cours = Cours::create($request->all());
        return $cours;
    }
}
