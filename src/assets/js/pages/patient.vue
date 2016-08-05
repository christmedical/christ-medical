<style>



</style>

<template>

<div class="container-fluid">
    <div class="row">
        <div class="col-lg-12">
            <ul class="nav nav-tabs">
                <li role="presentation" v-bind:class="{ 'active': currentTab == 'patient-overview'}"><a href="javascript:void(0);" @click="setTab('patient-overview')">Overall</a></li>
                <li role="presentation" v-bind:class="{ 'active': currentTab == 'patient-followups'}"><a href="javascript:void(0);" @click="setTab('patient-followups')">Followups</a></li>
                <li role="presentation" v-bind:class="{ 'active': currentTab == 'patient-treatments'}"><a href="javascript:void(0);" @click="setTab('patient-treatments')">Treatments</a></li>
            </ul>
            <component :is="currentTab"></component>
        </div>
    </div>
</div>

</template>

<script>

import PatientOverview from './patient-overview.vue';
import PatientFollowups from './patient-followups.vue';
import PatientTreatments from './patient-treatments.vue';

import { setPatient } from '../vuex/actions'

export default {
    components: {
        'patient-overview': PatientOverview,
        'patient-followups': PatientFollowups,
        'patient-treatments': PatientTreatments,
    },
    methods: {
        setTab: function(tab) {
            this.currentTab = tab;
        }
    },
    data() {
        return {
            currentTab: 'patient-overview'
        }
    },
    route: {
        data: function(transition) {
            var patientId = parseInt(this.$route.params.patientId, 10);
            if(patientId){
                this.setPatient(patientId);
            }else{
                this.setPatient();
            }
        }
    },
    vuex: {
        actions: {
            setPatient
        }
    }
}

</script>
