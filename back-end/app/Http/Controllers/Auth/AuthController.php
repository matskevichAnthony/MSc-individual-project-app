<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Models\UserPreferences;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Validator;
use Specialtactics\L5Api\Http\Controllers\Features\JWTAuthenticationTrait;
use Symfony\Component\HttpKernel\Exception\UnauthorizedHttpException;

class AuthController extends Controller
{
    use JWTAuthenticationTrait;

    public function getUser() {
        return $this->auth()->user();
    }

    public function editUser(Request $request) {
        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'name' => 'required',
            'password' => 'confirmed',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        $currentUser = $this->auth()->user();
        $data = $request->all();

        unset($data['password_confirmation']);
        
        if (is_null($data['password'])) {
            unset($data['password']);
        }

        $currentUser = $currentUser->fill($data);
        $currentUser->save();

        return $currentUser;
    }

    public function login(Request $request) {
        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required|string|min:6',
        ]);
        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }
        
        $token = auth()->attempt($validator->validated());
        
        if (!$token) {
            return response()->json('Login incorrect', 422);
        }

        return $this->respondWithToken($token);
    }

    public function register(Request $request)
    {
        $this->validate($request, [
            'name' => 'required|string|min:2',
            'email' => 'required|string|email|unique:users',
            'password' => 'required|string|confirmed|min:6',
        ]);

        $user = User::create(array_merge(
            [
                'name' => $request->name,
                'email' => $request->email,
            ],
            ['password' => bcrypt($request->password)]
        ));

        if (!is_null($request->event_type)) {
            UserPreferences::updateOrSave($request->event_type, $user['user_id']);
        }

        return $user;
    }
}
