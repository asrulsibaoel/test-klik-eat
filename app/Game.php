<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Game extends Model
{
    //
    protected $table = "game";

    protected $visible = ['countPlayer', 'game_name', 'id', 'player', 'bestPlayer', 'players'];

    protected $fillable = ['game_name'];
    public $hidden = ['updated_at', 'deleted_at'];

    public function player()
    {
        return $this->hasMany('App\Player');
    }

    public function countPlayer()
    {
        return $this->player()
            ->selectRaw('game_id, count(*) as total_player')
            ->groupBy('game_id')->orderBy('total_player', 'ASC');
    }

    public function bestPlayer()
    {
        return $this->hasOne('App\Player')->orderBy('score','DESC');

    }



    public static function getLeaderBoard()
    {
        $game = Game::with('bestPlayer')
            ->get();
        $orderedGame = [];

        foreach ($game as $key => $val) {
            $game[$key]->players = $val->player->count();
            $orderedGame[] = $val;
        }
        usort($orderedGame, function($a, $b) {
            return $a->players <= $b->players;
        });

        return $orderedGame;
    }

}
