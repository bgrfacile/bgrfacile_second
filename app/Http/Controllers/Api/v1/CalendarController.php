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
    public function index(): CalendarCollection
    {
        return new CalendarCollection(Calendar::all());
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
        $calendar = Calendar::create([
            'ecole_id' => $request->ecole_id,
            'calendars_json' => (new CalendarCreator($request))->create(),
        ]);
        return response()->json([
            'success' => true,
            'message' => 'calendar created successfully',
            'data' => $calendar,
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

}
