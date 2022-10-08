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

    /**
     * @throws InvalidArgumentException
     */
    public function calendar(Request $request): \Illuminate\Http\JsonResponse
    {
        $calendarGregorian = GregorianCalendar::UTC();
        $timeCalendar = DateTime::fromString($calendarGregorian->now());
        $currentCalendar = $timeCalendar->year()->months()->map(function ($month) {
            return [
                'nameMonth' => $month->name(),
                'weeksMonth' => $this->allWeeksInMonth($month->days()),
                'daysMonth' => $this->allDayInMonth($month->days()),
                "hoursDay" => collect($this->hoursRanges())->map(function ($hour, $key) {
                    return [
                        "hour" => $hour,
                        "isPause" => false,
                    ];
                }),
            ];
        });
        return response()->json([
            'data' => $currentCalendar
        ], 200);
    }

    function allDayInMonth($days)
    {
        return $days->map(function (Day $day) {
            return [
                "name_day" => $day->weekDay()->name(),
                "month_day" => $day->month()->name(),
                "number_day" => $day->number(),
                "year_day" => $day->year()->toString(),
                "isWeekend" => $day->isWeekend(),
                "date" => $day->toString(),
            ];
        });
    }

    function allWeeksInMonth($days): array
    {
        $weeks = [];
        $week = [];
        $days->map(function (Day $day) use (&$weeks, &$week) {
            $week[] = [
                "name_day" => $day->weekDay()->name(),
                "month_day" => $day->month()->name(),
                "number_day" => $day->number(),
                "year_day" => $day->year()->toString(),
                "isWeekend" => $day->isWeekend(),
                "date" => $day->toString(),
            ];
            if ($day->weekDay()->isEqualTo(WeekDay::sunday())) {
                $weeks[] = $week;
                $week = [];
            }
        });
        return $weeks;
    }

    /**
     * @param string $start
     * @param string $end
     * @param string $interval
     * @return array
     */
    function hoursRanges(string $start = '07:00', string $end = '18:00', string $interval = '+1 hour'): array
    {
        $tStart = strtotime($start);
        $tEnd = strtotime($end);
        $tNow = $tStart;
        $hours = [];
        while ($tNow <= $tEnd) {
            $hours[] = date('H:i', $tNow);
            // $interval = '+1 hour +30 minutes'
            $tNow = strtotime($interval, $tNow);
        }
        return $hours;
    }
}

