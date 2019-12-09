<template>
    <div id="profilePage">
        <div id="profile">{{ username }}</div>
        <div id="scores">
            <b-table striped hover :items="speedScores" :fields="fields"></b-table>
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
                fields: ['time', 'clicks', 'clicksPerSecond', 'date']
            }
        },
        created() {
            //calls info from the database
            this.username = "guest";
            const t = this;
            this.getScores().then( function(result) {

                result.forEach( function(item) {

                  item.clicksPerSecond = Math.round(item.clicks / item.time * 100) / 100;

                  let date = new Date(item.datetime);
                  item.date = date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate();
                });

                t.speedScores = result;
                t.username = result[0].username;
            });
        },
        methods: {
          async getScores() {
            try {
              const response = await fetch('http://localhost:8081/api/game_speedclick/scores/user?userID=1');
              return await response.json();
            } catch (e) {
              throw e;
            }
          }
        }
    };


</script>

<style scoped>

</style>