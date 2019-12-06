<template>
    <div>
        <h1 id="welcome">Projekti</h1>
        <p id="signText">Please sign in</p>
        <b-modal hide-footer id="modal-1">
            <b-form class="text-center">
                <img class="mb-4" src="https://www.svgrepo.com/show/178985/padlock-lock.svg" alt="" width="150"
                     height="150">
                <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
                <label for="inputEmail" class="sr-only">Email address</label>
                <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus>
                <label for="inputPassword" class="sr-only">Password</label>
                <input type="password" id="inputPassword" class="form-control" placeholder="Password" required>
                <div class="checkbox mb-3">
                    <label>
                        <input type="checkbox" value="remember-me"> Remember me
                    </label>
                </div>
                <b-button id="loginButton" pill variant="primary" type="submit">Sign in</b-button>
                <p class="mt-5 mb-3 text-muted">&copy; Pietari Järvi, Jetro Saarti, Kim Widberg</p>
            </b-form>
        </b-modal>
        <b-button pill variant="primary" v-b-modal.modal-1>Sign in</b-button>
    </div>
</template>

<script>
    export default {
        name: "Login"
    }
</script>

<style scoped>
    #loginButton{
        width: 6em;
        font-size: 1.1em;
    }
    #welcome{
        font-size: 15em;
        margin-top: 0.5em;
    }

    #signText{
        font-size: x-large;
    }
    input {
        margin-bottom: 1em;
    }
</style>