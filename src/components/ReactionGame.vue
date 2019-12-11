<template>
    <div id="gamePage">
        <div id="reactionZone" v-on:mousedown="clickGame" v-bind:style="{backgroundColor: color}">
            <div id="timer">
                <span v-if="showTimer" class="millis">{{milliseconds + 'ms'}}</span>
                <span v-else class="millis">{{message}}</span>
                <span id="msg2">{{msg2}}</span>
                <span v-if="showTimer" id="average">Average: {{average}}</span>
            </div>
        </div>
        <b-progress :value="this.times" :max=5 height="2.5em" variant="info" striped :animated="true"></b-progress>
        <div id="scores">
            <b-card title="Score Board" no-body>
                <b-card-header header-tag="nav">
                    <b-nav card-header tabs>
                        <b-nav-item v-bind:active="board === 'daily'" v-on:click="board = 'daily'">Daily best</b-nav-item>
                        <b-nav-item v-bind:active="board === 'alltime'" v-on:click="board = 'alltime'">All time best</b-nav-item>
                    </b-nav>
                </b-card-header>

                <b-card-body class="text-center">
                    <b-table v-if="board === 'daily'" striped hover :items="dailyScores" :fields="reactionFields"></b-table>
                    <b-table v-if="board === 'alltime'" striped hover :items="alltimeScores" :fields="reactionFields"></b-table>
                </b-card-body>
            </b-card>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ReactionGame",
        data() {
            return {
                times: 0,
                average: null,
                milliseconds: 0,
                scores: [],
                message: 'Click to start',
                msg2: null,
                clicked: false,
                wait: false,
                showTimer: false,
                color: '#2b87d1',
                timer: null,
                currentTime: null,
                startTime: null,

                dailyScores: [],
                alltimeScores: [],
                reactionFields: ['rank', 'score', 'username', 'date'],
                board: 'daily'
            }
        },
        /**
         * Gets called when you load the reaction game page
         */
        created() {
            this.getDailyScores();
            this.getAlltimeScores();
        },
        methods: {
            /**
             * Gets best scores of the day from the database
             * @returns {Promise<void>}
             */
            async getDailyScores() {
                const t = this;
                try {
                    const response = await fetch('http://localhost:8081/api/game_reaction/scores/top/daily');
                    await response.json().then(function (result) {
                        let rank = 0;
                        result.forEach(function (item) {
                            rank++;
                            let date = new Date(item.datetime);
                            item.date = date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate();
                            item.rank = rank;
                            t.dailyScores = result;
                        });
                    });
                } catch (e) {
                    throw e;
                }
            },
            /**
             * Gets the top scores of all time from the database
             * @returns {Promise<void>}
             */
            async getAlltimeScores() {
                const t = this;
                try {
                    const response = await fetch('http://localhost:8081/api/game_reaction/scores/top/alltime');
                    await response.json().then(function (result) {
                        let rank = 0;
                        result.forEach(function (item) {
                            rank++;
                            let date = new Date(item.datetime);
                            item.date = date.getFullYear() + "-" + (date.getMonth()+1) + "-" + date.getDate();
                            item.rank = rank;
                            t.alltimeScores = result;
                        });
                    });
                } catch (e) {
                    throw e;
                }
            },
            /**
             * Gets called after the player starts the game. Starts a timeout for a random time between 1-5 seconds.
             */
            waitForStart() {
                if (this.times === 5) {
                    this.times = 0;
                }
                this.msg2 = null;
                this.showTimer = false; // not showing timer
                this.message = 'Wait for green';
                this.wait = true;
                this.color = '#ce2636'; //box is red
                const max = 5000;
                const min = 1000;
                let random = Math.random() * (max - min) + min; // randomize time
                this.timer = setTimeout(this.startTimer, random); // code not running until random time
            },
            /**
             * Starts the timer which runs until the player clicks the green area.
             */
            startTimer() {
                this.message = 'Click!';
                this.wait = false;
                this.color = '#4bdb6a'; // box is green
                this.$data.startTime = Date.now();
                this.$data.currentTime = Date.now();
                this.timer = setInterval(() => this.count(), 1); // timer goes up in milliseconds
            },
            /**
             * Stops the timer and clears the timeout for the next attempt.
             */
            stopTimer() {
                clearTimeout(this.timer);
                clearInterval(this.timer);
                this.color = "#2b87d1";
            },
            /**
             * Counts up the milliseconds after the timer has started.
             */
            count: function () {
                this.currentTime = Date.now();
            },
            /**
             * Returns the reaction time in milliseconds.
             */
            getReactionTime() {
                this.milliseconds = this.currentTime - this.$data.startTime;
                return this.milliseconds;
            },

            /**
             * Calculates the average score of reaction times.
             */
            getAverage() {
                let sum = this.scores.reduce((previous, current) => current += previous);
                this.average = Math.round(sum / this.scores.length);
            },

            /**
             * Saves the scores in a local array
             * @returns {[]}
             */
            saveScore() {
                this.scores.push(this.milliseconds);
                return this.scores;
            },
            /**
             * Gets called after the player clicks the green area for the fifth time.
             * Resets the local score array for the next set of attempts.
             */
            endGame() {
                this.color = "#2b87d1";
                this.msg2 = "Good job! You can keep going, or check your score in the profile page.";
                this.showTimer = true;
                this.scores = [];
            },
            /**
             * Handles the player's clicks in different game situations.
             */
            clickGame() {
                if (this.color === "#2b87d1") {
                    this.waitForStart();
                } else if (this.color === "#ce2636") {
                    this.message = 'Too soon!';
                    this.msg2 = 'Click to try again.';
                    this.stopTimer();
                } else {
                    this.stopTimer();
                    this.showTimer = true;
                    this.message = null;
                    this.clicked = true;
                    this.msg2 = 'Click to continue.';
                    this.getReactionTime();
                    this.saveScore();
                    this.getAverage();
                    this.times++;
                    if (this.times === 5) {
                        //send average score to database
                        this.postScore();
                        this.endGame();
                    }
                }
            },
            /**
             * Posts player's average score to the database.
             * Gets player's scores.
             * @returns {Promise<void>}
             */
            async postScore() {
                const myObj = {"score": this.average, "userID": 1};
                try {
                    await fetch('http://localhost:8081/api/game_reaction/scores', {
                        method: 'POST',
                        body: JSON.stringify(myObj),
                        headers: {'Content-type': 'application/json; charset=UTF-8'},
                    });
                } catch (error) {
                    throw error;
                }
                this.getDailyScores();
                this.getAlltimeScores();
            },
        },
    }
</script>

<style>
    body {
        background: whitesmoke;
    }

    #reactionZone {
        width: 100%;
        height: 35em;
    }

    #timer {
        align-items: center;
        display: inline-flex;
        flex-direction: column;
        color: white;
        font-size: 6em;
    }

    .millis {
        margin-top: 2em;
        display: inline-block;
    }

    #msg2 {
        font-size: 30px;
    }

    #average {
        font-size: 20px;
        margin-top: 1em;
    }
</style>