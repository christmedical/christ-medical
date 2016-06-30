<style>



</style>

<template>

<div class="mock-up">
    <img :src="imageSrc">
</div>

</template>

<script>

module.exports = {
    props: ['src'],
    computed: {
        imageSrc: function() {
            return 'assets/images/' + this.src;
        }
    }
};

</script>
