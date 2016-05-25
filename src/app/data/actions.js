/**
 * Created by jameym on 5/25/16.
 */

exports.startWatchingHash = function(ref) {
    if(!ref.state.watchingHash) {
        window.onhashchange = function () {
            var newPage = location.hash.replace('#', '');
            ref.dispatch('SHOW_PAGE', newPage);
        };
        ref.state.watchingHash = true;
    }
};

exports.setPatientTab = function(ref, tab) {
    ref.dispatch('SET_PATIENT_TAB', tab);
};