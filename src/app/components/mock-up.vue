<template>
    <div class="mock-up">
        <img :src="imageSrc">
        <div>
            <slot></slot>
        </div>
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
    //style="background-image: url(assets/images/{{src}});"
</script>

<style>
    .mock-up {
        display: inline-block;
        position: relative;
    }
    .mock-up > img {
        z-index: -1;
    }
    .mock-up > div {
        position: absolute;
        top: 0; bottom: 0; left: 0; right: 0;
        z-index: 100;
    }
</style>