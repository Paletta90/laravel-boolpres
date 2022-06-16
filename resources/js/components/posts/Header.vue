<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Navbar</a>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <router-link class="nav-link" :to="{ name: 'home' }">Home</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" :to="{ name: 'contacts' }">Contacts</router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
    export default {
        name: 'Header'
    }

</script>
