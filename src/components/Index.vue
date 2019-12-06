<template>
    <div id="cards">
        <b-card
                img-height="200px"
                text-variant="black"
                id="reactionCard"
                title="Reaction Game"
                img-src="https://www.svgrepo.com/show/236404/lightnings-flash.svg"
                img-alt="Image"
                img-top
                tag="article"
                class="mb-2 shadow p-3"
        >
            <b-card-text>
                Test your reaction speed.
            </b-card-text>

            <b-link to="/reaction"><b-button variant="primary">Play</b-button></b-link>
        </b-card>
        <b-card
                img-height="200px"
                text-variant="black"
                id="speedCard"
                title="Speed Click Game"
                img-src="https://www.svgrepo.com/show/236423/sand-clock-timer.svg"
                img-alt="Image"
                img-top
                tag="article"
                class="mb-2 shadow p-3"
        >
            <b-card-text>
                Choose from three time options and see how many clicks you can get.
            </b-card-text>

            <b-link to="/speedgame"><b-button variant="primary">Play</b-button></b-link>
        </b-card>
    </div>
</template>

<script>
    export default {
        name: "Index"
    }
</script>

<style>
    #cards {
        display: inline-flex;
        margin-top: 5em;
    }
    img{
        margin-top: 1em;
    }
    #reactionCard{
        margin-right: 5em;
        border-top: 3px solid yellow;
        width: 100%;
    }

    #speedCard{
        border-top: 3px solid darkorange;
        width: 100%;
    }
</style>