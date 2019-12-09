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
                username: "",
                speedScores: [],
                reactionScores: []
            }
        },
        created() {
            //calls info from the database
            var json;
            let xmlhttp = new XMLHttpRequest();
            xmlhttp.onreadystatechange = function() {
                if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                    json = JSON.parse(xmlhttp.responseText);
                    if (json) {
                        json.forEach( function(item) {
                            this.speedScores.add(item)
                        });
                    }
                }
            };
            xmlhttp.open("GET", "http://localhost:8081/gibmethings", true);
            xmlhttp.send()
        }
    };
</script>

<style scoped>

</style>