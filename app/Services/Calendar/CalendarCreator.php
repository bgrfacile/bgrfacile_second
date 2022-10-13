<?php

namespace App\Services\Calendar;

use Aeon\Calendar\Gregorian\Day;
use Aeon\Calendar\Gregorian\Day\WeekDay;
use Aeon\Calendar\Gregorian\MonthDays;
use \Illuminate\Support\Collection;
use Aeon\Calendar\Gregorian\GregorianCalendar;
use Aeon\Calendar\Gregorian\Month;
use Aeon\Calendar\Gregorian\YearMonths;
use Illuminate\Http\Request;

class CalendarCreator
{

    private string $t_start;
    private string $t_end;
    private string $t_interval;
    private string|array|null $t_pause;
    private ?string $name;
    private ?string $teacher;
    private ?string $room;
    private ?string $color;
    const DAYS = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
    ];

    public function __construct(
        Request $request,
    )
    {
        $this->t_start = $request->t_start ?? "08:00";
        $this->t_end = $request->t_end ?? "18:00";
        $this->t_interval = $request->t_interval ?? "+1 hour";
        $this->t_pause = $request->t_pause ?? null;
    }

    /**
     * @return string
     */
    public function getTStart(): string
    {
        return $this->t_start;
    }

    /**
     * @param string $t_start
     */
    public function setTStart(string $t_start): void
    {
        $this->t_start = $t_start;
    }

    /**
     * @return string
     */
    public function getTEnd(): string
    {
        return $this->t_end;
    }

    /**
     * @param string $t_end
     */
    public function setTEnd(string $t_end): void
    {
        $this->t_end = $t_end;
    }

    /**
     * @return string
     */
    public function getTInterval(): string
    {
        return $this->t_interval;
    }

    /**
     * @param string $t_interval
     */
    public function setTInterval(string $t_interval): void
    {
        $this->t_interval = $t_interval;
    }

    /**
     * @return array|string|null
     */
    public function getTPause(): array|string|null
    {
        return $this->t_pause;
    }

    /**
     * @param array|string|null $t_pause
     */
    public function setTPause(array|string|null $t_pause): void
    {
        $this->t_pause = $t_pause;
    }

    /**
     * @return string|null
     */
    public function getName(): ?string
    {
        return $this->name;
    }

    /**
     * @param string|null $name
     */
    public function setName(?string $name): void
    {
        $this->name = $name;
    }

    /**
     * @return string|null
     */
    public function getTeacher(): ?string
    {
        return $this->teacher;
    }

    /**
     * @param string|null $teacher
     */
    public function setTeacher(?string $teacher): void
    {
        $this->teacher = $teacher;
    }

    /**
     * @return string|null
     */
    public function getRoom(): ?string
    {
        return $this->room;
    }

    /**
     * @param string|null $room
     */
    public function setRoom(?string $room): void
    {
        $this->room = $room;
    }

    /**
     * @return string|null
     */
    public function getColor(): ?string
    {
        return $this->color;
    }

    /**
     * @param string|null $color
     */
    public function setColor(?string $color): void
    {
        $this->color = $color;
    }


// *********************************************************************************************************************
// *********************************************************************************************************************
    public function create(): array
    {
        $calendarGregorian = (GregorianCalendar::UTC())->now();
        return $calendarGregorian->year()->months()->map(function (Month $month) {
            return $this->calendarResource($month);
        });
    }

    private function calendarResource(Month $month): array
    {
        return [
            'month_name' => $month->name(),
            'hours' => $this->hourResource(false),
            'days' => self::DAYS,
            'weeks' => $this->weeksResource($month->days()),
//            'days_in_month' => $this->allDaysResource($month->days()),
        ];
    }

    public function weeksResource(MonthDays $days): array
    {
        $allNameDay = self::DAYS;
        $weeks = [];
        $week = [];
        $days->map(function (Day $day) use ($allNameDay, &$week, &$weeks) {
            $week[] = $this->dayResource($day);
            if ($day->weekDay()->isEqualTo(WeekDay::sunday())) {
                if (count($week) < 7) {
                    $week = array_merge(
                        $week,
                        array_fill(0, 7 - count($week), $this->dayResource(null))
                    );
                }
                $week = collect($week)->sortBy(function ($item) use ($allNameDay) {
                    return array_search($item['day_name'], $allNameDay);
                })->all();
                $weeks[] = $week;
                $week = [];
            }
        });
        return $weeks;
    }

    private function dayResource(?Day $day): array
    {
        return $day != null ? [
            "day_name" => $day->weekDay()->name(),
            "month_name" => $day->month()->name(),
            "number_day" => $day->number(),
            "year" => $day->year()->toString(),
            "date" => $day->toString(),
            "is_weekend" => $day->isWeekend(),
            "hours" => $this->hourResource(true),
        ]
            : [
                "day_name" => "  ",
                "month_name" => "  ",
                "number_day" => "  ",
                "year" => "  ",
                "date" => "  ",
                "is_weekend" => false,
                "hours" => $this->hourResource(true) ?? [],
            ];
    }

    private function hourResource(bool $withCours): array
    {
        return $this->hoursRangesCollection()->map(function ($hour, $key) use ($withCours) {
            return !$withCours ? [
                "hour" => $hour,
                "is_pause" => is_array($this->t_pause) ? in_array($hour, $this->t_pause) : $this->t_pause === $hour,
            ] :
                [
                    "hour" => $hour,
                    "is_pause" => is_array($this->t_pause) ? in_array($hour, $this->t_pause) : $this->t_pause === $hour,
                    "event" => $this->coursResource() ?? null,
                ];
        })->all();
    }

    private function coursResource(): array
    {
        return [
            "name" => $this->name ?? "... ",
            "teacher" => $this->teacher ?? "",
            "room" => $this->room ?? " ",
            "color" => $this->color ?? null,
        ];
    }

    // store coursResource
    private function storeCoursResource(
        string $name,
        string $teacher,
        string $room,
        string $color,
        string $date,
        string $hour
    ): void
    {
    }

    private function allDaysResource(MonthDays $days): array
    {
        return collect($days->map(function (Day $day) {
            return $this->dayResource($day);
        }))->all();
    }

    private function hoursRanges(): array
    {
        $start = strtotime($this->t_start);
        $end = strtotime($this->t_end);
        $t = $start;
        $hours = [];
        while ($t <= $end) {
            $hours[] = date('H:i', $t);
            $t = strtotime($this->t_interval, $t);
        }
        return $hours;
    }

    private function hoursRangesCollection(): Collection
    {
        return collect($this->hoursRanges());
    }


}
