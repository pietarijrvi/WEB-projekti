<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="dark">

            <b-navbar-brand to="/">Project</b-navbar-brand>

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
                        <b-dropdown-item href="#">Profile</b-dropdown-item>
                        <b-dropdown-item href="#">Sign Out</b-dropdown-item>
                    </b-nav-item-dropdown>
                    <b-link to="/login"><b-button>Log in</b-button></b-link>
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

</style>