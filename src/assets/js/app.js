import Moment from 'moment';
window.Moment = Moment;

import $ from 'jquery';
window.$ = $;

import Vue from 'vue';
import store from './vuex/store'
import { configRouter } from './config/configRouter'
import AppNav from './components/app-nav.vue';
import TopBar from './components/top-bar.vue';
import * as VueFocus from 'vue-focus';

Vue.filter('calculateAge', require('./filters/calculateAge'));

var App = Vue.extend({
    mixins: [VueFocus.mixin],
    store: store,
    ready() {},
    components: {
        'app-nav': AppNav,
        'top-bar': TopBar
    },
});

configRouter(App);
