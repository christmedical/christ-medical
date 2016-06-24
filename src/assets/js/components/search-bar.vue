<style  lang="scss" scoped>

@import '../../sass/theme/_variables';
.navbar-search {
    margin: -20px -20px 20px -20px;
    background-color: $gray-base;
}

.searchResult {
    position: absolute;
    width: 100%;
    padding: 0 15px;
    .result {
        background-color: $gray-lighter;
        cursor: pointer;
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
                    <div v-bind:class="{ 'hidden': !searchFocused }" class="searchResult">
                        <ul class="list-unstyled">
                            <li class="result" v-for="result in searchResults | filterBy searchKeyword in 'name'">
                                <img src="assets/images/profile.png">
                                <ul class="list-unstyled resultDetail">
                                    <li><strong>{{result.name}}</strong></li>
                                    <li class="small">{{result.birthday}} ({{ result.birthday | calculateAge }} years)</li>
                                    <li class="small">{{result.gender}}</li>
                                </ul>
                                <ul class="list-unstyled rightDetail">
                                    <li><strong>{{result.id}}</strong></li>
                                    <li>&nbsp;</li>
                                    <li><i class="fa fa-print" aria-hidden="true"></i></li>
                                </ul>
                            </li>
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
export default {
    mixins: [ VueFocus.mixin ],
    methods: {
        search: function() {

        }
    },
    data() {
        return {
            searchFocused: false,
            searchKeyword: null,
            searchResults: [{
                id: 1,
                name: 'Tim',
                birthday: '11/12/1999',
                gender: 'Male'
            }, {
                id: 2,
                name: 'Anna',
                birthday: '11/12/1979',
                gender: 'Female'
            }, {
                id: 3,
                name: 'Smith',
                birthday: '11/12/1989',
                gender: 'Male'
            }]
        }
    },
    watch: {
        'searchKeyword': function(val, oldVal) {
            //this.Search();
        }
    },
    filters: {
        'calculateAge': function(birthday) {
            return Moment(birthday).month(0).from(Moment().month(0)).split(' ')[0]
        }
    }
}

</script>
