<?php

namespace App\Http\Controllers;

use App\Model\ChatsRoom;
use Validator;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ChatsRoomController extends Controller
{

    public function data(Request $request)
    {
  /*
    // debugging Queyr
  \Event::listen('Illuminate\Database\Events\QueryExecuted', function ($query) {
        var_dump($query->sql);
    });
*/
        $data=ChatsRoom::all();
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
            'name' => 'required'
        ]);

        // echo Helpers::result();
        if($validator->fails()){
            $result=array(
                "success"=>false,
                "messages"=>$validator->messages()->first(),
                );

        }else{
            $data_input = $request->all();
            $created=ChatsRoom::create($data_input);        
        
            $result=array(
                "success"=>true,
                "row"=>$created
                );
        }

        return response()->json($result);

    }

    public function detail($id)
    {

        $row=ChatsRoom::find($id);
                if($row!=null){
            $result=array(
                'success'=>true,
                'row'=>$row
            );
        }else{
            $result=array(
                'success'=>false,
                'row'=>"Data Not Found"
            );
        }


        return response()->json($result);

    }

    public function update(Request $request, ChatsRoom $chatsRoom)
    {
        $validator=Validator::make($request->all(), [
            'name' => 'required'
        ]);

        // echo Helpers::result();
        if($validator->fails()){
            $result=array(
                "success"=>false,
                "messages"=>$validator->messages()->first(),
                );

        }else{

            $data_input = $request->all();
            // $updated=$chatsRoom->where('users_id',1)->where('id',request->input('id'))->update($data_input);        
            $chatsRoom_id=$request->input('id');
           $updated=ChatsRoom::where('id', $chatsRoom_id)
          ->update($data_input);

            if($updated){
                $result=array(
                    "success"=>true,
                    "row"=>$chatsRoom->find($chatsRoom_id)
                    );
            }else{
                $result=array(
                    "success"=>false,
                    "messages"=>"chatsRoom Not Found"
                    );
            }
        }

        return response()->json($result);
    }

    public function delete($id)
    {
  
        $chatsRoom=ChatsRoom::find($id);
        if($chatsRoom!=null){
            $chatsRoom->delete();
            if ($chatsRoom->trashed()) {
               $result=array(
                        "success"=>true,
                        "row"=>$chatsRoom
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
        $chatsRoom=ChatsRoom::onlyTrashed()->find($id);
        ($chatsRoom!==null) ? '' : $chatsRoom=ChatsRoom::find($id);;
        if($chatsRoom!=null){
            if ($chatsRoom->forceDelete()) {
               $result=array(
                        "success"=>true,
                        "row"=>$chatsRoom
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
