<?php

namespace App\Http\Controllers;

use App\Model\Category;
use Validator;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CategoryController extends Controller
{

    public function data(Request $request)
    {
  /*
    // debugging Queyr
  \Event::listen('Illuminate\Database\Events\QueryExecuted', function ($query) {
        var_dump($query->sql);
    });
*/
        $data=Category::all();
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
            $created=Category::create($data_input);        
        
            $result=array(
                "success"=>true,
                "row"=>$created
                );
        }

        return response()->json($result);

    }

    public function detail($id)
    {

        $row=Category::find($id);
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

    public function update(Request $request, Category $category)
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
            // $updated=$category->where('users_id',1)->where('id',request->input('id'))->update($data_input);        
            $category_id=$request->input('id');
           $updated=Category::where('id', $category_id)
          ->update($data_input);

            if($updated){
                $result=array(
                    "success"=>true,
                    "row"=>$category->find($category_id)
                    );
            }else{
                $result=array(
                    "success"=>false,
                    "messages"=>"Category Not Found"
                    );
            }
        }

        return response()->json($result);
    }

    public function delete($id)
    {
  
        $category=Category::find($id);
        if($category!=null){
            $category->delete();
            if ($category->trashed()) {
               $result=array(
                        "success"=>true,
                        "row"=>$category
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
        $category=Category::onlyTrashed()->find($id);
        ($category!==null) ? '' : $category=Category::find($id);;
        if($category!=null){
            if ($category->forceDelete()) {
               $result=array(
                        "success"=>true,
                        "row"=>$category
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
