<template>
    <div id="reactionZone" v-on:mousedown="clickGame" v-bind:style="{backgroundColor: color}">
        <div id="timer">
            <span v-if="showTimer" class="millis">{{milliseconds + 'ms'}}</span>
            <span v-else class="millis">{{message}}</span>
            <span id="msg2">{{msg2}}</span>
            <span id="average">{{average}}</span>
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
                startTime: null
            }
        },
        methods: {
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

            getAverage(){
                let sum = this.scores.reduce((previous, current) => current += previous);
                this.average = 'AVG: ' + Math.round(sum / this.scores.length);
            },

            saveScore(){
                this.scores.push(this.milliseconds);
                alert(this.scores);
                return this.scores;
            },
            clickGame() {
                if(this.color==="#2b87d1"){
                   this.waitForStart();
                }else if (this.color === "#ce2636"){
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
        computed: {
        }
    }
</script>

<style>
    body{
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

    #msg2{
        font-size: 30px;
    }

    #average{
        font-size: 20px;
        margin-top: 1em;
    }
</style>