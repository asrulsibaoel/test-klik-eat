<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Customer;
class PelangganController extends Controller
{
    //
    public function index(){
    	echo "iam pelanggan index";
    }

    public function data(){
    	$c=new Customer();
    	$data=Customer::all();
    	
    	$nama="Fina Baru <b>Bangets ".$c::something()." </b>";



    	return view("pelanggan/data")->with(
    		compact("nama","data")
    		);	
    }
}
