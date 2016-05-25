<template>
    <div class="work-space">
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>

<style>
    .work-space {
        background-color: #cccccc;
        padding: 10px;
    }

    .content {
        padding: 20px;
        background-color: #ffffff;
        /* border-radius */
        -webkit-border-radius: 3px;
        -moz-border-radius: 3px;
        border-radius: 3px;
        /* box-shadow */
        -webkit-box-shadow: rgba(0,0,0,0.5) 0px 0 5px;
        -moz-box-shadow: rgba(0,0,0,0.5) 0 0 5px;
        box-shadow: rgba(0,0,0,0.5) 0 0 5px;
    }


    /* Small Devices, Tablets */
    @media only screen and (max-width : 767px) {
        .work-space {
            position: fixed;
            left: 0;  top: 0; bottom: 44px; right: 0;
            overflow-y: scroll;
        }
    }
    @media only screen and (min-width : 768px) {
        .work-space {
            position: fixed;
            left: 44px;  top: 0; bottom: 0; right: 0;
            overflow-y: scroll;
        }
    }
</style>