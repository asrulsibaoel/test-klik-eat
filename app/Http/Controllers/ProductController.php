<?php

namespace App\Http\Controllers;

use App\Model\Product;
use Validator;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ProductController extends Controller
{

    public function data(Request $request)
    {
  /*
    // debugging Queyr
  \Event::listen('Illuminate\Database\Events\QueryExecuted', function ($query) {
        var_dump($query->sql);
    });
*/
        $data=Product::all();
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
            'name' => 'required',
            'price' => 'required',
            'categories_id' => 'required',
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
            $created=Product::create($data_input);        
        
            $result=array(
                "success"=>true,
                "row"=>$created
                );
        }

        return response()->json($result);

    }

    public function detail($id)
    {

        $row=Product::find($id);
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

    public function update(Request $request, Product $product)
    {
        $validator=Validator::make($request->all(), [
            'name' => 'required',
            'price' => 'required',
            'categories_id' => 'required',
        ]);

        // echo Helpers::result();
        if($validator->fails()){
            $result=array(
                "success"=>false,
                "messages"=>$validator->messages()->first(),
                );

        }else{

            $data_input = $request->all();
            // $updated=$product->where('users_id',1)->where('id',request->input('id'))->update($data_input);        
            $users_id=Auth::id();
            $products_id=$request->input('id');
           $updated=Product::where('users_id',$users_id)
          ->where('id', $products_id)
          ->update($data_input);

            if($updated){
                $result=array(
                    "success"=>true,
                    "row"=>$product->find($products_id)
                    );
            }else{
                $result=array(
                    "success"=>false,
                    "messages"=>"Product Not Found or Not allowed for updated this product"
                    );
            }
        }

        return response()->json($result);
    }

    public function delete($id)
    {

  
        $product=Product::where('users_id',Auth::id())->find($id);
        if($product!=null){
            $product->delete();
            if ($product->trashed()) {
               $result=array(
                        "success"=>true,
                        "row"=>$product
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
        $product=Product::onlyTrashed()->find($id);
        ($product!==null) ? '' : $product=Product::find($id);;
        if($product!=null){
            if ($product->forceDelete()) {
               $result=array(
                        "success"=>true,
                        "row"=>$product
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
