<template>
    <div id="profilePage">
        <div id="profile">{{ username }}</div>
        <div id="scores">
            <ul>
                <li v-for="score in scores" v-bind:key="score.id">score</li>
            </ul>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'ProfilePage',
    data() {
      return {
        username: "",
        scores: []
      }
    }
  };
</script>

<style scoped>

</style>