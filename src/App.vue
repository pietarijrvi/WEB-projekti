<template>
  <div id="app">
    <Header/>
    <reaction-game/>
  </div>
</template>

<script>
import ReactionGame from "./components/ReactionGame.vue";
import Header from "./components/Header.vue";

export default {
  name: 'app',
  components: {
    ReactionGame,Header
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
}
</style>
