<?php

namespace App\Http\Controllers;

use App\Model\Comment;
use Validator;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CommentController extends Controller
{

    public function data(Request $request)
    {
  /*
    // debugging Queyr
  \Event::listen('Illuminate\Database\Events\QueryExecuted', function ($query) {
        var_dump($query->sql);
    });
*/
        $data=Comment::all();
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
            'messages' => 'required',
            'products_id' => 'required',
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
            $created=Comment::create($data_input);        
        
            $result=array(
                "success"=>true,
                "row"=>$created
                );
        }

        return response()->json($result);

    }

    public function detail($id)
    {

        $row=Comment::find($id);
        $result=array(
            'success'=>true,
            'row'=>$row
        );

        return response()->json($result);

    }

    public function update(Request $request, Comment $comment)
    {
        $validator=Validator::make($request->all(), [
            'messages' => 'required',
            'products_id' => 'required',
        ]);

        // echo Helpers::result();
        if($validator->fails()){
            $result=array(
                "success"=>false,
                "messages"=>$validator->messages()->first(),
                );

        }else{

            $data_input = $request->all();
            // $updated=$comment->where('users_id',1)->where('id',request->input('id'))->update($data_input);        
            $users_id=Auth::id();
            $comments_id=$request->input('id');
           $updated=Comment::where('users_id',$users_id)
          ->where('id', $comments_id)
          ->update($data_input);

            if($updated){
                $result=array(
                    "success"=>true,
                    "row"=>$comment->find($comments_id)
                    );
            }else{
                $result=array(
                    "success"=>false,
                    "messages"=>"You are not allowed for updated this comment"
                    );
            }
        }

        return response()->json($result);
    }

    public function delete($id)
    {

  
        $comment=Comment::where('users_id',Auth::id())->find($id);
        if($comment!=null){
            $comment->delete();
            if ($comment->trashed()) {
               $result=array(
                        "success"=>true,
                        "row"=>$comment
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
        $comment=Comment::onlyTrashed()->find($id);
        ($comment!==null) ? '' : $comment=Comment::find($id);;
        if($comment!=null){
            if ($comment->forceDelete()) {
               $result=array(
                        "success"=>true,
                        "row"=>$comment
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
