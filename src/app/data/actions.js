/**
 * Created by jameym on 5/25/16.
 */
'use strict';

export const startWatchingHash = function({dispatch, state}) {
    if(!state.watchingHash) {
        
        dispatch('SHOW_PAGE', location.hash.replace('#', ''));

        window.onhashchange = function () {
            dispatch('SHOW_PAGE', location.hash.replace('#', ''));
        };
        
        dispatch('SET_WATCHING_HASH', true);
    }
};

export const setPatientTab = function({dispatch}, value) {
    dispatch('SET_PATIENT_TAB', value);
};