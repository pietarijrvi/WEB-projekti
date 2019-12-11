define({ "api": [
  {
    "type": "get",
    "url": "/scores/top/alltime",
    "title": "Request all time best scores",
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
      }
    },
    "version": "0.0.0",
    "filename": "server/routes/api/game_reaction/index.js",
    "groupTitle": "Reaction_game",
    "name": "GetScoresTopAlltime"
  },
  {
    "type": "get",
    "url": "scores/top/daily",
    "title": "Request current day best scores",
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
    "name": "GetScoresTopDaily"
  },
  {
    "type": "get",
    "url": "scores/top/monthly",
    "title": "Request monthly best scores",
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
    "name": "GetScoresTopMonthly"
  },
  {
    "type": "get",
    "url": "scores/user",
    "title": "Request best scores of the user",
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
    "name": "GetScoresUser"
  },
  {
    "type": "post",
    "url": "scores/",
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
    "name": "PostScores"
  },
  {
    "type": "get",
    "url": "/scores/top/alltime",
    "title": "Request all time best scores",
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
    "name": "GetScoresTopAlltime"
  },
  {
    "type": "get",
    "url": "scores/top/daily",
    "title": "Request current day best scores",
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
    "name": "GetScoresTopDaily"
  },
  {
    "type": "get",
    "url": "scores/top/monthly",
    "title": "Request monthly best scores",
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
    "name": "GetScoresTopMonthly"
  },
  {
    "type": "get",
    "url": "scores/user",
    "title": "Request best scores of the user",
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
    "name": "GetScoresUser"
  },
  {
    "type": "post",
    "url": "scores/",
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
    "name": "PostScores"
  }
] });
