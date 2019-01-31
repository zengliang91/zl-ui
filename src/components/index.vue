<template>
    <div>
        <div class="header">
            {{data}}
        </div>
        <div>
            <div class="left">
                菜单
            </div>
            <div class="right">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'home',
        data() {
            return {
                data: 'header'
            }
        }
    }
</script>
<style lang="">
    .header {
        width: 100%;
        height: 80px;
        background: #e3e3e3;
        color: #333;
    }
    .left {
        float: left;
        width: 200px;
        height: calc( 100vh - 80px);
        background: #666;
        color: #fff;
    }
    .right {
        float: right;
        width: calc(100vw - 230px);
        height: calc( 100vh - 80px);
    }
</style>