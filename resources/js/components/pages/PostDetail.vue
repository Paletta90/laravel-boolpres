<template>
    <div>
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">Titolo: {{ post.title }}</h5>
                <p class="card-text">Test: {{ post.content }}</p>
                <p class="card-text">Categoria: {{ post.category.name }}</p>
                <img class="mr-2 mb-2" v-for="platform in post.platforms" :key="platform.id" :src="platform.icon"
                    width="20px">
                <p class="card-text font-italic">Firma: {{ post.firm }}</p>
                <router-link :to="{ name: 'home' }" class="btn btn-primary">Go back</router-link>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: 'PostDetail',

        data() {
            return {
                post: []
            }
        },


        methods: {
            getSinglePost() {
                axios.get(`http://127.0.0.1:8000/api/posts/${ this.$route.params.id }`)
                    .then((res) => {
                        this.post = res.data;
                        console.log(this.$route)
                    })
            }
        },

        mounted() {
            this.getSinglePost();
        }
    }

</script>
