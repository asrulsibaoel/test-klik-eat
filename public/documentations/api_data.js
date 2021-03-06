define({ "api": [
  {
    "type": "post",
    "url": "/account/login",
    "title": "Login to get access token",
    "name": "GetAuthorizationKey",
    "group": "Authorization",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>The User's email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>The User's password</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response :",
          "content": "{\n\"error\": false,\n\"message\": \"Login User Successfully\",\n\"data\": {\n\"user\": {\n\"id\": 1,\n\"name\": \"admin\",\n\"email\": \"admin@admin.com\",\n\"fb_token\": null,\n\"gender\": null,\n\"birtdate\": null,\n\"phone\": null,\n\"address\": null,\n\"photo\": null,\n\"created_at\": \"2017-03-07 09:37:21\"\n},\n\"token\": \"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImU1Y2ViMDNjNTlhMjZlMDY1M2UyNTQzMGNkNjI2ZTZlNmEyYmJjZWVmYWJlYWVkOGIwYmI0OWRiNmU4YjBmZjI2ZWQ0ZTViMTE1YjBlNzc0In0.eyJhdWQiOiIxIiwianRpIjoiZTVjZWIwM2M1OWEyNmUwNjUzZTI1NDMwY2Q2MjZlNmU2YTJiYmNlZWZhYmVhZWQ4YjBiYjQ5ZGI2ZThiMGZmMjZlZDRlNWIxMTViMGU3NzQiLCJpYXQiOjE0ODg5MDk1MjgsIm5iZiI6MTQ4ODkwOTUyOCwiZXhwIjoxNTIwNDQ1NTI3LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.UULMtDPflE4d6JN7rD1La83gu1NlcMvYI3R2EwfcjAPnU4le9N2MJIg_bSSOZGcyY7x8wTqFegcB17szsBfC_Yh5HsMmBmzmOtjRl8hwLhEgwmI7VMfLTDcua2S4oEqHXIXdJ-u17pULfVT1vxgSvN-mm6DC9HpWO2ZbJRSoMs6DqNow8AyFp5oD6gE51vLKDfAzT-eWs8DDvCTs5cVuPbc4j5RIdS4dKHzmVkG9_k3JF83QLxCKb3KAesvqK3II2FW-Zy0Un_OUhqtdgBMDghIsSOzrbXseEwEtoXG5Q2g2t-kP8K3mCU-Cg4Go2p6bQlpD0FPE8kKoQNRPQ93F1a2HayJdd1dWa9RorVgfPuS8SePSujwNjwM5zmN1I3supPlOSd_w0Uzfgg5UZSL_HVicV1i2g_j0nvNmerMbxqrUOcUj3EBwVt8Fm38dRpiQV-yqcOCUNpmtQLJ2rSrY-UWzT7egVAXFRK8JIf3W3W_-L68ks1ef8Ho_p9Bpiw1AebWSZHHJcTIPJp8xrAYaSuYJjd6EOBCvyRabz1tTJkNxZdNFVcE33UXE17AyvD7zKQDqCPWnIMy7rWaedqP-VspIOD09CJoxk8KpzW2X9Z0usTRo2brqFvjHIfHX0ug2QDUvSa2LV8K8aiCcE_m3NA5MkMmXGd3_WwdJVcTN234\"\n}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response :",
          "content": "{\n     \"response\": {\n       \"error\": 1,\n       \"message\": \"An error occured caused by : SQLSTATE[23000]: Integrity constraint violation: 1048 Column 'university_name' cannot be null (SQL: insert into `university` (`university_name`, `address`) values (, ))\",\n       \"data\": {}\n     }\n  }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/web.php",
    "groupTitle": "Authorization"
  },
  {
    "type": "post",
    "url": "/account/register",
    "title": "Register the user",
    "name": "RegisterUser",
    "group": "Authorization",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The User's name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>The User's email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>The User's password</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response :",
          "content": "{\n\"error\": false,\n\"message\": \"Detail of User\",\n\"data\": {\n\"user\": {\n\"id\": 1,\n\"name\": \"admin\",\n\"email\": \"admin@admin.com\",\n\"fb_token\": null,\n\"gender\": null,\n\"birtdate\": null,\n\"phone\": null,\n\"address\": null,\n\"photo\": null,\n\"created_at\": \"2017-03-07 09:37:21\"\n}\n}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response :",
          "content": "{\n     \"response\": {\n       \"error\": 1,\n       \"message\": \"An error occured caused by : SQLSTATE[23000]: Integrity constraint violation: 1048 Column 'university_name' cannot be null (SQL: insert into `university` (`university_name`, `address`) values (, ))\",\n       \"data\": {}\n     }\n  }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/web.php",
    "groupTitle": "Authorization"
  },
  {
    "type": "get",
    "url": "/api/game/{id}",
    "title": "Show the game",
    "name": "DetailGame",
    "group": "Game",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "application/json",
            "optional": false,
            "field": "Accept",
            "description": "<p>format.</p>"
          },
          {
            "group": "Header",
            "type": "Bearer",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Your token here.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Game identifier ID</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response :",
          "content": "{\n\"error\": false,\n\"message\": \"Detail of Game\",\n\"data\": {\n\"game\": {\n\"id\": 1,\n\"game_name\": \"Bermain BErsama\"\n}\n}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response :",
          "content": "{\n     \"response\": {\n       \"error\": 1,\n       \"message\": \"An error occured caused by : SQLSTATE[23000]: Integrity constraint violation: 1048 Column 'university_name' cannot be null (SQL: insert into `university` (`university_name`, `address`) values (, ))\",\n       \"data\": {}\n     }\n  }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Game"
  },
  {
    "type": "get",
    "url": "/api/game",
    "title": "Game List",
    "name": "GameList",
    "group": "Game",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "application/json",
            "optional": false,
            "field": "Accept",
            "description": "<p>format.</p>"
          },
          {
            "group": "Header",
            "type": "Bearer",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Your token here.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>The list Page</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response :",
          "content": "{\n    \"error\": false,\n    \"message\": \"List of Game\",\n    \"data\": {\n    \"list_game\": [\n    {\n    \"id\": 1,\n    \"game_name\": \"Bermain BErsama\",\n    \"player\": [\n    {\n    \"id\": 1,\n    \"game_id\": 1,\n    \"player_name\": \"Point Blank\",\n    \"score\": 1000\n    },\n    {\n    \"id\": 2,\n    \"game_id\": 1,\n    \"player_name\": \"Sukardi\",\n    \"score\": 1001\n    },\n    {\n    \"id\": 3,\n    \"game_id\": 1,\n    \"player_name\": \"Sumijan\",\n    \"score\": 290\n    },\n    {\n    \"id\": 8,\n    \"game_id\": 1,\n    \"player_name\": \"Djajak\",\n    \"score\": 789\n    }\n    ],\n    \"count_player\": [\n    {\n    \"game_id\": 1,\n    \"total_player\": 4\n    }\n    ]\n    },\n    {\n    \"id\": 2,\n    \"game_name\": \"Point Blank\",\n    \"player\": [\n    {\n    \"id\": 4,\n    \"game_id\": 2,\n    \"player_name\": \"Sumijan Dua\",\n    \"score\": 290\n    },\n    {\n    \"id\": 5,\n    \"game_id\": 2,\n    \"player_name\": \"Sumijan Tiga\",\n    \"score\": 290\n    },\n    {\n    \"id\": 6,\n    \"game_id\": 2,\n    \"player_name\": \"Sumijan Utama\",\n    \"score\": 500\n    }\n    ],\n    \"count_player\": [\n    {\n    \"game_id\": 2,\n    \"total_player\": 3\n    }\n    ]\n    },\n    {\n    \"id\": 3,\n    \"game_name\": \"Perfect World\",\n    \"player\": [\n    {\n    \"id\": 7,\n    \"game_id\": 3,\n    \"player_name\": \"Joko Driyono\",\n    \"score\": 789\n    }\n    ],\n    \"count_player\": [\n    {\n    \"game_id\": 3,\n    \"total_player\": 1\n    }\n    ]\n    }\n    ],\n    \"page\": \"1\"\n    }\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response :",
          "content": "{\n     \"response\": {\n       \"error\": 1,\n       \"message\": \"An error occured caused by : SQLSTATE[23000]: Integrity constraint violation: 1048 Column 'university_name' cannot be null (SQL: insert into `university` (`university_name`, `address`) values (, ))\",\n       \"data\": {}\n     }\n  }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Game"
  },
  {
    "type": "post",
    "url": "/game/update",
    "title": "Update the Game",
    "name": "GameUpdate",
    "group": "Game",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "application/json",
            "optional": false,
            "field": "Accept",
            "description": "<p>format.</p>"
          },
          {
            "group": "Header",
            "type": "Bearer",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Your token here.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Student identifier id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "game_name",
            "description": "<p>The Game Name</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response :",
          "content": "{\n    \"error\": false,\n    \"message\": \"Successfully updating The Game\",\n    \"data\": {\n    \"game\": {\n    \"game_name\": \"Game Tiga 4\",\n    \"id\": 12\n    }\n    }\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response :",
          "content": "{\n     \"response\": {\n       \"error\": 1,\n       \"message\": \"An error occured caused by : SQLSTATE[23000]: Integrity constraint violation: 1048 Column 'university_name' cannot be null (SQL: insert into `university` (`university_name`, `address`) values (, ))\",\n       \"data\": {}\n     }\n  }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Game"
  },
  {
    "type": "get",
    "url": "/api/game/leader-board",
    "title": "Show the Leader Board",
    "name": "LeaderBoard",
    "group": "Game",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "application/json",
            "optional": false,
            "field": "Accept",
            "description": "<p>format.</p>"
          },
          {
            "group": "Header",
            "type": "Bearer",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Your token here.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response :",
          "content": "{\n   \"error\": false,\n   \"message\": \"List of Game\",\n   \"data\": {\n   \"list_game\": [\n   {\n   \"id\": 3,\n   \"game_name\": \"Perfect World\",\n   \"players\": 5,\n   \"best_player\": {\n   \"id\": 12,\n   \"game_id\": 3,\n   \"player_name\": \"Game Tiga 4\",\n   \"score\": 1023\n   },\n   \"player\": [\n   {\n   \"id\": 7,\n   \"game_id\": 3,\n   \"player_name\": \"Joko Driyono\",\n   \"score\": 789\n   },\n   {\n   \"id\": 9,\n   \"game_id\": 3,\n   \"player_name\": \"Game Tiga 1\",\n   \"score\": 789\n   },\n   {\n   \"id\": 10,\n   \"game_id\": 3,\n   \"player_name\": \"Game Tiga 2\",\n   \"score\": 900\n   },\n   {\n   \"id\": 11,\n   \"game_id\": 3,\n   \"player_name\": \"Game Tiga 3\",\n   \"score\": 1000\n   },\n   {\n   \"id\": 12,\n   \"game_id\": 3,\n   \"player_name\": \"Game Tiga 4\",\n   \"score\": 1023\n   }\n   ]\n   },\n   {\n   \"id\": 1,\n   \"game_name\": \"Bermain BErsama\",\n   \"players\": 4,\n   \"best_player\": {\n   \"id\": 2,\n   \"game_id\": 1,\n   \"player_name\": \"Sukardi\",\n   \"score\": 1001\n   },\n   \"player\": [\n   {\n   \"id\": 1,\n   \"game_id\": 1,\n   \"player_name\": \"Point Blank\",\n   \"score\": 1000\n   },\n   {\n   \"id\": 2,\n   \"game_id\": 1,\n   \"player_name\": \"Sukardi\",\n   \"score\": 1001\n   },\n   {\n   \"id\": 3,\n   \"game_id\": 1,\n   \"player_name\": \"Sumijan\",\n   \"score\": 290\n   },\n   {\n   \"id\": 8,\n   \"game_id\": 1,\n   \"player_name\": \"Djajak\",\n   \"score\": 789\n   }\n   ]\n   },\n   {\n   \"id\": 2,\n   \"game_name\": \"Point Blank\",\n   \"players\": 3,\n   \"best_player\": {\n   \"id\": 6,\n   \"game_id\": 2,\n   \"player_name\": \"Sumijan Utama\",\n   \"score\": 500\n   },\n   \"player\": [\n   {\n   \"id\": 4,\n   \"game_id\": 2,\n   \"player_name\": \"Sumijan Dua\",\n   \"score\": 290\n   },\n   {\n   \"id\": 5,\n   \"game_id\": 2,\n   \"player_name\": \"Sumijan Tiga\",\n   \"score\": 290\n   },\n   {\n   \"id\": 6,\n   \"game_id\": 2,\n   \"player_name\": \"Sumijan Utama\",\n   \"score\": 500\n   }\n   ]\n   }\n   ],\n   \"page\": 1\n   }\n   }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response :",
          "content": "{\n     \"response\": {\n       \"error\": 1,\n       \"message\": \"An error occured caused by : SQLSTATE[23000]: Integrity constraint violation: 1048 Column 'university_name' cannot be null (SQL: insert into `university` (`university_name`, `address`) values (, ))\",\n       \"data\": {}\n     }\n  }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Game"
  },
  {
    "type": "post",
    "url": "/game/create",
    "title": "Create a new Game",
    "name": "NewGame",
    "group": "Game",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "application/json",
            "optional": false,
            "field": "Accept",
            "description": "<p>format.</p>"
          },
          {
            "group": "Header",
            "type": "Bearer",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Your token here.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "game_name",
            "description": "<p>The Game Name</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response :",
          "content": "{\n    \"error\": false,\n    \"message\": \"Successfully adding new Game\",\n    \"data\": {\n    \"game\": {\n    \"game_name\": \"Game Tiga 4\",\n    \"id\": 12\n    }\n    }\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response :",
          "content": "{\n     \"response\": {\n       \"error\": 1,\n       \"message\": \"An error occured caused by : SQLSTATE[23000]: Integrity constraint violation: 1048 Column 'university_name' cannot be null (SQL: insert into `university` (`university_name`, `address`) values (, ))\",\n       \"data\": {}\n     }\n  }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Game"
  },
  {
    "type": "get",
    "url": "/api/game/force-delete/{id}",
    "title": "Permanently Delete the Game",
    "name": "PermanentDeleteGame",
    "group": "Game",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "application/json",
            "optional": false,
            "field": "Accept",
            "description": "<p>format.</p>"
          },
          {
            "group": "Header",
            "type": "Bearer",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Your token here.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Game identifier id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response :",
          "content": "             {\n\"response\": {\n  \"error\": 0,\n  \"message\": \"Successful permanently delete the game\",\n  \"data\": {}\n}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response :",
          "content": "{\n     \"response\": {\n       \"error\": 1,\n       \"message\": \"An error occured caused by : SQLSTATE[23000]: Integrity constraint violation: 1048 Column 'university_name' cannot be null (SQL: insert into `university` (`university_name`, `address`) values (, ))\",\n       \"data\": {}\n     }\n  }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Game"
  },
  {
    "type": "get",
    "url": "/api/game/delete/{id}",
    "title": "Temporary Delete the Game",
    "name": "TemporaryDeleteGame",
    "group": "Game",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "application/json",
            "optional": false,
            "field": "Accept",
            "description": "<p>format.</p>"
          },
          {
            "group": "Header",
            "type": "Bearer",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Your token here.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Game identifier id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response :",
          "content": "             {\n\"response\": {\n  \"error\": 0,\n  \"message\": \"Successfully temporary deleted the game\",\n  \"data\": {}\n}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response :",
          "content": "{\n     \"response\": {\n       \"error\": 1,\n       \"message\": \"An error occured caused by : SQLSTATE[23000]: Integrity constraint violation: 1048 Column 'university_name' cannot be null (SQL: insert into `university` (`university_name`, `address`) values (, ))\",\n       \"data\": {}\n     }\n  }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Game"
  },
  {
    "type": "post",
    "url": "/api/player/create",
    "title": "Create a new Player",
    "name": "CreatePlayer",
    "group": "Player",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "application/json",
            "optional": false,
            "field": "Accept",
            "description": "<p>format.</p>"
          },
          {
            "group": "Header",
            "type": "Bearer",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Your token here.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "player_name",
            "description": "<p>The Player Name</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "game_id",
            "description": "<p>the game which player was played</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "score",
            "description": "<p>the player score of the game</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response :",
          "content": "{\n    \"error\": false,\n    \"message\": \"Successfully adding new Player\",\n    \"data\": {\n    \"player\": {\n    \"player_name\": \"Game Tiga 4\",\n    \"game_id\": \"3\",\n    \"score\": \"1023\",\n    \"id\": 12\n    }\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response :",
          "content": "{\n     \"response\": {\n       \"error\": 1,\n       \"message\": \"An error occured caused by : SQLSTATE[23000]: Integrity constraint violation: 1048 Column 'university_name' cannot be null (SQL: insert into `university` (`university_name`, `address`) values (, ))\",\n       \"data\": {}\n     }\n  }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Player"
  },
  {
    "type": "get",
    "url": "/api/player/force-delete/{id}",
    "title": "Permanently Delete the Player's account",
    "name": "PermanentDeletePlayer",
    "group": "Player",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "application/json",
            "optional": false,
            "field": "Accept",
            "description": "<p>format.</p>"
          },
          {
            "group": "Header",
            "type": "Bearer",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Your token here.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Player identifier id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response :",
          "content": "             {\n\"response\": {\n  \"error\": 0,\n  \"message\": \"Successful permanently delete the player's account\",\n  \"data\": {}\n}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response :",
          "content": "{\n     \"response\": {\n       \"error\": 1,\n       \"message\": \"An error occured caused by : SQLSTATE[23000]: Integrity constraint violation: 1048 Column 'university_name' cannot be null (SQL: insert into `university` (`university_name`, `address`) values (, ))\",\n       \"data\": {}\n     }\n  }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Player"
  },
  {
    "type": "get",
    "url": "/api/player/{id}",
    "title": "Show Player details",
    "name": "PlayerDetail",
    "group": "Player",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "application/json",
            "optional": false,
            "field": "Accept",
            "description": "<p>format.</p>"
          },
          {
            "group": "Header",
            "type": "Bearer",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Your token here.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Player identifier id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response :",
          "content": "             {\n\"response\": {\n  \"error\": false,\n  \"message\": \"Detail of Player\",\n  \"data\": {\n    \"id\": 1,\n    \"game_id\": 1,\n    \"player_name\": \"Point Blank\",\n    \"score\": 1000,\n    \"game\": {\n    \"id\": 1,\n    \"game_name\": \"Bermain BErsama\"\n    }\n    }\n}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response :",
          "content": "{\n     \"response\": {\n       \"error\": 1,\n       \"message\": \"An error occured caused by : SQLSTATE[23000]: Integrity constraint violation: 1048 Column 'university_name' cannot be null (SQL: insert into `university` (`university_name`, `address`) values (, ))\",\n       \"data\": {}\n     }\n  }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Player"
  },
  {
    "type": "get",
    "url": "/api/player",
    "title": "list of Players",
    "name": "PlayerList",
    "group": "Player",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "application/json",
            "optional": false,
            "field": "Accept",
            "description": "<p>format.</p>"
          },
          {
            "group": "Header",
            "type": "Bearer",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Your token here.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>the page</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response :",
          "content": "{\n    \"error\": false,\n    \"message\": \"List of Player\",\n    \"data\": {\n    \"list_player\": [\n    {\n    \"id\": 1,\n    \"game_id\": 1,\n    \"player_name\": \"Point Blank\",\n    \"score\": 1000,\n    \"game\": {\n    \"id\": 1,\n    \"game_name\": \"Bermain BErsama\"\n    }\n    },\n    {\n    \"id\": 2,\n    \"game_id\": 1,\n    \"player_name\": \"Sukardi\",\n    \"score\": 1001,\n    \"game\": {\n    \"id\": 1,\n    \"game_name\": \"Bermain BErsama\"\n    }\n    },\n    {\n    \"id\": 3,\n    \"game_id\": 1,\n    \"player_name\": \"Sumijan\",\n    \"score\": 290,\n    \"game\": {\n    \"id\": 1,\n    \"game_name\": \"Bermain BErsama\"\n    }\n    }\n    ],\n    \"page\": \"1\"\n    }\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response :",
          "content": "{\n     \"response\": {\n       \"error\": 1,\n       \"message\": \"An error occured caused by : SQLSTATE[23000]: Integrity constraint violation: 1048 Column 'university_name' cannot be null (SQL: insert into `university` (`university_name`, `address`) values (, ))\",\n       \"data\": {}\n     }\n  }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Player"
  },
  {
    "type": "get",
    "url": "/player/delete/{id}",
    "title": "temporarily Delete the Player",
    "name": "TemporaryDeletePlayer",
    "group": "Player",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "application/json",
            "optional": false,
            "field": "Accept",
            "description": "<p>format.</p>"
          },
          {
            "group": "Header",
            "type": "Bearer",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Your token here.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Player identifier id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response :",
          "content": "             {\n\"response\": {\n  \"error\": false,\n  \"message\": \"Successfully temporary deleted the player's account\",\n  \"data\": {}\n}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response :",
          "content": "{\n     \"response\": {\n       \"error\": 1,\n       \"message\": \"An error occured caused by : SQLSTATE[23000]: Integrity constraint violation: 1048 Column 'university_name' cannot be null (SQL: insert into `university` (`university_name`, `address`) values (, ))\",\n       \"data\": {}\n     }\n  }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Player"
  },
  {
    "type": "post",
    "url": "/api/player/update",
    "title": "Update the Player Profile",
    "name": "UpdatePlayer",
    "group": "Player",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "application/json",
            "optional": false,
            "field": "Accept",
            "description": "<p>format.</p>"
          },
          {
            "group": "Header",
            "type": "Bearer",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Your token here.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Player identifier id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "player_name",
            "description": "<p>The Player Name</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "game_id",
            "description": "<p>the game which player was played</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "score",
            "description": "<p>the player score of the game</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response :",
          "content": "{\n    \"error\": false,\n    \"message\": \"Successfully adding new Player\",\n    \"data\": {\n    \"player\": {\n    \"player_name\": \"Game Tiga 4\",\n    \"game_id\": \"3\",\n    \"score\": \"1023\",\n    \"id\": 12\n    }\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response :",
          "content": "{\n     \"response\": {\n       \"error\": 1,\n       \"message\": \"An error occured caused by : SQLSTATE[23000]: Integrity constraint violation: 1048 Column 'university_name' cannot be null (SQL: insert into `university` (`university_name`, `address`) values (, ))\",\n       \"data\": {}\n     }\n  }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Player"
  },
  {
    "type": "post",
    "url": "/api/account/edit_profile",
    "title": "Editing the User's profile",
    "name": "EditProfile",
    "group": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "application/json",
            "optional": false,
            "field": "Accept",
            "description": "<p>format.</p>"
          },
          {
            "group": "Header",
            "type": "Bearer",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Your token here.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>User identifier id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The User's name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>The User's email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>The User's password</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response :",
          "content": "{\n    \"error\": false,\n    \"message\": \"Detail of User\",\n    \"data\": {\n    \"user\": {\n    \"id\": 1,\n    \"name\": \"admin\",\n    \"email\": \"admin@admin.com\",\n    \"fb_token\": null,\n    \"gender\": null,\n    \"birtdate\": null,\n    \"phone\": null,\n    \"address\": null,\n    \"photo\": null,\n    \"created_at\": \"2017-03-07 09:37:21\"\n    }\n    }\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response :",
          "content": "{\n     \"response\": {\n       \"error\": 1,\n       \"message\": \"An error occured caused by : SQLSTATE[23000]: Integrity constraint violation: 1048 Column 'university_name' cannot be null (SQL: insert into `university` (`university_name`, `address`) values (, ))\",\n       \"data\": {}\n     }\n  }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/api/account/profile",
    "title": "Show the user's profile",
    "name": "UserProfile",
    "group": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "application/json",
            "optional": false,
            "field": "Accept",
            "description": "<p>format.</p>"
          },
          {
            "group": "Header",
            "type": "Bearer",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Your token here.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response :",
          "content": "{\n    \"error\": false,\n    \"message\": \"Detail of User\",\n    \"data\": {\n    \"user\": {\n    \"id\": 1,\n    \"name\": \"admin\",\n    \"email\": \"admin@admin.com\",\n    \"fb_token\": null,\n    \"gender\": null,\n    \"birtdate\": null,\n    \"phone\": null,\n    \"address\": null,\n    \"photo\": null,\n    \"created_at\": \"2017-03-07 09:37:21\"\n    }\n    }\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response :",
          "content": "{\n     \"response\": {\n       \"error\": 1,\n       \"message\": \"An error occured caused by : SQLSTATE[23000]: Integrity constraint violation: 1048 Column 'university_name' cannot be null (SQL: insert into `university` (`university_name`, `address`) values (, ))\",\n       \"data\": {}\n     }\n  }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "User"
  }
] });
