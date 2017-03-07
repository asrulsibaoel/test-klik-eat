<?php

namespace App\Http\Controllers;

use App\Game;
use Validator;
use Illuminate\Http\Request;

class GameController extends Controller
{
    //
    private $payload_list = ["list_game" => null, 'page' => 1];
    private $payload_info = ["game" => null];

    public function getLeaderBoard(Request $request)
    {

        $game = Game::getLeaderBoard();

        $this->payload_list['list_game'] = $game;

        if (count($game) > 0) {
            $results = successResult("List of Game", $this->payload_list);
        } else {
            $results = errorResult("Game Not Found", $this->payload_list);
        }
        return $results;
    }

    public function data(Request $request)
    {
        $game = new Game();
        $option_list = optionList($game, $request, "player", "countPlayer");

        $this->payload_list['list_game'] = $option_list['data'];
        $this->payload_list['page'] = $option_list['page'];

        if (count($option_list['data']) > 0) {
            $results = successResult("List of Game", $this->payload_list);
        } else {
            $results = errorResult("Game Not Found", $this->payload_list);
        }
        return $results;
    }

    public function create(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'game_name' => 'required'
        ]);

        if ($validator->fails()) {
            $results = errorResult($validator->messages()->first(), $this->payload_info);
        } else {
            $data_input = $request->all();
            $created = Game::create($data_input);
            $this->payload_info['game'] = $created;
            $results = successResult("Successfully adding new Game", $this->payload_info);
        }

        return $results;

    }

    public function detail($id)
    {
        $row = Game::find($id);

        if (count($row) > 0) {
            $this->payload_info['game'] = $row;
            $results = successResult("Detail of Game", $this->payload_info);

        } else {
            $results = errorResult("Game not found", $this->payload_info);
        }

        return $results;
    }

    public function update(Request $request, Game $game)
    {
        $validator = Validator::make($request->all(), [
            'game_name' => 'required'
        ]);

        if ($validator->fails()) {
            $results = errorResult($validator->messages()->first(), $this->payload_info);
        } else {

            $data_input = $request->all();
            $game_id = $request->input('id');
            $updated = Game::where('id', $game_id)
                ->update($data_input);

            if ($updated) {
                $this->payload_info['game'] = $game->find($game_id);
                $results = successResult("Update Game Successfully", $this->payload_info);

            } else {
                $results = errorResult("Update Game Failed", $this->payload_info);
            }

        }

        return $results;
    }

    public function delete($id)
    {
        $this->payload_info = array(
            "game" => new \stdClass()
        );

        $game = Game::find($id);
        if ($game != null) {
            $game->delete();
            if ($game->trashed()) {
                $this->payload_info['game'] = $game;
                $results = successResult("Delete Game Successfully", $this->payload_info);
            } else {
                $results = errorResult("Delete Game Failed", $this->payload_info);
            }
        } else {
            $results = errorResult("Game not found or already removed.", $this->payload_info);
        }

        return $results;
    }

    public function forceDelete($id)
    {

        $game = Game::onlyTrashed()->find($id);
        ($game !== null) ? '' : $game = Game::find($id);;
        if ($game != null) {
            if ($game->forceDelete()) {
                $this->payload['game'] = $game;
                $results = successResult("Force Delete Game Successfully", $this->payload_info);
            } else {
                $results = errorResult("Force Delete Game Failed", $this->payload_info);
            }
        } else {
            $results = errorResult("Game not found or already removed.", $this->payload_info);
        }
        return $results;
    }
}
