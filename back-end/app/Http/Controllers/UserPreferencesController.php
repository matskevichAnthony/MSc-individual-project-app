<?php

namespace App\Http\Controllers;

use App\Models\UserPreferences;
use Illuminate\Http\Request;
use Dingo\Api\Routing\Helpers;
use Validator;

class UserPreferencesController extends Controller
{
    use Helpers;

    public function index() {
        $currentUser = $this->auth()->user();

        return UserPreferences::with('event_type')->where('user_id', $currentUser->user_id)->get();
    }

    public function edit(Request $request) {
        $currentUser = $this->auth()->user();

        return UserPreferences::updateOrSave($request->event_type, $currentUser->user_id);
    }
}