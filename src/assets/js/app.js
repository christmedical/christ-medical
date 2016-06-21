import Vue from 'vue';
import store from './vuex/store'
import { configRouter } from './config/configRouter'
import AppNav from './components/app-nav.vue';


var App = Vue.extend({
    store: store,
    ready() {},
    components: {
        'app-nav': AppNav
    },
});

configRouter(App);
