<template>
  <div id="app">
    <reaction-game/>
  </div>
</template>

<script>
import ReactionGame from "./components/ReactionGame.vue";

export default {
  name: 'app',
  components: {
    ReactionGame
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
