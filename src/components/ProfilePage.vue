<template>
    <div id="profilePage">
        <div id="profile">{{ username }}</div>
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
                username: "user",
                speedScores: [],
                reactionScores: []
            }
        },
        created() {
            //calls info from the database
            var json;
            let xmlhttp = new XMLHttpRequest();
            xmlhttp.onreadystatechange = function() {
                //console.log(xmlhttp.readyState + " " + xmlhttp.status);
                if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                    json = JSON.parse(xmlhttp.responseText);
                    if (json) {
                        json.forEach( function(item) {
                            this.speedScores.add(item)
                        });
                    }
                }
            };
            xmlhttp.open("GET", "http://localhost:8081/api/game_reaction/scores/user?userID=1", true);
            xmlhttp.send()
        }
    };
</script>

<style scoped>

</style>