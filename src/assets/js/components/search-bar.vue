<style  lang="scss" scoped>

@import '../../sass/theme/_variables';
.navbar-search {
    margin: -20px -20px 20px -20px;
    background-color: $gray-base;
}

.searchResult {
    z-index: 999;
    position: absolute;
    width: 100%;
    padding: 0 15px;
    .result {
        background-color: $gray-lighter;
        border: 1px solid $gray-base;
        padding: 8px 10px;
    }
    .result:hover {
        background-color: $gray-light;
    }
    .resultDetail {
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

<nav class="navbar navbar-search">
    <div class="container-fluid">
        <div class="collapse navbar-collapse">
            <ul class="nav navbar-nav navbar-right">
                <li>
                    <form class="navbar-form" role="search">
                        <div class="form-group">
                            <div class="input-group">
                                <input v-focus-model="searchFocused" v-model="searchKeyword" debounce="100" type="text" class="form-control" placeholder="Search">
                                <div class="input-group-addon"><i class="fa fa-search" aria-hidden="true"></i></div>
                            </div>
                        </div>
                    </form>
                    <div v-bind:class="{ 'hidden': !searchKeyword }" class="searchResult">
                        <ul class="list-unstyled">
                            <a v-link="{ path: '/patient/' + result.id }" v-for="result in searchResults | filterBy searchKeyword in 'firstName' 'lastName' 'id' 'birthday'">
                                <li class="result">
                                    <img src="/assets/images/profile.png">
                                    <ul class="list-unstyled resultDetail">
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
                </li>
            </ul>
        </div>
    </div>
</nav>

</template>

<script>

import Moment from 'moment';
import * as VueFocus from 'vue-focus';
import {
    searchPatients
}
from '../vuex/actions'
import getters from '../vuex/getters'
export default {
    mixins: [VueFocus.mixin],
    methods: {
        search: function() {

        }
    },
    data() {
        return {
            searchFocused: false,
            searchKeyword: null
        }
    },
    watch: {
        'searchKeyword': function(val, oldVal) {
            //this.searchResults = this.searchPatients(val);
        }
    },
    filters: {
        'calculateAge': function(birthday) {
            return Moment(birthday).month(0).from(Moment().month(0)).split(' ')[0]
        }
    },
    vuex: {
        actions: {
            searchPatients
        },
        getters: {
            searchResults: getters.getSearchResults
        }
    }
}

</script>
