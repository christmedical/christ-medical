<template>
    <a class="nav-btn" href="{{href}}">
        <i class="fa fa-1x fa-{{icon}}"></i>
        <slot></slot>
    </a>
</template>

<script>
    module.exports = {
        props: ['href', 'icon']
    }
</script>

<style>
    .nav-btn {
        color: #DDDDDD;
        background-color: #222222;
        width: 44px;
        height: 44px;
        text-align: center;
    }

    .nav-btn i {
        line-height: 32px;
        margin-top: 6px;
    }

    .nav-btn:hover {
        color: #222222;
        background-color: #DDDDDD;
    }

    /* Small Devices, Tablets */
    @media only screen and (max-width : 767px) {
        .nav-btn {
            flex-grow: 1;
        }
    }
</style>