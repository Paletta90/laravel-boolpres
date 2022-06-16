<template>
    <div>
        <Header />

        <main>
            <router-view></router-view>
        </main>
    </div>
</template>

<script>

    import Header from './posts/Header.vue'
    import HomePage from './pages/HomePage.vue'

    export default {
        name: "App",
        components:{
            Header,
            HomePage
        }
    }
</script>