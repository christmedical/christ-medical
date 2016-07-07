export const setApp = ({ dispatch }, app) => {
    dispatch('SET_APP', app)
}

export const searchPatients = ({ dispatch }, searchKeyword) => {
    dispatch('SEARCH_PATIENTS', searchKeyword)
}

export const setPatient = ({ dispatch }, patientId) => {
    dispatch('SET_PATIENT', patientId)
}
