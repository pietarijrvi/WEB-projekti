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
            var json;
            let xmlhttp = new XMLHttpRequest();
            xmlhttp.onreadystatechange = function() {
                //this.status = xmlhttp.status;
                //this.state = xmlhttp.readyState;
                alert(xmlhttp.readyState + " " + xmlhttp.status);
                if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                    json = JSON.parse(xmlhttp.responseText);
                    if (json) {
                        json.forEach( function(item) {
                            this.speedScores.add(item)
                        });
                    }
                }
            };
            //api/game_speedclick/scores/user?userID=1
            xmlhttp.open("GET", "http://localhost:8081/", true);
            xmlhttp.send();
        }
    };
</script>

<style scoped>

</style>