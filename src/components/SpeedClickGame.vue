<template>
    <div id="speed-app">
        <div id="timeDiv">
            <button v-for="time in gameTimes" v-bind:key="time.id" v-bind:class="{ selected: selectedTime === time }" v-on:click="setTime(time)">{{ time }}s</button>
        </div>
        <button id="clickArea" :disabled="disableArea" v-on:click="click">{{ btnText }}</button>
        <div id="results">{{ results }}</div>
        <button v-on:click="reset" class="speed-button" v-if="showReset">reset</button>
    </div>
</template>

<script>
    export default {
      name: "SpeedClickGame",
      data() {
        return {
          btnText: "",
          defaultText: "clicking area",
          count: 0,
          seconds: 0,
          running: false,
          disableArea: false,
          results: "",
          showReset: false,
          gameTimes: [5, 10, 30],
          selectedTime: 0
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
        },
        setTime(time) {
          if (!this.running) {
            this.selectedTime = time;
            this.seconds = time;
          }
        },
        end() {
          this.disableArea = true;
          this.results = Math.round(this.count/this.seconds * 100) / 100 + " clicks per second";

          this.sendData(this.seconds, this.count);

          this.count = 0;
          this.running = false;

          this.showReset = true;
        },
        reset() {
          this.btnText = this.defaultText;
          this.disableArea = false;
          this.results = "";
          this.showReset = false;
        },
        async sendData(time, clicks) {
          const myObj = {'time': time, "clicks": clicks, 'userID': 1};
          try {
            await fetch('http://localhost:8081/api/game_speedclick/scores', {
              method: 'POST',
              body: JSON.stringify(myObj),
              headers: { 'Content-type': 'application/json; charset=UTF-8' }
            });
          } catch (e) {
            throw e;
          }
        }
      },
      created() {
        this.btnText = this.defaultText;
        this.setTime(this.gameTimes[0]);
      }
    }
</script>

<style>
    body {
        font-family: Arial, Helvetica, sans-serif;
        flex-wrap: wrap;
        justify-content: center;
    }

    #speed-app {
        text-align: center;
    }

    .speed-button {
        background: rgb(206, 38, 54);
        color: white;
        border: 0;
        border-radius: 1em;
        width:6em;
        height: 2em;
    }

    .speed-button:hover {
        background: rgba(206, 38, 54, .8);
    }

    #clickArea {
        background: rgb(43, 135, 209);
        font-size: 2em;
        border: 0;
        border-radius: 5px;
        width: 40rem;
        height: 20rem;
    }

    #clickArea:disabled {
        color: white;
    }

    #timeDiv {
        width: 40rem;
        background: #343a40;
        border-radius: 5px;
        margin: 1em auto;
        display: flex;
        justify-content: space-evenly;
    }

    #timeDiv > button {
        font-size: 1.1em;
        padding: .5rem;
        margin: .5rem;
        width: 100%;
        background: rgba(255, 255, 255, 0.5);
        border-radius: 5px;
        border: 0;
    }

    #timeDiv > button:hover {
        background: rgba(255, 255, 255, 0.75);
    }

    #timeDiv > button.selected {
        background: rgb(75, 219, 106);
    }

    #results {
        padding: 1rem;
        font-size: 1.2rem;
    }
</style>