<template>
    <div v-if="!['/login'].includes(this.$route.path)">
        <b-navbar toggleable="lg" type="light" variant="light">

            <b-navbar-brand to="/"><img id="logo" src="https://www.svgrepo.com/show/36709/programming-code-signs.svg" class="d-inline-block align-top" alt="logo"></b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <b-nav-item to="/reaction">Reaction game</b-nav-item>
                    <b-nav-item to="/speedgame">Speed click game</b-nav-item>
                </b-navbar-nav>

                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">
                    <b-nav-item-dropdown right>
                        <!-- Using 'button-content' slot -->
                        <template v-slot:button-content>
                            <em>User</em>
                        </template>
                        <b-dropdown-item to="/profile">Profile</b-dropdown-item>
                    </b-nav-item-dropdown>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>


<script>
    export default {
        name: "Header"
    }
</script>

<style scoped>
#logo{
    margin:0;
    width: 35px;
    height: 35px;
}
</style>