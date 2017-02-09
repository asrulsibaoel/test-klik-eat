<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Transaction extends Model
{
    use SoftDeletes;
    
    protected $dates = ['deleted_at'];
    //
    protected $fillable=['id','users_id','discount','tax','subtotal','total','notes'];
    
}
