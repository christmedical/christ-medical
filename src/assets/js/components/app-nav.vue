<style>



</style>

<template>

<div id="sidebar-wrapper">
    <ul class="sidebar-nav">
        <li class="sidebar-brand"><a v-link="{ path: '/', exact: true, activeClass: 'brand-active' }"><img src="/assets/images/ChristMedicalIcon32x32.png"> {{app.name}} </a></li>
        <nav-btn href="search" icon="search" priority></nav-btn>
        <nav-btn href="patient" icon="plus" priority></nav-btn>
        <nav-btn href="followups" icon="flag" priority></nav-btn>
        <nav-btn href="reports" icon="print"></nav-btn>
        <nav-btn href="sync" icon="refresh"></nav-btn>
        <nav-btn href="settings" icon="gears"></nav-btn>
    </ul>

</template>

<script>
import NavBtn from '../components/nav-btn.vue'
import getters from '../vuex/getters'
export default {
    components: {
        'nav-btn': NavBtn
    },
    vuex: {
        getters: {
            app: getters.getApp
        }
    }
}

</script>
