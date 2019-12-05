<template>
    <div id="Login">
        <b-form>
            <img class="mb-4" src="https://www.svgrepo.com/show/178985/padlock-lock.svg" alt="" width="150" height="150">
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
            <b-button variant="primary" class="btn-block" type="submit">Sign in</b-button>
            <p class="mt-5 mb-3 text-muted">&copy; Pietari Järvi, Jetro Saarti, Kim Widberg</p>
        </b-form>
    </div>
</template>

<script>
    export default {
        name: "Login"
    }
</script>

<style scoped>

    #Login{
        align-content: center;
        margin: 4em 37% 0;
    }

    input{
        margin-bottom: 1em;
    }
</style>