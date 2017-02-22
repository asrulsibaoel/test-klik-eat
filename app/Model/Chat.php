<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Chat extends Model
{
    use SoftDeletes;
    
    protected $dates = ['deleted_at'];
    //
    public $fillable=['text','chats_rooms_id','users_id','created_at'];

    public $hidden=['updated_at','deleted_at'];

    public function user()
    {
        return $this->belongsTo('App\User','users_id');
    }

    public function chats_room()
    {
        return $this->belongsTo('App\Model\ChatsRoom','chats_rooms_id');
    }
}
