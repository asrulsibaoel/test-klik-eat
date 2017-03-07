<?php

namespace App\Http\Controllers;

use App\Player;
use Validator;
use Illuminate\Http\Request;

class PlayerController extends Controller
{
    //
    //
    private $payload_list = ["list_player" => null, 'page' => 1];
    private $payload_info = ["player" => null];

    public function data(Request $request)
    {
        $player = new Player();
        $option_list = optionList($player, $request, "game");

        $this->payload_list['list_player'] = $option_list['data'];
        $this->payload_list['page'] = $option_list['page'];

        if (count($option_list['data']) > 0) {
            $results = successResult("List of Player", $this->payload_list);
        } else {
            $results = errorResult("Player Not Found", $this->payload_list);
        }
        return $results;
    }

    public function create(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'player_name' => 'required',
            'game_id' => 'required',
            'score' => 'required'
        ]);

        if ($validator->fails()) {
            $results = errorResult($validator->messages()->first(), $this->payload_info);
        } else {
            $data_input = $request->all();
            $created = Player::create($data_input);
            $this->payload_info['player'] = $created;
            $results = successResult("Successfully adding new Player", $this->payload_info);
        }

        return $results;

    }

    public function detail($id)
    {
        $row = Player::find($id);

        if (count($row) > 0) {
            $this->payload_info['player'] = $row;
            $results = successResult("Detail of Player", $this->payload_info);

        } else {
            $results = errorResult("Player not found", $this->payload_info);
        }

        return $results;
    }

    public function update(Request $request, Player $player)
    {
        $validator = Validator::make($request->all(), [
            'player_name' => 'required',
            'game_id' => 'required',
            'score' => 'required'
        ]);

        if ($validator->fails()) {
            $results = errorResult($validator->messages()->first(), $this->payload_info);
        } else {

            $data_input = $request->all();
            $player_id = $request->input('id');

            $updated = Player::where('id', $player_id)
                ->update($data_input);

            if ($updated) {
                $this->payload_info['player'] = $player->find($player_id);
                $results = successResult("Update Player Successfully", $this->payload_info);

            } else {
                $results = errorResult("Update Player Failed", $this->payload_info);
            }

        }

        return $results;
    }

    public function delete($id)
    {
        $this->payload_info = array(
            "player" => new \stdClass()
        );

        $player = Player::find($id);
        if ($player != null) {
            $player->delete();
            if ($player->trashed()) {
                $this->payload_info['player'] = $player;
                $results = successResult("Delete Player Successfully", $this->payload_info);
            } else {
                $results = errorResult("Delete Player Failed", $this->payload_info);
            }
        } else {
            $results = errorResult("Player not found or already removed.", $this->payload_info);
        }

        return $results;
    }

    public function forceDelete($id)
    {

        $player = Player::onlyTrashed()->find($id);
        ($player !== null) ? '' : $player = Player::find($id);;
        if ($player != null) {
            if ($player->forceDelete()) {
                $this->payload['player'] = $player;
                $results = successResult("Force Delete Player Successfully", $this->payload_info);
            } else {
                $results = errorResult("Force Delete Player Failed", $this->payload_info);
            }
        } else {
            $results = errorResult("Player not found or already removed.", $this->payload_info);
        }
        return $results;
    }
}
