<template>
    <div id="profilePage">
        <div id="profile">{{ username }}</div>{{state}} {{status}}
        <div id="scores">
            <ul id="speedScoreList">
                <li v-for="score in speedScores" v-bind:key="score.id">score</li>
            </ul>
            <ul id="reactionScoreList">
                <li v-for="score in reactionScores" v-bind:key="score.id">score</li>
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
                speedScores: [],
                reactionScores: [],
                state: 0,
                status: 0
            }
        },
        created() {
            //calls info from the database
            this.username = "guest";
            this.getScores();
        },
        methods: {
          async getScores() {
            try {
              const response = await fetch('http://localhost:8081/api/game_speedclick/scores/user?userID=1');
              const data = await response.json();
              this.status = data
            } catch (e) {
              throw e;
            }
          }
        }
    };


</script>

<style scoped>

</style>