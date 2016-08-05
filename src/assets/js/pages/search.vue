<style lang="scss" scoped>

@import '../../sass/theme/_variables';
.searchResult {
    .result {
        background-color: $gray-lighter;
        border: 1px solid $gray-base;
        padding: 8px 10px;
        margin-bottom: 10px;
    }
    .result:hover {
        background-color: $gray-light;
    }
    .leftDetail {
        display: inline-block;
        margin-left: 5px;
    }
    .rightDetail {
        float: right;
    }
    img {
        float: left;
        width: 50px;
        height: 50px;
    }
}

</style>

<template>

<div class="row">
    <div class="col-sm-12">
        <form>
            <div class="form-group">
                <input type="text" v-focus-auto v-model="searchPage.searchValue" @keyup="searchPatients | debounce 500" class="form-control" placeholder="Search on Patient ID or Name">
            </div>
        </form>
        <ul class="list-unstyled searchResult">
            <a v-link="{ path: '/patient/' + result.id }" v-for="result in searchPage.searchResult">
                <li class="result">
                    <img src="/assets/images/profile.png">
                    <ul class="list-unstyled leftDetail">
                        <li><strong>{{result.firstName}} {{result.lastName}}</strong></li>
                        <li class="small">{{result.birthday}} ({{ result.birthday | calculateAge }} years)</li>
                        <li class="small">{{result.gender}}</li>
                    </ul>
                    <ul class="list-unstyled rightDetail">
                        <li><strong>{{result.id}}</strong></li>
                        <li>&nbsp;</li>
                        <li><i class="fa fa-print" aria-hidden="true"></i></li>
                    </ul>
                </li>
            </a>
        </ul>
    </div>
</div>

</template>

<script>


import * as VueFocus from 'vue-focus';
import {
    searchPatients
}
from '../vuex/actions'
import getters from '../vuex/getters'

export default {
    mixins: [VueFocus.mixin],
    methods: {},
    data() {
        return {
        }
    },
    vuex: {
        actions: {
            searchPatients
        },
        getters: {
            searchPage: getters.getSearchPage
        }
    }
}

</script>
