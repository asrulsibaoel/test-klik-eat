<?php

namespace App\Http\Controllers;

use App\Model\Category;
use Validator;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CategoryController extends Controller
{   
    private $payload_list=array("list_category"=> null);
    private $payload_info=array("category"=> null);

    public function data(Request $request)
    {
      
/*      \Event::listen('Illuminate\Database\Events\QueryExecuted', function ($query) {
            var_dump($query->sql);
        });
*/    
        $category=new Category();
        $fillable=$category->fillable;

        $queryCategory=$category;

        // searching
        if($request->input('q')){
            $q=$request->input('q');
            if(is_array($fillable))
                foreach ($fillable as $field) {
                    $queryCategory=$queryCategory->orWhere($field,'like',$q.'%');
                }
        }

        // sorting
        if($request->input('sortby')){
            $sortby=$request->input('sortby');
            $order=($request->input('order')) ? $request->input('order') : 'asc';
                    $queryCategory=$queryCategory->orderBy($sortby,$order);
        }


        $list_category=$queryCategory->get();
        $this->payload_list['list_category']=$list_category;
        $results=successResult("List of Category",$this->payload_list);

        return $results;
    }

    public function create(Request $request)
    {
        $validator=Validator::make($request->all(), [
            'name' => 'required'
        ]);

        if($validator->fails()){
            $results=errorResult($validator->messages()->first(),$this->payload_info);
        }else{
            $data_input = $request->all();
            $created=Category::create($data_input);        
            $this->payload_info['category']=$created;
            $results=successResult("Create Category Successfully",$this->payload_info);
        }

        return $results;

    }

    public function detail($id)
    {
        $row=Category::find($id);

        if(is_array($row)){
           $this->payload_info['category']=$row;
           $results=successResult("Detail of Category",$this->payload_info);

        }else{
           $results=errorResult("Category not found",$this->payload_info);
        }

        return $results;
    }

    public function update(Request $request, Category $category)
    {
        $validator=Validator::make($request->all(), [
            'name' => 'required'
        ]);

        if($validator->fails()){
               $results=errorResult($validator->messages()->first(),$this->payload_info);
        }else{

            $data_input = $request->all();
            $category_id=$request->input('id');
            $updated=Category::where('id', $category_id)
                                  ->update($data_input);

            if($updated){
               $this->payload_info['category']=$category->find($category_id);
               $results=successResult("Update Category Successfully",$this->payload_info);

            }else{
               $results=errorResult("Update Category Failed",$this->payload_info);
            }

        }

        return $results;
    }

    public function delete($id)
    {
        $this->payload_info=array(
            "category"=> new \stdClass()
            );
        
        $category=Category::find($id);
        if($category!=null){
            $category->delete();
            if ($category->trashed()) {
               $this->payload_info['category']=$category;
               $results=successResult("Delete Category Successfully",$this->payload_info);
            }else{
               $results=errorResult("Delete Category Failed",$this->payload_info);
            }
        }else{
               $results=errorResult("Category not found or already removed.",$this->payload_info);
        }

        return $results;
    }

    public function force_delete($id){        

        $category=Category::onlyTrashed()->find($id);
        ($category!==null) ? '' : $category=Category::find($id);;
        if($category!=null){
            if ($category->forceDelete()) {
               $this->payload['category']=$category;
               $results=successResult("Force Delete Category Successfully",$this->payload_info);
            }else{
               $results=errorResult("Force Delete Category Failed",$this->payload_info);
            }
        }else{
               $results=errorResult("Category not found or already removed.",$this->payload_info);
        }
        return $results;
    }

}