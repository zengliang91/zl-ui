<template>
<div>
    <div>
        <tree-table :data="regionData" :columns="columns" border @cellClick="cellClick" @linkCellClick="linkCellClick" @editData="editData" @addChild="addChild" @removeData="removeData"></tree-table>
    </div>
</div>
</template>
<script>
    export default {
        name: 'treeTable',
        data() {
            return {
                columns: [
                    {
                        text: "区域名称",
                        value: "name",
                        width: 260,
                        type: 'link',
                        callback: 'linkCellClick',
                        cellClass: 'link-cell'
                    },
                    {
                        text: "区域编码",
                        value: "code",
                        width: 120,
                        type: 'link',
                        callback: 'cellClick'
                    },
                    {
                        text: "备注",
                        value: "remark",
                        rowClass: 'test'
                    },
                    {
                        text: "操作",
                        type: 'icon',
                        value: ['修改', '添加下级', '删除'],
                        callback: ['editData', 'addChild', 'removeData'],
                        width: 200,
                        cellClass: 'link-cell'
                    }
                ],
                regionData: [
                    {name: 'name1', code: '10001', remark: '备注1', _expanded: true, children: [
                        {name: 'name2', code: '10002', remark: '备注2'},
                        {name: 'name3', code: '10003', remark: '备注3'}
                    ]}
                ],
                
            }
        },
        methods: {
            
            linkCellClick() {
                console.log(111)
            },
            removeData(data) {
                console.log(data,'remove')
            },
            addChild(data) {
                console.log(data,'add')
            },
            editData(data) {
                console.log(data,'edit')
            },
            cellClick(data) {
                console.log(data)
            }
        },
    }
</script>
<style lang="">
    
</style>