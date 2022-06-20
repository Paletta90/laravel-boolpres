<template>

    <div>

        <div class="container">


            <Loader v-if="isLoaded" />

            <div v-else>

                <div v-if="posts.length > 0">
                    <Pagination :paginates="paginates" @on-page-change="getPosts" />

                    <div class="row">

                        <div v-for="post in posts" :key="post.id" class="col-3 d-flex">

                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">Titolo: {{ post.title }}</h5>
                                    <p class="card-text">Test: {{ post.content }}</p>
                                    <p class="card-text">Categoria: {{ post.category.name }}</p>
                                    <img class="mr-2 mb-2" v-for="platform in post.platforms" :key="platform.id" :src="platform.icon" width="20px">
                                    <p class="card-text font-italic">Firma: {{ post.firm }}</p>
                                    <router-link :to="{ name: 'post-detail', params: { id:post.id } }" class="btn btn-primary">View</router-link>
                                </div>
                            </div>

                        </div>

                    </div>


                </div>

                <div v-else>
                    <h2>Non ci sono post</h2>
                </div>


            </div>


        </div>

    </div>

</template>

<script>
    import axios from 'axios'
    import Loader from '../Loader.vue';
    import Pagination from '../Pagination.vue';

    export default {
        name: 'ListPosts',
        components: {
            Loader,
            Pagination
        },

        data() {
            return {
                posts: [],
                paginates: {},
                isLoaded: true
            }
        },

        methods: {
            getPosts(page) {
                axios.get("http://127.0.0.1:8000/api/posts?page=" + page)
                    .then((res) => {
console.log(res.data.posts)
                        const { data, current_page, last_page } = res.data.posts;

                        this.posts = data;
                        this.paginates = {
                            currentPage: current_page,
                            lastPage: last_page
                        }
                    })
                    .then(() => {
                        this.isLoaded = false;
                    })
            }
        },

        mounted() {
            this.getPosts();
        }
    }

</script>
