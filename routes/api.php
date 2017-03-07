<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group(['middleware' => ['auth:api']], function () {

    /**
     * @api {get} /api/account/profile Show the user's profile
     * @apiName UserProfile
     * @apiGroup User
     *
     *  @apiHeader  {application/json} Accept format.
     * @apiHeader {Bearer} Authorization Your token here.
     *
     * @apiSuccessExample Success-Response :
     *{
    "error": false,
    "message": "Detail of User",
    "data": {
    "user": {
    "id": 1,
    "name": "admin",
    "email": "admin@admin.com",
    "fb_token": null,
    "gender": null,
    "birtdate": null,
    "phone": null,
    "address": null,
    "photo": null,
    "created_at": "2017-03-07 09:37:21"
    }
    }
    }
     *
     * @apiErrorExample Error-Response :
     *                  {
     *                       "response": {
     *                         "error": 1,
     *                         "message": "An error occured caused by : SQLSTATE[23000]: Integrity constraint violation: 1048 Column 'university_name' cannot be null (SQL: insert into `university` (`university_name`, `address`) values (, ))",
     *                         "data": {}
     *                       }
     *                    }
     *
     */
    Route::get('/account/profile', 'UserController@profile');

    /**
     * @api {post} /api/account/edit_profile Editing the User's profile
     * @apiName EditProfile
     * @apiGroup User
     *
     *  @apiHeader  {application/json} Accept format.
     * @apiHeader {Bearer} Authorization Your token here.
     *
     * @apiParam {Number} id User identifier id
     * @apiParam {String} name The User's name
     * @apiParam {String} email The User's email
     * @apiParam {String} password The User's password
     * @apiSuccessExample Success-Response :
     * {
    "error": false,
    "message": "Detail of User",
    "data": {
    "user": {
    "id": 1,
    "name": "admin",
    "email": "admin@admin.com",
    "fb_token": null,
    "gender": null,
    "birtdate": null,
    "phone": null,
    "address": null,
    "photo": null,
    "created_at": "2017-03-07 09:37:21"
    }
    }
    }
     *
     * @apiErrorExample Error-Response :
     *                  {
     *                       "response": {
     *                         "error": 1,
     *                         "message": "An error occured caused by : SQLSTATE[23000]: Integrity constraint violation: 1048 Column 'university_name' cannot be null (SQL: insert into `university` (`university_name`, `address`) values (, ))",
     *                         "data": {}
     *                       }
     *                    }
     *
     */
    Route::post('/account/edit_profile', 'UserController@edit_profile');

/*------------------------------------
	CRUD Game
------------------------------------*/

    /**
     * @api {get} /api/game/leader-board Show the Leader Board
     * @apiName LeaderBoard
     * @apiGroup Game
     *
     *  @apiHeader  {application/json} Accept format.
     * @apiHeader {Bearer} Authorization Your token here.
     *
     * @apiSuccessExample Success-Response :
     *  {
    "error": false,
    "message": "List of Game",
    "data": {
    "list_game": [
    {
    "id": 3,
    "game_name": "Perfect World",
    "players": 5,
    "best_player": {
    "id": 12,
    "game_id": 3,
    "player_name": "Game Tiga 4",
    "score": 1023
    },
    "player": [
    {
    "id": 7,
    "game_id": 3,
    "player_name": "Joko Driyono",
    "score": 789
    },
    {
    "id": 9,
    "game_id": 3,
    "player_name": "Game Tiga 1",
    "score": 789
    },
    {
    "id": 10,
    "game_id": 3,
    "player_name": "Game Tiga 2",
    "score": 900
    },
    {
    "id": 11,
    "game_id": 3,
    "player_name": "Game Tiga 3",
    "score": 1000
    },
    {
    "id": 12,
    "game_id": 3,
    "player_name": "Game Tiga 4",
    "score": 1023
    }
    ]
    },
    {
    "id": 1,
    "game_name": "Bermain BErsama",
    "players": 4,
    "best_player": {
    "id": 2,
    "game_id": 1,
    "player_name": "Sukardi",
    "score": 1001
    },
    "player": [
    {
    "id": 1,
    "game_id": 1,
    "player_name": "Point Blank",
    "score": 1000
    },
    {
    "id": 2,
    "game_id": 1,
    "player_name": "Sukardi",
    "score": 1001
    },
    {
    "id": 3,
    "game_id": 1,
    "player_name": "Sumijan",
    "score": 290
    },
    {
    "id": 8,
    "game_id": 1,
    "player_name": "Djajak",
    "score": 789
    }
    ]
    },
    {
    "id": 2,
    "game_name": "Point Blank",
    "players": 3,
    "best_player": {
    "id": 6,
    "game_id": 2,
    "player_name": "Sumijan Utama",
    "score": 500
    },
    "player": [
    {
    "id": 4,
    "game_id": 2,
    "player_name": "Sumijan Dua",
    "score": 290
    },
    {
    "id": 5,
    "game_id": 2,
    "player_name": "Sumijan Tiga",
    "score": 290
    },
    {
    "id": 6,
    "game_id": 2,
    "player_name": "Sumijan Utama",
    "score": 500
    }
    ]
    }
    ],
    "page": 1
    }
    }
     *
     * @apiErrorExample Error-Response :
     *                  {
     *                       "response": {
     *                         "error": 1,
     *                         "message": "An error occured caused by : SQLSTATE[23000]: Integrity constraint violation: 1048 Column 'university_name' cannot be null (SQL: insert into `university` (`university_name`, `address`) values (, ))",
     *                         "data": {}
     *                       }
     *                    }
     *
     */
    Route::get('/game/leader-board', 'GameController@getLeaderBoard');

    /**
     * @api {get} /api/game Game List
     * @apiName GameList
     * @apiGroup Game
     *
     *  @apiHeader  {application/json} Accept format.
     * @apiHeader {Bearer} Authorization Your token here.
     *
     * @apiParam {Number} page The list Page
     * @apiSuccessExample Success-Response :
     * {
    "error": false,
    "message": "List of Game",
    "data": {
    "list_game": [
    {
    "id": 1,
    "game_name": "Bermain BErsama",
    "player": [
    {
    "id": 1,
    "game_id": 1,
    "player_name": "Point Blank",
    "score": 1000
    },
    {
    "id": 2,
    "game_id": 1,
    "player_name": "Sukardi",
    "score": 1001
    },
    {
    "id": 3,
    "game_id": 1,
    "player_name": "Sumijan",
    "score": 290
    },
    {
    "id": 8,
    "game_id": 1,
    "player_name": "Djajak",
    "score": 789
    }
    ],
    "count_player": [
    {
    "game_id": 1,
    "total_player": 4
    }
    ]
    },
    {
    "id": 2,
    "game_name": "Point Blank",
    "player": [
    {
    "id": 4,
    "game_id": 2,
    "player_name": "Sumijan Dua",
    "score": 290
    },
    {
    "id": 5,
    "game_id": 2,
    "player_name": "Sumijan Tiga",
    "score": 290
    },
    {
    "id": 6,
    "game_id": 2,
    "player_name": "Sumijan Utama",
    "score": 500
    }
    ],
    "count_player": [
    {
    "game_id": 2,
    "total_player": 3
    }
    ]
    },
    {
    "id": 3,
    "game_name": "Perfect World",
    "player": [
    {
    "id": 7,
    "game_id": 3,
    "player_name": "Joko Driyono",
    "score": 789
    }
    ],
    "count_player": [
    {
    "game_id": 3,
    "total_player": 1
    }
    ]
    }
    ],
    "page": "1"
    }
    }
     *
     * @apiErrorExample Error-Response :
     *                  {
     *                       "response": {
     *                         "error": 1,
     *                         "message": "An error occured caused by : SQLSTATE[23000]: Integrity constraint violation: 1048 Column 'university_name' cannot be null (SQL: insert into `university` (`university_name`, `address`) values (, ))",
     *                         "data": {}
     *                       }
     *                    }
     *
     */
    Route::get('/game', 'GameController@data');

    /**
     * @api {get} /api/game/{id} Show the game
     * @apiName DetailGame
     * @apiGroup Game
     *
     *  @apiHeader  {application/json} Accept format.
     * @apiHeader {Bearer} Authorization Your token here.
     *
     * @apiParam {Number} id Game identifier ID
     * @apiSuccessExample Success-Response :
     * {
    *"error": false,
    *"message": "Detail of Game",
    *"data": {
    *"game": {
    *"id": 1,
    *"game_name": "Bermain BErsama"
    *}
    *}
    *}
     *
     * @apiErrorExample Error-Response :
     *                  {
     *                       "response": {
     *                         "error": 1,
     *                         "message": "An error occured caused by : SQLSTATE[23000]: Integrity constraint violation: 1048 Column 'university_name' cannot be null (SQL: insert into `university` (`university_name`, `address`) values (, ))",
     *                         "data": {}
     *                       }
     *                    }
     *
     */
    Route::get('/game/{id}', 'GameController@detail');

    /**
     * @api {post} /game/create Create a new Game
     * @apiName NewGame
     * @apiGroup Game
     *
     *   @apiHeader  {application/json} Accept format.
     * @apiHeader {Bearer} Authorization Your token here.
     *
     * @apiParam {String} game_name The Game Name
     * @apiSuccessExample Success-Response :
     * {
    "error": false,
    "message": "Successfully adding new Game",
    "data": {
    "game": {
    "game_name": "Game Tiga 4",
    "id": 12
    }
    }
    }
     *
     * @apiErrorExample Error-Response :
     *                  {
     *                       "response": {
     *                         "error": 1,
     *                         "message": "An error occured caused by : SQLSTATE[23000]: Integrity constraint violation: 1048 Column 'university_name' cannot be null (SQL: insert into `university` (`university_name`, `address`) values (, ))",
     *                         "data": {}
     *                       }
     *                    }
     *
     */
    Route::post('/game/create', 'GameController@create');

    /**
     * @api {post} /game/update Update the Game
     * @apiName GameUpdate
     * @apiGroup Game
     *
     *   @apiHeader  {application/json} Accept format.
     * @apiHeader {Bearer} Authorization Your token here.
     *
     * @apiParam {Number} id Student identifier id
     * @apiParam {String} game_name The Game Name
     * @apiSuccessExample Success-Response :
     * {
    "error": false,
    "message": "Successfully updating The Game",
    "data": {
    "game": {
    "game_name": "Game Tiga 4",
    "id": 12
    }
    }
    }
     *
     * @apiErrorExample Error-Response :
     *                  {
     *                       "response": {
     *                         "error": 1,
     *                         "message": "An error occured caused by : SQLSTATE[23000]: Integrity constraint violation: 1048 Column 'university_name' cannot be null (SQL: insert into `university` (`university_name`, `address`) values (, ))",
     *                         "data": {}
     *                       }
     *                    }
     *
     */
    Route::post('/game/update', 'GameController@update');

    /**
     * @api {get} /api/game/delete/{id} Temporary Delete the Game
     * @apiName TemporaryDeleteGame
     * @apiGroup Game
     *
     *  @apiHeader  {application/json} Accept format.
     * @apiHeader {Bearer} Authorization Your token here.
     *
     * @apiParam {Number} id Game identifier id
     * @apiSuccessExample Success-Response :
     *              {
     * "response": {
     *   "error": 0,
     *   "message": "Successfully temporary deleted the game",
     *   "data": {}
     * }
     *}
     *
     * @apiErrorExample Error-Response :
     *                  {
     *                       "response": {
     *                         "error": 1,
     *                         "message": "An error occured caused by : SQLSTATE[23000]: Integrity constraint violation: 1048 Column 'university_name' cannot be null (SQL: insert into `university` (`university_name`, `address`) values (, ))",
     *                         "data": {}
     *                       }
     *                    }
     *
     */
    Route::get('/game/delete/{id}', 'GameController@delete');

    /**
     * @api {get} /api/game/force-delete/{id} Permanently Delete the Game
     * @apiName PermanentDeleteGame
     * @apiGroup Game
     *
     *  @apiHeader  {application/json} Accept format.
     * @apiHeader {Bearer} Authorization Your token here.
     *
     * @apiParam {Number} id Game identifier id
     * @apiSuccessExample Success-Response :
     *              {
     * "response": {
     *   "error": 0,
     *   "message": "Successful permanently delete the game",
     *   "data": {}
     * }
     *}
     *
     * @apiErrorExample Error-Response :
     *                  {
     *                       "response": {
     *                         "error": 1,
     *                         "message": "An error occured caused by : SQLSTATE[23000]: Integrity constraint violation: 1048 Column 'university_name' cannot be null (SQL: insert into `university` (`university_name`, `address`) values (, ))",
     *                         "data": {}
     *                       }
     *                    }
     *
     */
    Route::get('/game/force-delete/{id}', 'GameController@forceDelete');

/*------------------------------------
	CRUD Player
------------------------------------*/
    /**
     * @api {get} /api/player list of Players
     * @apiName PlayerList
     * @apiGroup Player
     *
     *   @apiHeader  {application/json} Accept format.
     * @apiHeader {Bearer} Authorization Your token here.
     *
     * @apiParam {Number} page the page
     * @apiSuccessExample Success-Response :
     * {
    "error": false,
    "message": "List of Player",
    "data": {
    "list_player": [
    {
    "id": 1,
    "game_id": 1,
    "player_name": "Point Blank",
    "score": 1000,
    "game": {
    "id": 1,
    "game_name": "Bermain BErsama"
    }
    },
    {
    "id": 2,
    "game_id": 1,
    "player_name": "Sukardi",
    "score": 1001,
    "game": {
    "id": 1,
    "game_name": "Bermain BErsama"
    }
    },
    {
    "id": 3,
    "game_id": 1,
    "player_name": "Sumijan",
    "score": 290,
    "game": {
    "id": 1,
    "game_name": "Bermain BErsama"
    }
    }
    ],
    "page": "1"
    }
    }
     *
     * @apiErrorExample Error-Response :
     *                  {
     *                       "response": {
     *                         "error": 1,
     *                         "message": "An error occured caused by : SQLSTATE[23000]: Integrity constraint violation: 1048 Column 'university_name' cannot be null (SQL: insert into `university` (`university_name`, `address`) values (, ))",
     *                         "data": {}
     *                       }
     *                    }
     *
     */
    Route::get('/player', 'PlayerController@data');

    /**
     * @api {get} /api/player/{id} Show Player details
     * @apiName PlayerDetail
     * @apiGroup Player
     *
     *  @apiHeader  {application/json} Accept format.
     * @apiHeader {Bearer} Authorization Your token here.
     *
     * @apiParam {Number} id Player identifier id
     * @apiSuccessExample Success-Response :
     *              {
     * "response": {
     *   "error": false,
     *   "message": "Detail of Player",
     *   "data": {
    "id": 1,
    "game_id": 1,
    "player_name": "Point Blank",
    "score": 1000,
    "game": {
    "id": 1,
    "game_name": "Bermain BErsama"
    }
    }
     * }
     *}
     *
     * @apiErrorExample Error-Response :
     *                  {
     *                       "response": {
     *                         "error": 1,
     *                         "message": "An error occured caused by : SQLSTATE[23000]: Integrity constraint violation: 1048 Column 'university_name' cannot be null (SQL: insert into `university` (`university_name`, `address`) values (, ))",
     *                         "data": {}
     *                       }
     *                    }
     *
     */
    Route::get('/player/{id}', 'PlayerController@detail');

    /**
     * @api {post} /api/player/create Create a new Player
     * @apiName CreatePlayer
     * @apiGroup Player
     *
     *  @apiHeader  {application/json} Accept format.
     * @apiHeader {Bearer} Authorization Your token here.
     *
     * @apiParam {String} player_name The Player Name
     * @apiParam {Number} game_id the game which player was played
     * @apiParam {Number} score the player score of the game
     * @apiSuccessExample Success-Response :
     * {
    "error": false,
    "message": "Successfully adding new Player",
    "data": {
    "player": {
    "player_name": "Game Tiga 4",
    "game_id": "3",
    "score": "1023",
    "id": 12
    }
    }

     *
     * @apiErrorExample Error-Response :
     *                  {
     *                       "response": {
     *                         "error": 1,
     *                         "message": "An error occured caused by : SQLSTATE[23000]: Integrity constraint violation: 1048 Column 'university_name' cannot be null (SQL: insert into `university` (`university_name`, `address`) values (, ))",
     *                         "data": {}
     *                       }
     *                    }
     *
     */
    Route::post('/player/create', 'PlayerController@create');

    /**
     * @api {post} /api/player/update Update the Player Profile
     * @apiName UpdatePlayer
     * @apiGroup Player
     *
     *   @apiHeader  {application/json} Accept format.
     * @apiHeader {Bearer} Authorization Your token here.
     *
     * @apiParam {Number} id Player identifier id
     * @apiParam {String} player_name The Player Name
     * @apiParam {Number} game_id the game which player was played
     * @apiParam {Number} score the player score of the game
     * @apiSuccessExample Success-Response :
     * {
    "error": false,
    "message": "Successfully adding new Player",
    "data": {
    "player": {
    "player_name": "Game Tiga 4",
    "game_id": "3",
    "score": "1023",
    "id": 12
    }
    }
     *
     * @apiErrorExample Error-Response :
     *                  {
     *                       "response": {
     *                         "error": 1,
     *                         "message": "An error occured caused by : SQLSTATE[23000]: Integrity constraint violation: 1048 Column 'university_name' cannot be null (SQL: insert into `university` (`university_name`, `address`) values (, ))",
     *                         "data": {}
     *                       }
     *                    }
     *
     */
    Route::post('/player/update', 'PlayerController@update');

    /**
     * @api {get} /player/delete/{id} temporarily Delete the Player
     * @apiName TemporaryDeletePlayer
     * @apiGroup Player
     *
     *  @apiHeader  {application/json} Accept format.
     * @apiHeader {Bearer} Authorization Your token here.
     *
     * @apiParam {Number} id Player identifier id
     * @apiSuccessExample Success-Response :
     *              {
     * "response": {
     *   "error": false,
     *   "message": "Successfully temporary deleted the player's account",
     *   "data": {}
     * }
     *}
     *
     * @apiErrorExample Error-Response :
     *                  {
     *                       "response": {
     *                         "error": 1,
     *                         "message": "An error occured caused by : SQLSTATE[23000]: Integrity constraint violation: 1048 Column 'university_name' cannot be null (SQL: insert into `university` (`university_name`, `address`) values (, ))",
     *                         "data": {}
     *                       }
     *                    }
     *
     */
    Route::get('/player/delete/{id}', 'PlayerController@delete');

    /**
     * @api {get} /api/player/force-delete/{id} Permanently Delete the Player's account
     * @apiName PermanentDeletePlayer
     * @apiGroup Player
     *
     *  @apiHeader  {application/json} Accept format.
     * @apiHeader {Bearer} Authorization Your token here.
     *
     * @apiParam {Number} id Player identifier id
     * @apiSuccessExample Success-Response :
     *              {
     * "response": {
     *   "error": 0,
     *   "message": "Successful permanently delete the player's account",
     *   "data": {}
     * }
     *}
     *
     * @apiErrorExample Error-Response :
     *                  {
     *                       "response": {
     *                         "error": 1,
     *                         "message": "An error occured caused by : SQLSTATE[23000]: Integrity constraint violation: 1048 Column 'university_name' cannot be null (SQL: insert into `university` (`university_name`, `address`) values (, ))",
     *                         "data": {}
     *                       }
     *                    }
     *
     */
    Route::get('/player/force-delete/{id}', 'PlayerController@forceDelete');

});

