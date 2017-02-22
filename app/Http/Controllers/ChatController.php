<?php

namespace App\Http\Controllers;

use App\Model\Chat;
use Validator;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ChatController extends Controller
{   
    private $payload_list=array("list_chat"=> null,'page'=>1);
    private $payload_info=array("chat"=> null);
    private $relation_table=array('user','chats_room');
    public function data(Request $request)
    {
      
/*      \Event::listen('Illuminate\Database\Events\QueryExecuted', function ($query) {
            var_dump($query->sql);
        });
*/    
        $chat=new Chat();
        $option_list=optionList($chat,$request,$this->relation_table);
        
        $this->payload_list['list_chat']=$option_list['data'];
        $this->payload_list['page']=$option_list['page'];

        if(count($option_list['data'])>0){
            $results=successResult("List of Chat",$this->payload_list);
        }else{
            $results=errorResult("Chat Not Found",$this->payload_list);
        }

        return $results;
    }

    public function create(Request $request)
    {


        $validator=Validator::make($request->all(), [
            'text' => 'required',
            'chats_rooms_id' => 'required',
        ]);


        if($validator->fails()){
            $results=errorResult($validator->messages()->first(),$this->payload_info);
        }else{
            $data_input = $request->all();
            $created=Chat::create($data_input);        
            $info_chat=Chat::with($this->relation_table)->find($created->id);
            $this->payload_info['chat']=$info_chat;
            $results=successResult("Create Chat Successfully",$this->payload_info);
        }

        return $results;
    }

    public function detail($id)
    {
        $row=Chat::with($this->relation_table)->find($id);

        if(count($row)>0){
           $this->payload_info['chat']=$row;
           $results=successResult("Detail of Chat",$this->payload_info);

        }else{
           $results=errorResult("Chat not found",$this->payload_info);
        }

        return $results;
    }

    public function update(Request $request, Chat $chat)
    {
        $validator=Validator::make($request->all(), [
            'text' => 'required',
            'chats_rooms_id' => 'required',
        ]);


        if($validator->fails()){
               $results=errorResult($validator->messages()->first(),$this->payload_info);
        }else{

            $data_input = $request->all();
            $chat_id=$request->input('id');
            $updated=Chat::where('id', $chat_id)
                                  ->update($data_input);

            if($updated){
               $this->payload_info['chat']=Chat::with($this->relation_table)->find($chat_id);
               $results=successResult("Update Chat Successfully",$this->payload_info);

            }else{
               $results=errorResult("Update Chat Failed",$this->payload_info);
            }

        }

        return $results;
    }

    public function delete($id)
    {
        $this->payload_info=array(
            "chat"=> new \stdClass()
            );
        
        $chat=Chat::with($this->relation_table)->find($id);
        if($chat!=null){
            $chat->delete();
            if ($chat->trashed()) {
               $this->payload_info['chat']=$chat;
               $results=successResult("Delete Chat Successfully",$this->payload_info);
            }else{
               $results=errorResult("Delete Chat Failed",$this->payload_info);
            }
        }else{
               $results=errorResult("Chat not found or already removed.",$this->payload_info);
        }

        return $results;
    }

    public function force_delete($id){        

        $chat=Chat::onlyTrashed()->with($this->relation_table)->find($id);
        ($chat!==null) ? '' : $chat=Chat::with($this->relation_table)->find($id);;
        if($chat!=null){
            if ($chat->forceDelete()) {
               $this->payload['chat']=$chat;
               $results=successResult("Force Delete Chat Successfully",$this->payload_info);
            }else{
               $results=errorResult("Force Delete Chat Failed",$this->payload_info);
            }
        }else{
               $results=errorResult("Chat not found or already removed.",$this->payload_info);
        }
        return $results;
    }

}