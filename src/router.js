import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from './components/home.vue';
import Games from './components/games.vue';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [{
            path: '/',
            name: Home,
            component: Home
        },
        {
            path: '/games',
            name: Games,
            component: Games
        }
    ]
});

export default router;