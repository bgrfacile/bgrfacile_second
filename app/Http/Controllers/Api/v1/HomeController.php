<?php

namespace App\Http\Controllers\Api\v1;

use Aeon\Calendar\Exception\InvalidArgumentException;
use Aeon\Calendar\Gregorian\DateTime;
use Aeon\Calendar\Gregorian\Day;
use Aeon\Calendar\Gregorian\Day\WeekDay;
use Aeon\Calendar\Gregorian\Days;
use Aeon\Calendar\Gregorian\GregorianCalendar;
use Aeon\Calendar\Gregorian\Quarter;
use Aeon\Calendar\Gregorian\TimePeriod;
use Aeon\Calendar\Gregorian\TimeZone;
use Aeon\Calendar\Gregorian\Year;
use Aeon\Calendar\Gregorian\YearMonths;
use Aeon\Calendar\Gregorian\Month;
use Aeon\Calendar\RelativeTimeUnit;
use Aeon\Calendar\TimeUnit;
use Aeon\Collection\DayValue;
use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;

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
                'csrf_token' => csrf_token(),
                "language" => app()->getLocale(),
                "api-documentation" => url("/") . "/api/documentation",
                "support" => env("APP_SUPPORT")
            ]
        ];
    }
}

