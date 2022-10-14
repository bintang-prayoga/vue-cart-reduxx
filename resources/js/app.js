require('./bootstrap');

import Vue from 'vue';
import VueRouter from 'vue-router';
import store from './store';
import { routes } from './Routes';

window.Vue = require('vue').default;



Vue.component('primary', require('./components/Primary.vue').default);
Vue.component('cart', require('./components/cart/Cart.vue').default);
Vue.component('notFound', require('./components/NotFound.vue').default);

Vue.use(VueRouter);
const router = new VueRouter({
    mode: 'history',
    routes
})

const app = new Vue({
    el: '#app',
    router,
    store
});
