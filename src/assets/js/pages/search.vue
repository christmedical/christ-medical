<style>



</style>

<template>

<mock-up src="mock-search.png">
</mock-up>

</template>

<script>

import MockUp from '../components/mock-up.vue'
export default {
    components: {
        'mock-up': MockUp
    },
    route: {
        data: function(transition) {
            debugger
            setTimeout(function() {
                transition.next({
                    message: 'data fetched!'
                })
            }, 1000)
        }
    },
}

</script>
