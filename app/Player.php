<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Player extends Model
{
    use SoftDeletes;

    protected $table = "player";
    protected $dates = ['deleted_at'];
    protected $fillable = ['player_name', 'score', 'game_id'];
    protected $visible = ['player_name','id', 'score', 'game', 'game_id', 'total_player'];
    public $hidden=['updated_at','deleted_at'];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function game()
    {
        return $this->belongsTo('App\Game','game_id');
    }

}
