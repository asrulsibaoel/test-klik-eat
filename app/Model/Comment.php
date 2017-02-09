<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Comment extends Model
{
    use SoftDeletes;
    
    protected $dates = ['deleted_at'];
    //
    protected $fillable=['messages','products_id','users_id'];
    
}
