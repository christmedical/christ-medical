import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {
    app: {
        name: 'Christ Medical'
    },
    searchPage: {
        searchResult: [],
        searchValue: null
    },
    patient: {},
    demoPatients: [{
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
    }],
}

const mutations = {
    SEARCH_PATIENTS(state) {
        state.searchPage.searchValue = state.searchPage.searchValue.toLowerCase();
        //Go to DB and do query
        state.searchPage.searchResult = state.demoPatients.filter(function(patient) {
            return patient.firstName.toLowerCase().startsWith(state.searchPage.searchValue) ||
                patient.lastName.toLowerCase().startsWith(state.searchPage.searchValue) ||
                patient.id === state.searchPage.searchValue;
        });
    },
    SET_PATIENT(state, patientId) {
        if(patientId){
            state.patient = state.demoPatients[patientId - 1];
        }else{
            state.patient = {};
        }
    },
    SAVE_PATIENT(state) {
        //Save to DB
        state.demoPatients.push(state.patient);
    }
}

// Combine the initial state and the mutations to create a Vuex store.
// This store can be linked to our app.
export default new Vuex.Store({
    state,
    mutations
})
