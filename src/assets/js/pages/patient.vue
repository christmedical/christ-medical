<style>



</style>

<template>

<div class="container-fluid">
    <div class="row">
        <div class="col-lg-12">
            <ul class="nav nav-tabs">
                <li role="presentation" v-bind:class="{ 'active': currentTab == 'patient-visit'}"><a href="javascript:void(0);" @click="setTab('patient-visit')">Overall</a></li>
                <li role="presentation" v-bind:class="{ 'active': currentTab == 'patient-followups'}"><a href="javascript:void(0);" @click="setTab('patient-followups')">Followups</a></li>
                <li role="presentation" v-bind:class="{ 'active': currentTab == 'patient-treatments'}"><a href="javascript:void(0);" @click="setTab('patient-treatments')">Treatments</a></li>
            </ul>
            <component :is="currentTab"></component>
        </div>
    </div>
</div>

</template>

<script>

import PatientVisit from './patient-visit.vue';
import PatientFollowups from './patient-followups.vue';
import PatientTreatments from './patient-treatments.vue';

export default {
    components: {
        'patient-visit': PatientVisit,
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
            currentTab: 'patient-visit'
        }
    },
}

</script>
