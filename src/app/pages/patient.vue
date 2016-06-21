<template>
    <patient-profile></patient-profile>
    <div class="patient-tabs">
        <a @click="setPatientTab('patient-visit')">Overall</a>&nbsp;|&nbsp;
        <a @click="setPatientTab('patient-followups')">Followups</a>&nbsp;|&nbsp;
        <a @click="setPatientTab('patient-treatments')">Treatments</a>
        <!--<patient-tab tab-page="patient-visit">Overall</patient-tab>&nbsp;|&nbsp;-->
        <!--<patient-tab tab-page="patient-followups">Followups</patient-tab>&nbsp;|&nbsp;-->
        <!--<patient-tab tab-page="patient-treatments">Treatments</patient-tab>-->
    </div>
    <component :is="patientTab"></component>
</template>

<script>
    var Vue = require('vue');
    var getters = require('../data/getters.js');
    var actions = require('../data/actions.js');

    var PatientTab = Vue.extend({
        template: '<a @click="tabClicked" class="{{cssClass}}"><slot></slot></a>',
        props: ['tab-page'],
        computed: {
          cssClass: function() {
              return this.parent.tab == this['tab-page'] ? 'tab-selected' : '';
          }
        },
        methods: {
            tabClicked: function() {
                this.parent.setPatientTab(this['tab-page']);
            }
        }
    });

    module.exports = {
        vuex: {
            getters: getters,
            actions: actions
        }
    }
</script>

<style>
    .patient-tabs a:hover {
        cursor: pointer;
    }

    .patient-tabs a.tab-selected {
        font-weight: bolder;
    }
</style>