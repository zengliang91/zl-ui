<template>
    <div class="box">
        <div class="message"><p class="title">{{title}}</p>
            <span>
                {{message}}
            </span>
        </div>
    </div>
</template>
<script>
export default {
    name: 'msg',
    props: {
        type: String,
        message: String,
        title: {
            type: String,
            default: '提示'
        }
    },
    data() {
        return {

        }
    },
    mounted() {
        this.onClose('11sss1')
    },
    methods: {
        
    },
}
</script>
<style lang="less" scoped>
    div {
        z-index: 8888;
    }
    .box {
        z-index: 1000;
        background: rgba(0, 0, 0, .5);
        position: fixed;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        text-align: center;
    }
    .message {
        position: relative;
        top: 150px;
        display: inline-block;
        width: 400px;
        padding: 0;
        text-align: center;
        font-size: 0;
        background: #fff;
        border: 1px solid #ccc;
        .title {
            text-align: left;
            padding: 10px 20px;
            margin: 0;
            background: #ddd;
            font-size: 14px;
        }
        span {
            font-size: 14px;
            padding: 20px;
            display: inline-block;
        }
    }
</style>
