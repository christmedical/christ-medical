<template>
    <patient-profile></patient-profile>
    <div class="patient-tabs">
        <a @click="setTab('patient-visit')">Overall</a>&nbsp;|&nbsp;
        <a @click="setTab('patient-followups')">Followups</a>&nbsp;|&nbsp;
        <a @click="setTab('patient-treatments')">Treatments</a>
        <!--<patient-tab tab-page="patient-visit">Overall</patient-tab>&nbsp;|&nbsp;-->
        <!--<patient-tab tab-page="patient-followups">Followups</patient-tab>&nbsp;|&nbsp;-->
        <!--<patient-tab tab-page="patient-treatments">Treatments</patient-tab>-->
    </div>
    <component :is="tab"></component>
</template>

<script>
    var Vue = require('vue');
    var getPatientTab = require('../data/getters.js').getPatientTab;
    var setPatientTab = require('../data/actions.js').setPatientTab;

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
//        vuex: {
//            getters: {
//                // note that you're passing the function itself, and not the value 'getCount()'
//                tab: getPatientTab
//            },
//            actions: {
//                setTab: setPatientTab
//            }
//        }
    });

    module.exports = {
//        components: {
//            'patient-tab': PatientTab,
//        },
        vuex: {
            getters: {
                // note that you're passing the function itself, and not the value 'getCount()'
                tab: getPatientTab
            },
            actions: {
                setTab: setPatientTab
            }
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