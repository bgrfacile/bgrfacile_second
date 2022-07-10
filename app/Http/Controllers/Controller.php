<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

/**
 * @OA\Info(
 *  version="1.0.0",
 *  title="Api public de l'application",
 *  description="cette documentation permet de décrire l'api public de l'application bgrfacile sur l'ensemble des ressources disponibles",
 *      @OA\Contact(
 *          email="benaja.bendo02@gmail.com"
 *      ),
 * )
 * @OA\Server(
 *    url=L5_SWAGGER_CONST_HOST,
 *   description="server api v2"
 * )
 */
class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;
}
