import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from './components/home.vue';
import Games from './components/games.vue';
import Teams from './components/teams.vue';
import Locations from './components/locations.vue';
import Contact from './components/contact.vue';
import Chat from './components/chat.vue'
import Login from './components/login.vue'

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [{
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/games',
            name: 'Games',
            component: Games
        },
        {
            path: '/teams',
            name: 'Teams',
            component: Teams
        },
        {
            path: '/locations',
            name: 'Locations',
            component: Locations
        },
        {
            path: '/contact',
            name: 'Contact',
            component: Contact
        },
        {
            path: '/chat',
            name: 'Chat',
            component: Chat
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        }
    ]
});

export default router;