<template>
    <div id="app">
        <div id="timeDiv">
            <button value="5" id="5s">5s</button>
            <button value="10" id="10s">10s</button>
            <button value="30" id="30s">30s</button>
        </div>
        <button id="clickArea" :disabled="disableArea == true" v-on:click="click">{{ btnText }}</button>
        <div id="results">{{ results }}</div>
        {{ resetBtn }}
    </div>
</template>

<script>
    export default {
      name: "SpeedClickGame",
      data() {
        return {
          btnText: "",
          defaultText: "click here :D",
          count: 0,
          seconds: 0,
          running: false,
          disableArea: false,
          results: "",
          resetBtn: null,
          gameTimes: [5, 10, 30]
        }
      },
      methods: {
        click() {
          if (this.count === 0) {
            setTimeout(this.end, 1000*this.seconds);
            this.running = true
          }
          this.count++;
          if (this.count !== 0) {
            this.btnText = this.count
          }
        },/*
        pickTime(i) {
          if (!this.running) {
            for (let n = 0; n < this.gameTimes.length; n++) {
              this.$refs[n].classList.remove("selected");
            }
            timeBtns[i].classList.add("selected")
            seconds = gameTimes[i]
          }
        },*/
        end() {
          this.disableArea = true;
          this.results = Math.round(this.count/this.seconds * 100) / 100 + " clicks per second";

          this.sendData();

          this.count = 0;
          this.running = false;

          let resetBtn = document.createElement("button");
          resetBtn.innerHTML = "reset";
          resetBtn.addEventListener("click", function() {
            this.btnText = this.defaultText;
            this.disableArea = false;
            this.results = "";
            this.resetBtn = null
          });
          this.resetBtn = resetBtn
        },
        sendData() {
          // send count and seconds to database
        }
      }
    }
</script>

<style>
    body {
        font-family: Arial, Helvetica, sans-serif;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }

    #app {
        text-align: center;
    }

    button {
        background: darkgrey;
        color: white;
        border: 0;
        border-radius: 1em;
        width:6em;
        height: 2em;
    }

    button:hover {
        border: 2px lightgrey solid;
    }

    button[id="clickArea"] {
        background: lightsteelblue;
        font-size: 2em;
        border: 0;
        border-radius: 5px;
        width: 40rem;
        height: 20rem;
    }

    #timeDiv {
        background: darkgrey;
        border-radius: 5px;
        margin: 1em 0;
        display: flex;
        justify-content: space-evenly;
    }

    #timeDiv > button {
        font-size: 1.1em;
        padding: .5rem;
        margin: .5rem;
        width: 100%;
        background: #d3d3d3;
        border-radius: 5px;
        border: 0;
    }

    #timeDiv > button:hover {
        background: #dadada;
    }

    #timeDiv > button.selected {
        background: #d3e3d3;
    }

    #results {
        padding: 1rem;
        font-size: 1.2rem;
    }
</style>