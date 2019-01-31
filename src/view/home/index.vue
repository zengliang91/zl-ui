<template>
<div>
    <div >
       <span @click="message">123</span>
       <div style=" width: 400px;max-height: 600px;overflow:auto;background: #e7e7e7;">
         <zl-tree ref="zlTree" :data="treeData" nodeKey="id" :isCheckChild="true" :checkedArray="checkedArray" :expandArray="expandArray" @nodeClick="nodeClick" @expandTree="expandTree"></zl-tree>
       </div>
       <span @click="checkAll">button</span>
    </div>
    <div>

    </div>
</div>
</template>
<script>
    export default {
        data() {
            return {
                data: {
                    name: 'zl'
                },
                expandArray: ['1', '1-1', '1-2'],
                checkedArray: ['1-1'],
                treeData: [
                    {
                        id: '1', 
                        label: '节点1', 
                        children: [
                            {
                                id: '1-1', 
                                label: '节点1-1', 
                                children: [
                                    {
                                        id: '1-1-1', 
                                        label: '节点1-1-1', 
                                        children: [
                                            {
                                                id: '1-1-1-1', 
                                                label: '节点1-1-1-1', 
                                                children: [
                                                    {
                                                        id: '1-1-1-1-1', 
                                                        label: '节点1-1-1-1-1', 
                                                    },
                                                    {
                                                        id: '1-1-1-1-2', 
                                                        label: '节点1-1-1-1-2', 
                                                    }
                                                ]
                                            },
                                            {
                                                id: '1-1-1-2', 
                                                label: '节点1-1-1-2', 
                                            }
                                        ]
                                    },
                                    {
                                         id: '1-1-2', 
                                         label: '节点1-1-2', 
                                    }
                                ]
                            },
                            {
                                id: '1-2', 
                                label: '节点1-2', 
                                children: [
                                    {
                                         id: '1-2-1', 
                                         label: '节点1-2-1', 
                                    },
                                    {
                                         id: '1-2-2', 
                                         label: '节点1-2-2', 
                                    },
                                    {
                                         id: '1-2-3', 
                                         label: '节点1-2-3', 
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        id: '2', 
                        label: '节点2', 
                        children: [
                            {
                                id: '2-1', 
                                label: '节点2-1', 
                                children: [
                                    {
                                         id: '2-1-1', 
                                         label: '节点2-1-1', 
                                    },
                                    {
                                         id: '2-1-2', 
                                         label: '节点2-1-2', 
                                    },
                                    {
                                         id: '2-1-3', 
                                         label: '节点2-1-3', 
                                    },
                                    {
                                         id: '2-1-4', 
                                         label: '节点2-1-2', 
                                    }
                                ]
                            },
                            {
                                id: '2-2', 
                                label: '节点2-2', 
                                children: [
                                    {
                                         id: '2-2-1', 
                                         label: '节点2-2-1', 
                                    },
                                    {
                                         id: '2-2-2', 
                                         label: '节点2-2-2', 
                                    },
                                    {
                                         id: '2-2-3', 
                                         label: '节点2-2-3', 
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        id: '3', 
                        label: '节点3', 
                        children: []
                    },
                    {
                        id: '4', 
                        label: '节点4', 
                        children: [
                            {
                                    id: '4-1', 
                                    label: '节点4-1', 
                            }
                        ]
                    }
                ]
            }
        },
        methods: {
            message() {
                this.$msg({
                    type: 'success',
                    message: '111'
                }, (e) => {
                    console.log(e)
                })
            },
            checkAll() {
                let data = this.$refs.zlTree.getHalfCheckNodes()
                console.log(data)
            },
            nodeClick(data) {
                console.log(data)
            },
            expandTree(isExpand) {//节点展开回调事件
               console.log(isExpand)
            },
        },
    }
</script>
<style lang="">
    
</style>