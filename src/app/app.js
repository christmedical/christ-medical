/**
 * Created by jameym on 5/25/16.
 */
var Vue = require('vue'),
    Material = require('vue-material'),

    store = require('./data/store.js'),
    actions = require('./data/actions.js'),

    NavBar = require('./components/nav-bar.vue'),
    NavBtn = require('./components/nav-btn.vue'),
    AppNav = require('./components/app-nav.vue'),
    MockUp = require('./components/mock-up.vue'),
    WorkSpace = require('./components/work-space.vue'),

    FollowUps = require('./pages/followups.vue'),
    Patient = require('./pages/patient.vue'),
    PatientFollowups = require('./pages/patient-followups.vue')
    PatientProfile = require('./pages/patient-profile.vue'),
    PatientTreatments = require('./pages/patient-treatments.vue'),
    PatientVisit = require('./pages/patient-visit.vue'),
    Reports = require('./pages/reports.vue'),
    Search = require('./pages/search.vue'),
    Settings = require('./pages/settings.vue'),
    Sync = require('./pages/sync.vue');

Material.regAll(Vue);

Vue.component('app-nav', AppNav);
Vue.component('mock-up', MockUp );
Vue.component('nav-bar', NavBar);
Vue.component('nav-btn', NavBtn);
Vue.component('work-space', WorkSpace);

Vue.component('followups', FollowUps);
Vue.component('patient', Patient);
Vue.component('patient-followups', PatientFollowups);
Vue.component('patient-profile', PatientProfile);
Vue.component('patient-treatments', PatientTreatments);
Vue.component('patient-visit', PatientVisit);
Vue.component('reports',Reports );
Vue.component('search', Search);
Vue.component('settings', Settings);
Vue.component('sync', Sync);

var app = new Vue({
    el: '#app',
    store: store,
    vuex: {
        getters: {
            activePage: function(state) { return state.activePage }
        },
        actions: actions
    }
});

app.startWatchingHash();

module.exports = app;