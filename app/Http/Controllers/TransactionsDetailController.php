<?php

namespace App\Http\Controllers;

use App\Model\TransactionsDetail;
use Validator;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class TransactionsDetailController extends Controller
{

    public function data(Request $request,$id='')
    {
  /*
    // debugging Queyr
  \Event::listen('Illuminate\Database\Events\QueryExecuted', function ($query) {
        var_dump($query->sql);
    });
*/
    if($id!=""){
        $data=TransactionsDetail::where('transactions_id',$id)->get();
    }else{
        $data=TransactionsDetail::get();
    }
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
            'bargain_price' => 'required',
            'transactions_id' => 'required',
            'products_id' => 'required'
        ]);

        // echo Helpers::result();
        if($validator->fails()){
            $result=array(
                "success"=>false,
                "messages"=>$validator->messages()->first(),
                );

        }else{
            $data_input = $request->all();
            $created=TransactionsDetail::create($data_input);        
        
            $result=array(
                "success"=>true,
                "row"=>$created
                );
        }

        return response()->json($result);

    }

    public function detail($id)
    {

        $row=TransactionsDetail::find($id);
        $result=array(
            'success'=>true,
            'row'=>$row
        );

        return response()->json($result);

    }

    public function update(Request $request, TransactionsDetail $transactionsDetail)
    {
        $validator=Validator::make($request->all(), [
            'bargain_price' => 'required',
            'transactions_id' => 'required',
            'products_id' => 'required'
        ]);

        // echo Helpers::result();
        if($validator->fails()){
            $result=array(
                "success"=>false,
                "messages"=>$validator->messages()->first(),
                );

        }else{

            $data_input = $request->all();
            // $updated=$transactionsDetail->where('users_id',1)->where('id',request->input('id'))->update($data_input);        
            $transactionsDetail_id=$request->input('id');
           $updated=TransactionsDetail::where('id', $transactionsDetail_id)
          ->update($data_input);

            if($updated){
                $result=array(
                    "success"=>true,
                    "row"=>$transactionsDetail->find($transactionsDetail_id)
                    );
            }else{
                $result=array(
                    "success"=>false,
                    "messages"=>"You are not allowed for updated this transactionsDetail"
                    );
            }
        }

        return response()->json($result);
    }

    public function delete($id)
    {
  
        $transactionsDetail=TransactionsDetail::find($id);
        if($transactionsDetail!=null){
            $transactionsDetail->delete();
            if ($transactionsDetail->trashed()) {
               $result=array(
                        "success"=>true,
                        "row"=>$transactionsDetail
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
        $transactionsDetail=TransactionsDetail::onlyTrashed()->find($id);
        ($transactionsDetail!==null) ? '' : $transactionsDetail=TransactionsDetail::find($id);;
        if($transactionsDetail!=null){
            if ($transactionsDetail->forceDelete()) {
               $result=array(
                        "success"=>true,
                        "row"=>$transactionsDetail
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
