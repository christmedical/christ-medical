module.exports = {
    getApp: function(state) {
        return state.app;
    },
    getSearchResults: function(state) {
        return state.patients.searchResult;
    },
    getPatient: function(state) {
        return state.patient;
    }
};
