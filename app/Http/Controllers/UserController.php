<?php

namespace App\Http\Controllers;

use App\User;
use Validator;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{

    public function register(Request $request)
    {
        $validator=Validator::make($request->all(), [
            'email' => 'required|email|unique:users|max:50',
            'password' => 'required',
            'name' => 'required',
        ]);

        // echo Helpers::result();
$result=array();
        if($validator->fails()){
            $result=array(
                "success"=>false,
                "messages"=>$validator->messages()->first(),
                );

        }else{


            $data_input = $request->all();
            $data_input['password']=bcrypt($request->input('password')); 
          
            $userCreated=User::create($data_input);        
        
            $result=array(
                "success"=>true,
                "row"=>$userCreated
                );
        }

        return response()->json($result);

    }

    public function login(Request $request)
    {
         $validator=Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required'
        ]);

        // echo Helpers::result();
        if($validator->fails()){
            $result=array(
                "success"=>false,
                "messages"=>$validator->messages()->first(),
                );

        }else{
            $email=$request->input('email');
            $password=$request->input('password');
            $authenticated=Auth::attempt(['email' => $email, 'password' => $password]);

            if (!$authenticated) {
            
                $result=array(
                    "success"=>false,
                    "messages"=>"email and password does not match",
                    );

            }else{
                $userInfo=Auth::user();
                $token = $userInfo->createToken('personal-token#'.$userInfo->name)->accessToken;
                $detailUser=$userInfo;
                $detailUser['token']=$token;

                $result=array(
                    "success"=>true,
                    "row"=>$detailUser
                    );
            }
        }

        return response()->json($result);

    }

    public function profile(Request $request)
    {
        $result=array(
            'success'=>true,
            'row'=>$request->user()
        );

        return response()->json($result);
    }

   public function edit_profile(Request $request)
    {

        $validator=Validator::make($request->all(), [
            'name' => 'required',
        ]);

        // echo Helpers::result();
        if($validator->fails()){
            $result=array(
                "success"=>false,
                "messages"=>$validator->messages()->first(),
                );

        }else{

            $data_input = $request->all();
            if($request->input('password')!=""){
                $data_input['password']=bcrypt($request->input('password')); 
            }else{
                unset($data_input['password']);
            }

            if(isset($data_input['email'])){
                unset($data_input['email']);
            }

            $isUpdated=Auth::user()->update($data_input);        
            if($isUpdated){
                $result=array(
                    "success"=>true,
                    "row"=>$request->user()
                    );
            }else{
                $result=array(
                    "success"=>false,
                    "messages"=>"Failed Update Profile"
                    );

            }
        }

 
        return response()->json($result);
    }
 
}
