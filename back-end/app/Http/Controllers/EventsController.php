<?php

namespace App\Http\Controllers;

use App\Models\Events;
use App\Models\UserAttends;
use Illuminate\Http\Request;
use Dingo\Api\Routing\Helpers;

class EventsController extends Controller
{
    use Helpers;
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $currentUser = $this->auth()->user();
        if ($request->managed) {
            if (!$currentUser) {
                return response()->json(['data' =>'Forbidden'], 403);
            }

            return Events::with(['user', 'event_type'])->where('owner_id', $currentUser->user_id)->get();
        }

        if ($request->attends) {
            if (!$currentUser) {
                return response()->json(['data' =>'Forbidden'], 403);
            }
            
            $ids = [];

            $attends = UserAttends::where('user_id', $currentUser->user_id)->get();

            foreach ($attends as $attend) {
                $ids[] = $attend['event_id'];
            }

            return Events::with(['user', 'event_type'])->whereIn('id', $ids)->get();
            
        }

        return Events::where('event_date', '>', \DB::raw('CURDATE()'))
                        ->with(['user', 'event_type'])
                        ->get();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->validate($request, [
            'title' => 'required',
            'event_type_id' => 'required',
            'description' => 'required',
            'geo_lat' => 'required',
            'geo_lng' => 'required',
            'address' => 'required',
            'place' => 'required',
            'event_date' => 'required',
            'price' => 'required',
        ]);

        $currentUser = $this->auth()->user()->user_id;
        $data = $request->all();
        $data['owner_id'] = $currentUser;

        $event = Events::create($data);

        return $event;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Events  $events
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        // dd(Events::with('user')->findOrFail($id));
        $event = Events::with(['user', 'event_type', 'user_attends'])->findOrFail($id);
        return $event;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Events  $events
     * @return \Illuminate\Http\Response
     */
    public function edit(Request $request, $id)
    {
        $this->validate($request, [
            'title' => 'required',
        ]);
        $currentUser = $this->auth()->user()->user_id;
        $data = $request->all();
        
        $event = Events::findOrFail($id);
        if ($event->owner_id !== $currentUser) {
            return response()->json('Can not edit', 403);
        }
        unset($data['owner_id']);

        $event = $event->fill($data);
        $event->save();

        return $event;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Events  $events
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $currentUser = $this->auth()->user()->user_id;

        $event = Events::findOrFail($id);
        if ($event->owner_id === $currentUser) {
            $event->delete();

            return 'Deleted';
        } else {
            return response()->json('Can not delete', 403);
        }
    }

    public function join($id)
    {
        $currentUser = $this->auth()->user();
        if (!$currentUser) {
            return response()->json(['data' =>'Forbidden'], 403);
        }

        $event = Events::find($id);
        if (!$event) {
            return response()->json(['data' =>'Not found'], 404);
        }

        $data = [
            'user_id' => $currentUser->user_id,
            'event_id' => $id,
        ];

        $userAttends = UserAttends::create($data);

        return $this->show($id);
    }

    public function leave($id) {
        $currentUser = $this->auth()->user();
        if (!$currentUser) {
            return response()->json(['data' =>'Forbidden'], 403);
        }

        $event = Events::find($id);
        
        if (!$event) {
            return response()->json(['data' =>'Not found'], 404);
        }
        $userAttends = UserAttends::where('user_id', $currentUser->user_id)->where('event_id', $event->id)->first();
        $userAttends->delete();

        return 'Deleted';

    }
}
