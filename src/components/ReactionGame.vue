<template>
    <div id="reactionZone" v-on:click="startTimer">
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
                time: 0
            }
        },
        methods: {
            startTimer(){

            },
            clickGame() {
                alert('div clicked');
                this.clicked = true;
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