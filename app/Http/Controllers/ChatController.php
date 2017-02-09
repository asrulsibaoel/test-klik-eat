<?php

namespace App\Http\Controllers;

use App\Model\Chat;
use Validator;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ChatController extends Controller
{

    public function data(Request $request)
    {
  /*
    // debugging Queyr
  \Event::listen('Illuminate\Database\Events\QueryExecuted', function ($query) {
        var_dump($query->sql);
    });
*/
        $data=Chat::all();
        $result=array(
            'success'=>true,
            'data'=>$data
        );

        return response()->json($result);

    }


    public function create(Request $request)
    {
        //
        $validator=Validator::make($request->all(), [
            'text' => 'required',
            'chats_rooms_id' => 'required',
        ]);

        // echo Helpers::result();
        if($validator->fails()){
            $result=array(
                "success"=>false,
                "messages"=>$validator->messages()->first(),
                );

        }else{
            $data_input = $request->all();
            $data_input['users_id']=Auth::id();
            $created=Chat::create($data_input);        
        
            $result=array(
                "success"=>true,
                "row"=>$created
                );
        }

        return response()->json($result);

    }

    public function detail($id)
    {

        $row=Chat::find($id);
        $result=array(
            'success'=>true,
            'row'=>$row
        );

        return response()->json($result);

    }

    public function update(Request $request, Chat $chat)
    {
        $validator=Validator::make($request->all(), [
            'text' => 'required',
            'chats_rooms_id' => 'required',
        ]);

        // echo Helpers::result();
        if($validator->fails()){
            $result=array(
                "success"=>false,
                "messages"=>$validator->messages()->first(),
                );

        }else{

            $data_input = $request->all();
            // $updated=$chat->where('users_id',1)->where('id',request->input('id'))->update($data_input);        
            $users_id=Auth::id();
            $chats_id=$request->input('id');
           $updated=Chat::where('users_id',$users_id)
          ->where('id', $chats_id)
          ->update($data_input);

            if($updated){
                $result=array(
                    "success"=>true,
                    "row"=>$chat->find($chats_id)
                    );
            }else{
                $result=array(
                    "success"=>false,
                    "messages"=>"You are not allowed for updated this chat"
                    );
            }
        }

        return response()->json($result);
    }

    public function delete($id)
    {

  
        $chat=Chat::where('users_id',Auth::id())->find($id);
        if($chat!=null){
            $chat->delete();
            if ($chat->trashed()) {
               $result=array(
                        "success"=>true,
                        "row"=>$chat
                        );
            }else{
                $result=array(
                        "success"=>false,
                        "messages"=>"Delete data failed"
                        );
            }
        }else{
                $result=array(
                        "success"=>false,
                        "messages"=>"Data not found or already removed."
                        );

        }
        return response()->json($result);
    }

    public function force_delete($id){
        $chat=Chat::onlyTrashed()->find($id);
        ($chat!==null) ? '' : $chat=Chat::find($id);;
        if($chat!=null){
            if ($chat->forceDelete()) {
               $result=array(
                        "success"=>true,
                        "row"=>$chat
                        );
            }else{
                $result=array(
                        "success"=>false,
                        "messages"=>"Delete data failed"
                        );
            }
        }else{
                $result=array(
                        "success"=>false,
                        "messages"=>"Data not found or already removed."
                        );

        }
        return response()->json($result);
    }

}
