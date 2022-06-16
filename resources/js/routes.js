import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// Import components
import HomePage from './components/pages/HomePage.vue';
import NotFoundPage from './components/pages/NotFoundPage.vue';

const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', component: HomePage, name: 'home' },
        { path: '*', component: NotFoundPage, name: 'notfound' }
    ]
});

export default router;