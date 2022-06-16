import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// Import components
import HomePage from './components/pages/HomePage.vue';
import ContactsPage from './components/pages/ContactsPage.vue';
import NotFoundPage from './components/pages/NotFoundPage.vue';

const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', component: HomePage, name: 'home' },
        { path: '/contacts', component: ContactsPage, name: 'contacts' },
        { path: '/notfound', component: NotFoundPage, name: 'notfound' }
    ]
});

export default router;