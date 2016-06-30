import Vue from 'vue';
import store from './vuex/store'
import { configRouter } from './config/configRouter'
import AppNav from './components/app-nav.vue';
import SearchBar from './components/search-bar.vue';

var App = Vue.extend({
    store: store,
    ready() {},
    components: {
        'app-nav': AppNav,
        'search-bar': SearchBar
    },
});

configRouter(App);
