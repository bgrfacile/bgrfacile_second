<?php

namespace App\Http\Controllers\Api\v1;

use Aeon\Calendar\Exception\InvalidArgumentException;
use App\Http\Controllers\Controller;
use App\Http\Resources\v1\Calendar\CalendarCollection;
use App\Http\Resources\v1\Calendar\CalendarResource;
use App\Models\Calendar;
use \App\Services\Calendar\CalendarCreator;
use Illuminate\Http\Request;

class CalendarController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return CalendarCollection
     */
    public function index(Request $request): CalendarCollection
    {
        // return new CalendarCollection(Calendar::all());

        $queryItems = $request->query();
        if (count($queryItems) == 0) {
            return new CalendarCollection(Calendar::all());
        } else {
            $calendars = null;
            $queryCollect = collect($queryItems);
            if ($queryCollect->has('ecole_id') && $queryCollect['ecole_id'] != null) {
                $calendars = Calendar::where('ecole_id', $queryCollect['ecole_id'])->get();
                if (count($calendars) === 0) {
                    return abort(404);
                }else{
                    return new CalendarCollection($calendars);
                }
            }

        }
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse
     * @throws InvalidArgumentException
     */
    public function store(Request $request)
    {
        $request->validate([
            'ecole_id' => 'required|integer',
            't_start' => 'string',
            't_end' => 'string',
            't_interval' => 'string',
            //'t_pause' => 'string|array',
        ]);
        $myCalendar = new CalendarCreator($request);
        $calendar = Calendar::create([
            'ecole_id' => $request->ecole_id,
            'calendars_json' => $myCalendar->create(),
        ]);
        return response()->json([
            'success' => true,
            'message' => 'calendar created successfully',
            'data' => new CalendarResource($calendar),
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param Calendar $calendar
     * @return \Illuminate\Http\JsonResponse
     */
    public function show(Calendar $calendar): \Illuminate\Http\JsonResponse
    {
        return response()->json([
            'success' => true,
            'message' => 'calendar show successfully',
            'data' => new CalendarResource($calendar),
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param Calendar $calendar
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(Request $request, Calendar $calendar): \Illuminate\Http\JsonResponse
    {
        $request->validate([
            'ecole_id' => 'required|integer',
            'calendars_json' => 'required|array',
        ]);
        $calendar->update([
            'ecole_id' => $request->ecole_id,
            'calendars_json' => $request->calendars_json,
        ]);
        return response()->json([
            'success' => true,
            'message' => 'calendar updated successfully',
            'data' => new CalendarResource($calendar),
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Calendar $calendar
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy(Calendar $calendar): \Illuminate\Http\JsonResponse
    {
        $calendar->delete();
        return response()->json([
            'success' => true,
            'message' => 'calendar deleted successfully',
            'data' => new CalendarResource($calendar),
        ]);
    }

    public function addEvent(Request $request)
    {
        $request->validate([
            'calendar_id' => 'required|integer',
            'event' => 'required|array',
        ]);
        $calendar = Calendar::findOrfail($request->calendar_id);

        $myCalendar = $calendar->calendars_json;
        $newCalendar = collect($myCalendar)->map(function ($item) use ($request) {
            if ($item['month_name'] === $request->month_name) {
                $weeks = collect($item['weeks'])->map(function ($week) use ($request) {
                    return collect($week)->map(function ($day) use ($request) {
                        if ($day['number_day'] === $request->number_day) {
                            $hours = collect($day['hours'])->map(function ($hour) use ($request) {
                                if ($hour['hour'] === $request->hour) {
                                    $event = collect($hour['event'])->replace($request->event)->all();
                                    return collect($hour)->replace(['event' => $event])->all();
                                }
                                return $hour;
                            })->all();
                            return collect($day)->replace(['hours' => $hours])->all();
                        }
                        return $day;
                    })->all();
                })->all();
                return collect($item)->replace(['weeks' => $weeks])->all();
            }
            return $item;
        })->all();
        /*$month = (collect($myCalendar)->filter(function ($item) {
            return $item['month_name'] === 'January';
        })->first())['days_in_month'];
        $day = collect($month)->filter(function ($item) {
            return $item['number_day'] === 1;
        })->first();
        $hour = collect($day['hours'])->filter(function ($item) {
            return $item['hour'] === '08:00';
        })->first();
        $event = collect($hour['event'])->toArray();
        $event['name'] = $request->event['name'];
        $event['teacher'] = $request->event['teacher'];
        $event['room'] = $request->event['room'];
        $event['color'] = $request->event['color'];
//        $hour = collect($hour['event'])->replace($event);
        $hour['event'] = $event;
//        dd($hour);
        $dayChange = collect($day['hours'])->map(function ($item) use ($hour) {
            if ($item['hour'] === '08:00') {
                return $hour;
            }
            return $item;
        });
        $monthChange = collect($month)->map(function ($item) use ($dayChange) {
            if ($item['number_day'] === 1) {
                $item['hours'] = $dayChange;
                return $item;
            }
            return $item;
        });
        $myCalendarChange = collect($myCalendar)->map(function ($item) use ($monthChange) {
            if ($item['month_name'] === 'January') {
                $item['days_in_month'] = $monthChange;
                return $item;
            }
            return $item;
        });*/

        $calendar->update([
            'calendars_json' => $newCalendar,
        ]);
        return response()->json([
            'success' => true,
            'message' => 'event added successfully',
            'data' => new CalendarResource($calendar),
        ]);
    }
}
