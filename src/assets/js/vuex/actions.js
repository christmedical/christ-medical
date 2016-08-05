export const searchPatients = ({ dispatch }) => {
    dispatch('SEARCH_PATIENTS')
}

export const setPatient = ({ dispatch }, patientId) => {
    dispatch('SET_PATIENT', patientId)
}

export const savePatient = ({ dispatch }) => {
    dispatch('SAVE_PATIENT')
}
