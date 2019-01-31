<template>
    <div class="tree-outer">
         <ul class="tree-list" :class="{'expand': expand , 'collapsed': !expand }">
            <li v-for="(item, index) in data" :key="'zlTree' + index" >
                <span @click="showChild(item, index)" class="tree-arrow" :class="{'arrow-expand': item.expand, 'arrow-collapsed': !item.expand, 'tree-empty': !item.children }"></span>
                <span class="check-container" v-if="showCheck"><input type="checkbox" :class="{'half-check': item.halfCheck}" class="zl-checkbox" v-model="item.checked" @change="checkTree($event, item)"></span>
                <span class="label" :class="{active: item.checked}" @click="treeNodeClick(item, index)">{{item.label}}</span>
                <treeNode 
                  :data="item.children" 
                  v-if="item.children " 
                  :expand="item.expand" 
                  :level="level + 1" 
                  @checkChild="checkChild" 
                  @checkParent="checkParent"
                  @nodeClick="nodeClick"
                  @expandTree="expandTree"
                  :checkedChange="item.checkedChange"
                  :parentData="data"
                  :isCheckChild="isCheckChild"
                  :dataIndex="index"
                  :expandArray="expandArray"
                  :checkedArray="checkedArray"
                  :nodeKey="nodeKey"
                  :showCheck="showCheck"
                ></treeNode>
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        name:'treeNode',
        data () {
            return {
                timer: ''
            }
        },
        props:{
            data: Array,    //数据
            expand: Boolean,//默认是否展开
            isCheckChild: {//父子勾选是否关联
                type: Boolean,
                default: true
            }, 
            level: { //当前层级
                type: Number,
                default: 1
            }, 
            showCheck: { //是否展示勾选框
                type: Boolean,
                default: true
            }, 
            checkedChange: Boolean,//父级勾选标识
            dataIndex: Number, //当前数据在父级位置
            parentData: Array, //当前数据的父级数据
            expandArray: Array, //默认展开数据数组
            checkedArray: Array, //默认选中数据数组
            nodeKey: String, //关键字
        },
        mounted() {
            if (this.nodeKey) {
                this.data.forEach(v => {
                    if (this.expandArray.indexOf(v[this.nodeKey]) > -1) {//默认展开
                        this.$set(v, 'expand', true)
                    }
                    if (this.checkedArray.indexOf(v[this.nodeKey]) > -1) {//默认选中
                        this.$set(v, 'checked', true)
                        if (this.isCheckChild) {
                            this.checkChild(true, v)
                        }
                    }
                })
            }
        },
        watch: {
            checkedChange(val) {//监听父级勾选变化，同步子级勾选状态
                this.parentData.forEach(v => {
                    this.checkChild(val, v)
                })
            }
        },
        methods: {
            showChild(data, index) {//展开、隐藏
                if (data.children ) {
                    if (data.expand ) {
                        data.expand = false
                    } else {
                        data.expand = true
                    }
                    this.$forceUpdate()
                    this.$emit('expandTree', data.expand)
                }
            },
            expandTree(isExpand) {//节点展开回调事件
                this.$emit('expandTree', isExpand)
            },
            checkTree(e, data) {//勾选当前数据
                if (this.isCheckChild) {
                    this.checkChild(e.target.checked, data)
                    this.$emit('checkParent', e.target.checked, this.data, this.dataIndex)
                }
            },
            checkChild(e, data) {//勾选子级
                if (data.children instanceof Array && data.children.length > 0) {
                    data.children.forEach( v => {
                       this.$set(v, 'checked', e)
                       this.$set(v, 'checkedChange', e)
                    })
                    this.$set(data, 'halfCheck', false)
                }               
            },
            checkParent(e, parentData, index) {//勾选父级
                let isAllCheck = true
                let isAllEmpty = true
                let isHalfCheck = false
                parentData.forEach(v => {
                    if (!v.checked) {
                        isAllCheck = false
                    } else {
                        isAllEmpty = false
                    }
                    if (v.halfCheck) {
                        isHalfCheck = true
                    }
                })
                let result = isHalfCheck ? 'halfCheck' : (isAllCheck ? 'allCheck' : (isAllEmpty ? 'allEmpty' : 'halfCheck'))
                if (result == 'halfCheck') {
                    this.$set(this.data[index], 'halfCheck', true)
                    this.$set(this.data[index], 'checked', false)
                } else if (result == 'allCheck') {
                    this.$set(this.data[index], 'checked', true)
                    this.$set(this.data[index], 'halfCheck', false)
                } else {
                    this.$set(this.data[index], 'checked', false)
                    this.$set(this.data[index], 'halfCheck', false)
                }
                this.$emit('checkParent', e, this.data, this.dataIndex)
                
               
            },
            treeNodeClick(data, index) {//节点点击事件
                this.nodeClick(data)
                this.showChild(data, index)
            },
            nodeClick(data) {//返回当前点击数据
                this.$emit('nodeClick', data)
            }
        }
    }
</script>
<style scoped lang="less">
    @import '../../../assets/css/common.less';
</style>