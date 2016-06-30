<style>



</style>

<template>

<li>
    <a class="nav-btn" v-link="{ path: './' + href  }">
        <i class="fa fa-1x fa-{{icon}}"></i> {{href | uppercase}}
    </a>
</li>

</template>

<script>

module.exports = {
    props: ['href', 'icon']
}

</script>
