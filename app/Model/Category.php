<?php

namespace App\Model;


use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Category extends Model
{
	use SoftDeletes;
    
    protected $dates = ['deleted_at'];
    //
    public $fillable=['id','name'];

    public $hidden=['created_at','updated_at','deleted_at'];
}

