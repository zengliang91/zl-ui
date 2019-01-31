<template>
    <div class="tree-container">
        <tree-node 
          :data="data" 
          :expand="true" 
          :parentData="data"
          :showCheck="showCheck"
          :expandArray="expandArray"
          :nodeKey="nodeKey"
          :checkedArray="checkedArray"
          @nodeClick="nodeClick"
          :isCheckChild="isCheckChild"
          @expandTree="expandTree"
        ></tree-node>
    </div>
</template>
<script>
    import treeNode from './node.vue'
    export default {
        name:'zlTree',
        data () {
            return {
                allCheckData: [],
                halfCheckData: [],
            }
        },
        props:{
            data: Array,
            showCheck: { //是否展示勾选框
                type: Boolean,
                default: true
            }, 
            expandArray: Array, //默认展开数据数组
            checkedArray: Array, //默认选中数据数组
            nodeKey: String, //关键字
            isCheckChild: {//父子勾选是否关联
                type: Boolean,
                default: true
            }, 
        },
        components: {
            treeNode
        },
        methods: {
            getAllCheckNodes() {//返回所有已勾选数据
                this.allCheckData = []
                this.getChildCheckData(this.data)
                return this.allCheckData
            },
            getHalfCheckNodes() {//返回所有半勾选数据
                this.halfCheckData = []
                this.getChildHalfCheckData(this.data)
                return this.halfCheckData
            },
            getChildCheckData(data) {
                data.forEach(v => {
                    if (v.checked) {
                        let dataCopy = JSON.parse(JSON.stringify(v))
                        delete dataCopy.children
                        this.allCheckData.push(dataCopy)
                    }
                    if (v.children instanceof Array && v.children.length > 0) {
                        this.getChildCheckData(v.children)
                    }
                })
            },
            getChildHalfCheckData(data) {
                data.forEach(v => {
                    if (v.halfCheck) {
                        let dataCopy = JSON.parse(JSON.stringify(v))
                        delete dataCopy.children
                        this.halfCheckData.push(dataCopy)
                    }
                    if (v.children instanceof Array && v.children.length > 0) {
                        this.getChildHalfCheckData(v.children)
                    }
                })
            },
            nodeClick(data) {//节点点击事件
                this.$emit('nodeClick', data)
            },
            expandTree(isExpand) {//节点展开回调事件
                this.$emit('expandTree', isExpand)
            },
        },
        created(){
            let that = this
        }
    }
</script>
<style scoped lang="less">
    @import '../../../assets/css/common.less';
</style>