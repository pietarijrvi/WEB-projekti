<template>
    <div id="gamePage">
        <div id="reactionZone" v-on:mousedown="clickGame" v-bind:style="{backgroundColor: color}">
            <div id="timer">
                <span v-if="showTimer" class="millis">{{milliseconds + 'ms'}}</span>
                <span v-else class="millis">{{message}}</span>
                <span id="msg2">{{msg2}}</span>
                <span id="average">{{average}}</span>
            </div>
        </div>
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
                reactionFields: ['rank','score', 'username', 'date'],
                board: 'daily'
            }
        },
        created() {
            this.getDailyScores();
            this.getAlltimeScores();
        },
        methods: {
            async getDailyScores() {
                const t = this;
                try {
                    const response = await fetch('http://localhost:8081/api/game_reaction/scores/top/daily');
                    await response.json().then( function(result) {
                        let rank = 0;
                        result.forEach( function(item) {
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
            async getAlltimeScores() {
                const t = this;
                try {
                    const response = await fetch('http://localhost:8081/api/game_reaction/scores/top/alltime');
                    await response.json().then( function(result) {
                        let rank = 0;
                        result.forEach( function(item) {
                            rank++;
                            let date = new Date(item.datetime);
                            item.date = date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate();
                            item.rank = rank;
                            t.alltimeScores = result;
                        });
                    });
                } catch (e) {
                    throw e;
                }
            },
            waitForStart() {
                this.msg2 = null;
                this.showTimer = false; // not showing timer
                this.message = 'Wait for green';
                this.wait = true;
                this.color = '#ce2636'; //box is red
                const max = 5000; // between max and min time (milliseconds)
                const min = 1000;
                let random = Math.random() * (max - min) + min; // randomize time
                this.timer = setTimeout(this.startTimer, random); // code not running until random time
            },
            startTimer() {
                this.message = 'Click!';
                this.wait = false;
                this.color = '#4bdb6a'; // box is green
                this.$data.startTime = Date.now();
                this.$data.currentTime = Date.now();
                this.timer = setInterval(() => this.count(), 1); // timer goes up in milliseconds
            },
            stopTimer() {
                clearTimeout(this.timer);
                clearInterval(this.timer);
                this.color = "#2b87d1";
            },
            count: function () {
                this.currentTime = Date.now();
            },

            getReactionTime() {
                this.milliseconds = this.currentTime - this.$data.startTime;
                return this.milliseconds;
            },

            getAverage() {
                let sum = this.scores.reduce((previous, current) => current += previous);
                this.average = 'AVG: ' + Math.round(sum / this.scores.length);
            },

            saveScore() {
                this.scores.push(this.milliseconds);
                alert(this.scores);
                return this.scores;
            },
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
                }
            },
        },
        computed: {}
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
        display: inline-flex;
        flex-direction: column;
        text-align: center;
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