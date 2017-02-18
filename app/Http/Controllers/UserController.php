<?php

namespace App\Http\Controllers;

use App\User;
use Validator;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    private $payload_info=array("user"=> null);

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
                   $results=errorResult($validator->messages()->first(),$this->payload_info);
        }else{
            $data_input = $request->all();
            $data_input['password']=bcrypt($request->input('password')); 
            $user_created=User::create($data_input);        
        
            $this->payload_info['user']=User::find($user_created->id);
            $results=successResult("Register User Successfully",$this->payload_info);
        }

        return $results;
    }

    public function login(Request $request)
    {
        $this->payload_info['token']="";

         $validator=Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required'
        ]);

        // echo Helpers::result();
        if($validator->fails()){
           $results=errorResult($validator->messages()->first(),$this->payload_info);
        }else{
            $email=$request->input('email');
            $password=$request->input('password');
            $authenticated=Auth::attempt(['email' => $email, 'password' => $password]);

            if (!$authenticated) {
                 $results=errorResult("Failed: email and password does not match",$this->payload_info);
            }else{
                $userInfo=Auth::user();
                try {
                    $token = $userInfo->createToken('personal-token#'.$userInfo->name)->accessToken;

                    $this->payload_info['user']=$userInfo;
                    $this->payload_info['token']=$token;

                    $results=successResult("Login User Successfully",$this->payload_info);
                } catch (Exception $e) {
                   $results=errorResult("Generate Token Failed",$this->payload_info);
                }
            }
        }

        return $results;

    }

    public function profile(Request $request)
    {
        if(Auth::id()){
        $row=Auth::user();
           $this->payload_info['user']=$row;
           $results=successResult("Detail of User",$this->payload_info);
        }else{
           $results=errorResult("User not found",$this->payload_info);
        }

        return $results;
    }

   public function edit_profile(Request $request)
    {

        $validator=Validator::make($request->all(), [
            'name' => 'required',
        ]);

        // echo Helpers::result();
        if($validator->fails()){
               $results=errorResult($validator->messages()->first(),$this->payload_info);
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
               $this->payload_info['InfoCategory']=$category->find($category_id);
               $results=successResult("Update User Successfully",$this->payload_info);
            }else{
               $results=errorResult("Update Profile Failed",$this->payload_info);
            }
        }

        return $results;
    }
 
}
