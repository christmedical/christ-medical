/**
 * Created by jameym on 5/25/16.
 */

"use strict";

import Vue from 'vue';
import store from './data/store.js';
import * as actions from './data/actions.js';
import * as getters from './data/getters.js';

import NavBar from './components/nav-bar.vue';
import NavBtn from './components/nav-btn.vue';
import AppNav from './components/app-nav.vue';
import MockUp from './components/mock-up.vue';
import WorkSpace from './components/work-space.vue';

import FollowUps from './pages/followups.vue';
import Patient from './pages/patient.vue';
import PatientFollowups from './pages/patient-followups.vue';
import PatientProfile from './pages/patient-profile.vue';
import PatientTreatments from './pages/patient-treatments.vue';
import PatientVisit from './pages/patient-visit.vue';
import Reports from './pages/reports.vue';
import Search from './pages/search.vue';
import Settings from './pages/settings.vue';
import Sync from './pages/sync.vue';

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

export default new Vue({
    el: '#app',
    store: store,
    vuex: { getters, actions },
    ready() {
        this.startWatchingHash();
    }
});