<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Support\Facades\Auth;
use Validator;
use Log;

class AuthController extends Controller
{
    public $successStatus = 200;
    /**
     * login api
     *
     * @return \Illuminate\Http\Response
     */

    public function login()
    {
        Log::info('api/login');
        if (

        Auth::attempt([
                'email' => request('email'),
                'password' => request('password')
            ])

    )
        {
            Log::info('login');
            $user = Auth::user();
            $success['b_token'] = "Bearer ".$user->createToken('s91209d@skl3($dfjksdfjk')->accessToken;
            $success['name'] = $user->name;
            $success['user_id'] = $user->id;
            return response()->json(
                ['success' => $success],
                $this->successStatus
        );
        } else {
            return response()->json(['error' => 'Unauthorised'], 401);
        }
    }
    /**
     * Register api
     *
     * @return \Illuminate\Http\Response
     */
    public function logout(Request $request) {
        Auth::logout();
        return response()->json(["success"=>true], 200);
    }

    /**
     * Register api
     *
     * @return \Illuminate\Http\Response
     */

    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'email' => 'required|email',
            'password' => 'required',
            'c_password' => 'required|same:password'
        ]);
        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 401);
        }
        $input = $request->all();
        $input['password'] = bcrypt($input['password']);
        $user = User::create($input);
        $success['token'] = $user->createToken('s91209d@skl3($dfjksdfjk')->accessToken;
        $success['name'] = $user->name;
        return response()->json(['success' => $success], $this->successStatus);
    }
    /**
     * details api
     *
     * @return \Illuminate\Http\Response
     */

    public function profile()
    {
        Log::info('api/profile');
        $user = Auth::user();
        return response()->json(['success' => $user], $this->successStatus);
    }

    public function loggedInInfo()
    {
        Log::info('api/loggedInInfo');
        if(Auth::check()){
            $user = Auth::user();
            return response()->json(['success' => $user], $this->successStatus);
        }
        else{
            return response()->json(['success' => null], 401);
        }
    }
}
