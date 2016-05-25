<template>
    <div class="nav-bar"><slot></slot></div>
</template>

<style>
    .nav-bar {
        display: flex;
        position: fixed;
        background-color: #222222;
    }

    /* Small Devices, Tablets */
    @media only screen and (max-width : 767px) {
        .nav-bar {
            right: 0; bottom: 0; left: 0;
            flex-direction: row;
        }
    }
    @media only screen and (min-width : 768px) {
        .nav-bar {
            top: 0; bottom: 0; left: 0;
            flex-direction: column;
        }
    }
</style>