/**
 * Created by jameym on 5/24/16.
 */

var Vue = require('vue'),
    Vuex = require('vuex');

Vue.use(Vuex);

var state = {
    activePage: 'search',
    patientTab: 'patient-visit'
};

var mutations = {
    SHOW_PAGE: function (state, page) {
        state.activePage = page.toLowerCase();
    },
    SET_PATIENT_TAB: function (state, tab) {
        state.patientTab = tab.toLowerCase();
    }
};

var store = new Vuex.Store({
    state: state,
    mutations: mutations
});

module.exports = store;