<?php

use Aeon\Calendar\Exception\InvalidArgumentException;
use Aeon\Calendar\Gregorian\DateTime;
use Aeon\Calendar\Gregorian\Day;
use Aeon\Calendar\Gregorian\Day\WeekDay;
use Aeon\Calendar\Gregorian\GregorianCalendar;
use Aeon\Calendar\Gregorian\MonthDays;
use Carbon\Carbon;
use Illuminate\Support\Str;
use Illuminate\Http\Request;

/**
 * @param string $date
 * @return string
 */
function formaterDate(string $date): string
{
    return Carbon::parse($date)->format('d M. Y');
}

/**
 * @param string $date
 * @return string
 */
function formaterDateWithTime(string $date): string
{
    return Carbon::parse($date)->format('d M. Y H:i');
}


/**
 * @param Request $request
 * @param string $key_name
 * @param string $name_directory_storage
 * @return string
 */
function saveFileToStorageDirectory(Request $request, string $key_name, string $name_directory_storage = ""): string
{
    $imageName = time() . '_' . trim(str_replace(" ", "_", $request->file($key_name)->getClientOriginalName()));
    return  "storage" . DIRECTORY_SEPARATOR . $request->file($key_name)->storeAs($name_directory_storage, $imageName, 'public');
}

/**
 * @throws InvalidArgumentException
 */
function createCalendar(?string $t_start, ?string $t_end, ?string $t_interval, string|array|null $t_pause): array
{
    $calendarGregorian = GregorianCalendar::UTC();
    $timeCalendar = DateTime::fromString($calendarGregorian->now());
    return $timeCalendar->year()->months()->map(function ($month) use ($t_start, $t_end, $t_interval, $t_pause) {
        return [
            'nameMonth' => $month->name(),
            "hoursDay" => collect(hoursRanges($t_start, $t_end, $t_interval))->map(function ($hour, $key) use ($t_pause) {
                return [
                    "hour" => $hour,
                    "isPause" => is_array($t_pause) ? in_array($hour, $t_pause) : $t_pause === $hour,
                ];
            })->all(),
            'weeks' => allWeeksInMonth($month->days()),
            'nameDays' => [
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday',
                'Saturday',
                'Sunday',
            ],
        ];
    });
}
function allWeeksInMonth(MonthDays $days): array
{
    $allNameDay = [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
    ];
    $weeks = [];
    $week = [];
    $days->map(function (Day $day) use (&$weeks, &$week, $allNameDay, $days) {
        $week[] = [
            "name_day" => $day->weekDay()->name(),
            "month_day" => $day->month()->name(),
            "number_day" => $day->number(),
            "year_day" => $day->year()->toString(),
            "isWeekend" => $day->isWeekend(),
            "date" => $day->toString(),
            "hoursOfDay" => collect(hoursRanges(null, null, null))->map(function ($hour, $key) {
                return [
                    "hour" => $hour,
                    "isPause" => false,
                    "course" => null,
                ];
            })->all(),
        ];
        if ($day->weekDay()->isEqualTo(WeekDay::sunday())) {
            if (count($week) < 7) {
                $week = array_merge($week, array_fill(0, 7 - count($week), [
                    "name_day" => " XXX ",
                    "month_day" => "",
                    "number_day" => "",
                    "year_day" => "",
                    "isWeekend" => "",
                    "date" => "",
                    "hoursOfDay" => [],
                ]));
            }
            // order by name day
            $week = collect($week)->sortBy(function ($item) use ($allNameDay) {
                return array_search($item['name_day'], $allNameDay);
            })->all();
            $weeks[] = $week;
            $week = [];
        }
    });

    /*$colletWeeks = collect($weeks);
    $colletWeeks = $colletWeeks->map(function ($week) {
        $week = collect($week);
        if ($week->count() < 7) {
            for ($i = 0; $i < 7 - $week->count(); $i++) {
                $week->add([
                    "name_day" => " ",
                    "month_day" => "",
                    "number_day" => "",
                    "year_day" => "",
                    "isWeekend" => "",
                    "date" => "",
                    "intervenants" => [],
                ]);
            }
        }
        return $week->all();
    });
    return $colletWeeks->all();*/
    return $weeks;
}

/**
 * @param string $start
 * @param string $end
 * @param string $interval
 * @return array
 */
function hoursRanges(?string $start, ?string $end, ?string $interval): array
{
    if (empty($start)) {
        $start = '07:00';
    }
    if (empty($end)) {
        $end = '17:00';
    }
    if (empty($interval)) {
        $interval = '+1 hour'; // ou '+1 hour +30 minutes'
    }
    $tStart = strtotime($start);
    $tEnd = strtotime($end);
    $tNow = $tStart;
    $hours = [];
    while ($tNow <= $tEnd) {
        $hours[] = date('H:i', $tNow);
        $tNow = strtotime($interval, $tNow);
    }
    return $hours;
}



