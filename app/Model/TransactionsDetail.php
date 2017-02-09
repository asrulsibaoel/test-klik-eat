<?php
namespace App\Model;


use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class TransactionsDetail extends Model
{
	use SoftDeletes;
    
    protected $dates = ['deleted_at'];
    //
    protected $fillable=['transactions_id','products_id','real_price','bargain_price'];

}

