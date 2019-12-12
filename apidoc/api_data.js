define({ "api": [
  {
    "type": "get",
    "url": "game_reaction/scores/top/daily",
    "title": "Request current day best scores, ascending order (best reaction time first)",
    "group": "Reaction_game",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "score",
            "description": "<p>score</p>"
          },
          {
            "group": "Success 200",
            "type": "Datetime",
            "optional": false,
            "field": "datetime",
            "description": "<p>datetime of the score submit.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Username.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     \"score\": 1112,\n     \"datetime\": \"2019-12-10T22:34:45.000Z\",\n     \"username\": \"anon\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "server/routes/api/game_reaction/index.js",
    "groupTitle": "Reaction_game",
    "name": "GetGame_reactionScoresTopDaily"
  },
  {
    "type": "get",
    "url": "game_reaction/scores/top/monthly",
    "title": "Request monthly best scores, ascending order (best reaction time first)",
    "group": "Reaction_game",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "score",
            "description": "<p>score</p>"
          },
          {
            "group": "Success 200",
            "type": "Datetime",
            "optional": false,
            "field": "datetime",
            "description": "<p>datetime of the score submit.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Username.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/routes/api/game_reaction/index.js",
    "groupTitle": "Reaction_game",
    "name": "GetGame_reactionScoresTopMonthly"
  },
  {
    "type": "get",
    "url": "game_reaction/scores/user",
    "title": "Request 10 best scores of the user, ascending order (best reaction time first)",
    "group": "Reaction_game",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Users unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "score",
            "description": "<p>score</p>"
          },
          {
            "group": "Success 200",
            "type": "Datetime",
            "optional": false,
            "field": "datetime",
            "description": "<p>datetime of the score submit.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Username.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/routes/api/game_reaction/index.js",
    "groupTitle": "Reaction_game",
    "name": "GetGame_reactionScoresUser"
  },
  {
    "type": "get",
    "url": "scores/top/alltime",
    "title": "Request all time best scores, ascending order (best reaction time first)",
    "group": "Reaction_game",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "score",
            "description": "<p>score</p>"
          },
          {
            "group": "Success 200",
            "type": "Datetime",
            "optional": false,
            "field": "datetime",
            "description": "<p>datetime of the score submit.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Username.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"score\": 789,\n    \"datetime\": \"2019-12-11T13:53:17.000Z\",\n    \"username\": \"anon\"\n},\n{\n    \"score\": 1112,\n    \"datetime\": \"2019-12-10T22:34:45.000Z\",\n    \"username\": \"anon\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "server/routes/api/game_reaction/index.js",
    "groupTitle": "Reaction_game",
    "name": "GetScoresTopAlltime"
  },
  {
    "type": "post",
    "url": "game_reaction/scores/",
    "title": "Post score result",
    "group": "Reaction_game",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "score",
            "description": "<p>game score</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "userID",
            "description": "<p>Users unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Success",
            "description": "<p>message (score added).</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/routes/api/game_reaction/index.js",
    "groupTitle": "Reaction_game",
    "name": "PostGame_reactionScores"
  },
  {
    "type": "get",
    "url": "game_speedclick/scores/top/alltime",
    "title": "Request all time best scores (descending order, best score first).",
    "group": "Speedclick_game",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "time",
            "description": "<p>gameplay time</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "clicks",
            "description": "<p>amount of clicks</p>"
          },
          {
            "group": "Success 200",
            "type": "Datetime",
            "optional": false,
            "field": "datetime",
            "description": "<p>datetime of the score submit.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Username.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"time\": 5,\n    \"clicks\": 8,\n    \"datetime\": \"2019-12-10T23:46:57.000Z\",\n    \"username\": \"anon\"\n},\n{\n    \"time\": 5,\n    \"clicks\": 3,\n    \"datetime\": \"2019-12-11T13:53:35.000Z\",\n    \"username\": \"anon\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "server/routes/api/game_speedclick/index.js",
    "groupTitle": "Speedclick_game",
    "name": "GetGame_speedclickScoresTopAlltime"
  },
  {
    "type": "get",
    "url": "game_speedclick/scores/top/daily",
    "title": "Request current day best scores (descending order, best score first)",
    "group": "Speedclick_game",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "time",
            "description": "<p>gameplay time</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "clicks",
            "description": "<p>amount of clicks</p>"
          },
          {
            "group": "Success 200",
            "type": "Datetime",
            "optional": false,
            "field": "datetime",
            "description": "<p>datetime of the score submit.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Username.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/routes/api/game_speedclick/index.js",
    "groupTitle": "Speedclick_game",
    "name": "GetGame_speedclickScoresTopDaily"
  },
  {
    "type": "get",
    "url": "game_speedclick/scores/top/monthly",
    "title": "Request monthly best scores (descending order, best score first)",
    "group": "Speedclick_game",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "time",
            "description": "<p>gameplay time</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "clicks",
            "description": "<p>amount of clicks</p>"
          },
          {
            "group": "Success 200",
            "type": "Datetime",
            "optional": false,
            "field": "datetime",
            "description": "<p>datetime of the score submit.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Username.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/routes/api/game_speedclick/index.js",
    "groupTitle": "Speedclick_game",
    "name": "GetGame_speedclickScoresTopMonthly"
  },
  {
    "type": "get",
    "url": "game_speedclick/scores/user",
    "title": "Request 10 best scores of the user (descending order, best score first)",
    "group": "Speedclick_game",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Users unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "time",
            "description": "<p>gameplay time</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "clicks",
            "description": "<p>amount of clicks</p>"
          },
          {
            "group": "Success 200",
            "type": "Datetime",
            "optional": false,
            "field": "datetime",
            "description": "<p>datetime of the score submit.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Username.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/routes/api/game_speedclick/index.js",
    "groupTitle": "Speedclick_game",
    "name": "GetGame_speedclickScoresUser"
  },
  {
    "type": "post",
    "url": "game_speedclick/scores/",
    "title": "Post score result",
    "group": "Speedclick_game",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "time",
            "description": "<p>gameplay time</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "clicks",
            "description": "<p>amount of clicks</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "userID",
            "description": "<p>Users unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Success",
            "description": "<p>message (score added).</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/routes/api/game_speedclick/index.js",
    "groupTitle": "Speedclick_game",
    "name": "PostGame_speedclickScores"
  }
] });
