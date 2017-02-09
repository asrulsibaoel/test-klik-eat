<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Chat extends Model
{
    use SoftDeletes;
    
    protected $dates = ['deleted_at'];
    //
    protected $fillable=['text','chats_rooms_id','users_id'];
    
}
