<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

use App\Models\User;
use Illuminate\Support\Facades\Hash;

Route::post('/jwt/register', function (Request $request) {
    $request->validate([
        'username' => 'required|string',
        'email' => 'required|email|unique:users,email',
        'password' => 'required|string',
    ]);

    $user = User::create([
        'name' => $request->username,
        'email' => $request->email,
        'password' => Hash::make($request->password),
    ]);

    $token = 'mock-token-' . $user->id;

    return response()->json([
        'accessToken' => $token,
        'refreshToken' => $token,
        'userData' => [
            'id' => $user->id,
            'fullName' => $user->name,
            'username' => $user->name,
            'avatar' => null,
            'email' => $user->email,
            'role' => 'admin',
            'ability' => [
                [
                    'action' => 'manage',
                    'subject' => 'all',
                ],
            ],
            'extras' => [
                'eCommerceCartItemsCount' => 0,
            ],
        ],
    ]);
});

Route::post('/jwt/login', function (Request $request) {
    $request->validate([
        'email' => 'required|email',
        'password' => 'required|string',
    ]);

    $user = User::where('email', $request->email)->first();

    if (!$user || !Hash::check($request->password, $user->password)) {
        return response()->json([
            'error' => [
                'email' => ['Invalid email or password.'],
            ],
        ], 422);
    }

    $token = 'mock-token-' . $user->id;

    return response()->json([
        'accessToken' => $token,
        'refreshToken' => $token,
        'userData' => [
            'id' => $user->id,
            'fullName' => $user->name,
            'username' => $user->name,
            'avatar' => null,
            'email' => $user->email,
            'role' => 'admin',
            'ability' => [
                [
                    'action' => 'manage',
                    'subject' => 'all',
                ],
            ],
            'extras' => [
                'eCommerceCartItemsCount' => 0,
            ],
        ],
    ]);
});
