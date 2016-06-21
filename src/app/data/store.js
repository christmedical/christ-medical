/**
 * Created by jameym on 5/24/16.
 */
"use strict";

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
    activePage: 'search',
    patientTab: 'patient-visit',
    watchingHash: false
};

const mutations = {
    SHOW_PAGE (state, value) {
        state.activePage = value.toLowerCase();
    },
    SET_PATIENT_TAB (state, value) {
        state.patientTab = value.toLowerCase();
    },
    SET_WATCHING_HASH (state, value) {
        state.watchingHash = value;
    }
};

const store = new Vuex.Store({ state, mutations });

export default store;