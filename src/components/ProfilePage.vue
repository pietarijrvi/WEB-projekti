npm<template>
    <div id="profilePage">
        <div id="profile">{{ username }}</div>
        <div id="scores">
            <b-card title="Score Board" no-body>
                <b-card-header header-tag="nav">
                    <b-nav card-header tabs>
                        <b-nav-item v-bind:active="board === 'react'" v-on:click="board = 'react'">Reaction Game</b-nav-item>
                        <b-nav-item v-bind:active="board === 'speed'" v-on:click="board = 'speed'">Speed Game</b-nav-item>
                    </b-nav>
                </b-card-header>

                <b-card-body class="text-center">
                    <b-table v-if="board === 'speed'" striped hover :items="speedScores" :fields="speedFields"></b-table>
                    <b-table v-if="board === 'react'" striped hover :items="reactionScores" :fields="reactionFields"></b-table>
                </b-card-body>
            </b-card>

        </div>
    </div>
</template>

<script>
    export default {
        name: 'ProfilePage',
        data() {
            return {
                username: "",
                speedScores: [],
                reactionScores: [],
                speedFields: ['time', 'clicks', 'clicksPerSecond', 'date'],
                reactionFields: ['score', 'date'],
                board: 'react'
            }
        },
        created() {
            //calls info from the database
            this.username = "guest";
            this.getScores('speedclick', this.getUserID());
            this.getScores('reaction', this.getUserID())
        },
        methods: {
          /**
           * Fetches the scores of the given user in the given game and puts them into the score board
           * @param game the game scores that are fetched
           * @param userID the ID of the user that should be fetched
           * @returns {Promise<void>}
           */
          async getScores(game, userID) {
            const t = this;
            try {
              const response = await fetch('http://localhost:8081/api/game_' + game + '/scores/user?userID=' + userID);
              await response.json().then( function(result) {

                result.forEach( function(item) {

                  if (game === 'speedclick') {
                    item.clicksPerSecond = Math.round(item.clicks / item.time * 100) / 100;
                  }

                  let date = new Date(item.datetime);
                  item.date = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
                });

                if (game === 'speedclick') {
                  t.speedScores = result;
                }
                else if (game === 'reaction') {
                  t.reactionScores = result;
                }
                t.username = result[0].username;
              });
            } catch (e) {
              throw e;
            }
          },
          /**
           * returns the ID of the logged in user [PLACEHOLDER]
           * @returns {number}
           */
          getUserID() {
            return 1;
          }
        }
    };


</script>

<style scoped>
    #profile {
        font-size: 20px;
        font-weight: 600;
        padding: 1rem;
    }
</style>