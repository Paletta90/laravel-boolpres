<template>
    <nav aria-label="Page navigation example">
        <ul class="pagination">
            <li class="page-item" v-if="paginates.currentPage > 1"
                @click="$emit( 'on-page-change', paginates.currentPage - 1 )">
                <a class="page-link" href="#">Previous</a>
            </li>
            <li class="page-item" v-for="page in paginates.lastPage" :key="page"
                @click="$emit( 'on-page-change', page )">
                <a class="page-link" href="#">{{ page }}</a>
            </li>
            <li class="page-item" v-if="paginates.currentPage < paginates.lastPage"
                @click="$emit( 'on-page-change', paginates.currentPage + 1 )">
                <a class="page-link" href="#">Next</a>
            </li>
        </ul>
    </nav>
</template>

<script>
    export default {
        name: 'Pagination',

        props: [
            'paginates'
        ]
    }

</script>
