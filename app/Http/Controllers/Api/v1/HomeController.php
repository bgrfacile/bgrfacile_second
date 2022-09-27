<?php

namespace App\Http\Controllers\Api\v1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function __invoke(Request $request): array
    {
        return [
            "success" => true,
            "message" => "welcome to BGRFACILE API",
            'data' => [
                "version" => "1.0",
                "version laravel" => app()->version(),
                'csrf_token'=>csrf_token(),
                "language" => app()->getLocale(),
                "api-documentation" => url("/") . "/api/documentation",
                "support" => env("APP_SUPPORT")
            ]
        ];
    }
}
