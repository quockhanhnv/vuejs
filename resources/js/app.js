/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

import Vue from 'vue';
import Vuex from 'vuex';
import store from './store/index';

import router from './config/router';

import App from './App.vue';

Vue.use(Vuex);

const app = new Vue({
    el: '#app',
    render: h => h(App),
    router,
    store,
});
