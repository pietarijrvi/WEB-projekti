<template>
    <div id="reactionZone" v-on:click="clickGame">
        Reaction zone
        <div id="timer">
            <span id="millis">{{ milliseconds}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ReactionGame",
        data() {
            return {
                clicked: false,
                timer: false,
                time: 0
            }
        },
        methods: {
            startTimer(){
                const startTime = new Date();
            },
            stopTimer(startTime){
                const endTime = new Date();
                const timeDiff = endTime - startTime;
            },
            clickGame() {
                alert('div clicked');
                this.clicked = true;
                if(this.timer === false){
                    this.startTimer();
                } else{
                    this.stopTimer();
                }

            },
        },
        computed:{

        }
    }
</script>

<style>
    body {
        margin: 0;
        padding: 0;
    }

    #reactionZone {
        width: 100%;
        height: 35em;
        background: cornflowerblue;
    }
</style>