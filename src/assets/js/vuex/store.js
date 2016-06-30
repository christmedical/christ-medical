import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {
    app: {
        name: 'Christ Medical'
    }
}

const mutations = {
    SET_APP(state, app) {
        state.app.name = app.name;
    }
}

// Combine the initial state and the mutations to create a Vuex store.
// This store can be linked to our app.
export default new Vuex.Store({
    state,
    mutations
})
