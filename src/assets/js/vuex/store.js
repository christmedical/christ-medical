import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {
    app: {
        name: 'Christ Medical'
    },
    patients: {
        searchResult: [{
            id: 1,
            firstName: 'Tim',
            lastName: 'Lel',
            birthday: '11/12/1999',
            gender: 'Male'
        }, {
            id: 2,
            firstName: 'Anna',
            lastName: 'Roger',
            birthday: '11/12/1979',
            gender: 'Female'
        }, {
            id: 3,
            firstName: 'John',
            lastName: 'Smith',
            birthday: '11/12/1989',
            gender: 'Male'
        }]
    },
    patient: {}
}

const mutations = {
    SET_APP(state, app) {
        state.app.name = app.name;
    },
    SEARCH_PATIENTS(state, searchKeyword) {
        //state.patients.searchResult = patientsFromDB;
    },
    SET_PATIENT(state, patientId) {
        state.patient = state.patients.searchResult[patientId - 1];
    }
}

// Combine the initial state and the mutations to create a Vuex store.
// This store can be linked to our app.
export default new Vuex.Store({
    state,
    mutations
})
