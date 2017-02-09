<?php

namespace App\Http\Controllers;

use App\Model\Transaction;
use Validator;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class TransactionController extends Controller
{


    public function data(Request $request)
    {
  /*
    // debugging Queyr
  \Event::listen('Illuminate\Database\Events\QueryExecuted', function ($query) {
        var_dump($query->sql);
    });
*/
        $data=Transaction::all();
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
            'total' => 'required',

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
            $transID="TRX".date("ymdhis").rand(0,10);
            $data_input['id']=$transID;
            $created=Transaction::create($data_input);        
        
            $result=array(
                "success"=>true,
                "row"=>$created
                );
        }

        return response()->json($result);

    }

    public function detail($id)
    {

        $row=Transaction::find($id);
        $result=array(
            'success'=>true,
            'row'=>$row
        );

        return response()->json($result);

    }

    public function update(Request $request, Transaction $transaction)
    {
        $validator=Validator::make($request->all(), [
            'total' => 'required',
        ]);

        // echo Helpers::result();
        if($validator->fails()){
            $result=array(
                "success"=>false,
                "messages"=>$validator->messages()->first(),
                );

        }else{

            $data_input = $request->all();
            // $updated=$transaction->where('users_id',1)->where('id',request->input('id'))->update($data_input);        
            $users_id=Auth::id();
            $transactions_id=$request->input('id');
           $updated=Transaction::where('users_id',$users_id)
          ->where('id', $transactions_id)
          ->update($data_input);

            if($updated){
                $result=array(
                    "success"=>true,
                    "row"=>$transaction->find($transactions_id)
                    );
            }else{
                $result=array(
                    "success"=>false,
                    "messages"=>"You are not allowed for updated this transaction"
                    );
            }
        }

        return response()->json($result);
    }

    public function delete($id)
    {

  
        $transaction=Transaction::where('users_id',Auth::id())->find($id);
        if($transaction!=null){
            $transaction->delete();
            if ($transaction->trashed()) {
               $result=array(
                        "success"=>true,
                        "row"=>$transaction
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
        $transaction=Transaction::onlyTrashed()->find($id);
        ($transaction!==null) ? '' : $transaction=Transaction::find($id);;
        if($transaction!=null){
            if ($transaction->forceDelete()) {
               $result=array(
                        "success"=>true,
                        "row"=>$transaction
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
