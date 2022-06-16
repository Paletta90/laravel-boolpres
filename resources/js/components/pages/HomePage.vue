<template>
    <div>
        <ListPosts />
    </div>
</template>

<script>
    import ListPosts from '../posts/ListPosts.vue';

    export default{
        name: 'HomePage',
        components:{
            ListPosts
        }
    }

</script>