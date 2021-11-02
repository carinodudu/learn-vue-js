import Vue from 'vue';
import VueRouter from 'vue-router';
import ListPage from '../pages/ListPage.vue';
import RegisterPage from '../pages/RegisterPage.vue';

Vue.use(VueRouter);

export const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/list',
        },
        {
            path: '/list',
            component: ListPage,
        },
        {
            path: '/register',
            component: RegisterPage,
        },
    ]
});