<style lang="scss" scoped>

.profilePic {
    width: 100%;
    margin-bottom: 5px;
}

.overviewWrapper {
    margin-top: 10px;
}

</style>

<template>

<div class="row overviewWrapper">
    <div class="col-md-2">
        <img class="profilePic" src="/assets/images/profile.png">
        <button class="btn btn-primary btn-block">Print</button>
        <button type="submit" class="btn btn-default btn-block">Save</button>
    </div>
    <div class="col-md-10">
        <form>
            <div class="row">
                <div class="col-md-10">
                    <div class="row">
                        <div class="form-group col-md-3">
                            <label for="patientId">Patient ID</label>
                            <input type="text" v-model="patient.id" class="form-control input-sm" id="patientId">
                        </div>
                        <div class="form-group col-md-3">
                            <label for="firstName">First Name</label>
                            <input type="text" v-model="patient.firstName" class="form-control input-sm" id="firstName" placeholder="John">
                        </div>
                        <div class="form-group col-md-3">
                            <label for="lastName">Last Name</label>
                            <input type="text" v-model="patient.lastName" class="form-control input-sm" id="lastName" placeholder="Doe">
                        </div>
                        <div class="form-group col-md-3">
                            <label for="lastName">DOB</label>
                            <input type="date" class="form-control input-sm" id="dob">
                        </div>
                    </div>
                    <div class="row">
                        <div class="form-group col-md-3">
                            <label for="govId">Gov ID</label>
                            <input type="text" class="form-control input-sm" id="govId">
                        </div>
                        <div class="form-group col-md-3">
                            <label for="nextOfKin">Next of Kin</label>
                            <input type="text" class="form-control input-sm" id="nextOfKin" placeholder="Rogers Smith">
                        </div>
                        <div class="form-group col-md-3">
                            <label for="gender">Gender</label>
                            <select class="form-control input-sm">
                                <option>Male</option>
                                <option>Female</option>
                            </select>
                        </div>
                        <div class="form-group col-md-3">
                            <label for="lastName">Marital Status</label>
                            <select class="form-control input-sm">
                                <option>Single</option>
                                <option>Married</option>
                                <option>Separated</option>
                                <option>Divorced</option>
                                <option>Widowed</option>
                                <option>Common Law</option>
                            </select>
                        </div>
                    </div>
                    <div class="row">
                        <div class="form-group col-md-3">
                            <label for="address">Address</label>
                            <input type="text" class="form-control input-sm" id="address">
                        </div>
                        <div class="form-group col-md-3">
                            <label for="phone1">Phone 1</label>
                            <input type="text" class="form-control input-sm" id="phone1">
                        </div>
                        <div class="form-group col-md-3">
                            <label for="phone2">Phone 2</label>
                            <input type="text" class="form-control input-sm" id="phone2">
                        </div>
                        <div class="form-group col-md-3">
                            <label for="church">Church</label>
                            <input type="text" class="form-control input-sm" id="church">
                        </div>
                    </div>
                </div>
                <div class="col-md-2">
                    <div class="checkbox">
                        <label>
                            <input type="checkbox" value="translator"> Translator</label>
                    </div>
                    <div class="checkbox">
                        <label>
                            <input type="checkbox" value="hope"> Hope</label>
                    </div>
                    <div class="checkbox">
                        <label>
                            <input type="checkbox" value="smoke"> Smoke</label>
                    </div>
                    <div class="checkbox">
                        <label>
                            <input type="checkbox" value="alcohol"> Alcohol</label>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="form-group col-md-3">
                    <label for="medicineAllergies">Medicine Allergies</label>
                    <textarea type="text" class="form-control input-sm" id="medicineAllergies" rows="3"></textarea>
                </div>
                <div class="form-group col-md-3">
                    <label for="medicalHistory">Post Medical History</label>
                    <textarea type="text" class="form-control input-sm" id="medicalHistory" rows="3"></textarea>
                </div>
                <div class="form-group col-md-3">
                    <label for="postSurgeries">Post Surgeries</label>
                    <textarea type="text" class="form-control input-sm" id="postSurgeries" rows="3"></textarea>
                </div>
                <div class="form-group col-md-3">
                    <label for="familyMedicalHistory">Family Medical History</label>
                    <textarea type="text" class="form-control input-sm" id="familyMedicalHistory" rows="3"></textarea>
                </div>
            </div>
            <div class="row">
                <div class="form-group col-md-4">
                    <label for="lifeNotes">Personal Life Notes</label>
                    <textarea type="text" class="form-control input-sm" id="lifeNotes" rows="3"></textarea>
                </div>
                <div class="form-group col-md-4">
                    <label for="adminNotes">Admin Notes</label>
                    <textarea type="text" class="form-control input-sm" id="adminNotes" rows="3"></textarea>
                </div>
                <div class="form-group col-md-2">
                    <label for="gynG">GynG</label>
                    <input type="text" class="form-control input-sm" id="gynG">
                </div>
                <div class="form-group col-md-2">
                    <label for="gynP">GynP</label>
                    <input type="text" class="form-control input-sm" id="gynP">
                </div>
            </div>
        </form>
    </div>
</div>

</template>

<script>

import getters from '../vuex/getters'

export default {
    data() {
            return {

            }
        },
        ready() {
            debugger
        },
        vuex: {
            getters: {
                patient: getters.getPatient
            }
        }
}

</script>
