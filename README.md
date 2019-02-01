# zl-ui

执行  npm run package  进行插件打包，生成插件包dist，提交到npm上时src，package，config，static这几个文件可以不用提交。
也可以通过执行 npm install zengliang-ui --save 进行插件下载

调用方法：            
1、main.js页面引入插件           
import zlUI from 'zengliang-ui'             
import Vue from 'vue'             
Vue.use(zlUI)            

2、具体页面进行调用      
--树形插件              
          <template>          
         <zl-tree ref="zlTree" :data="treeData" nodeKey="id" :isCheckChild="true" :checkedArray="checkedArray" :expandArray="expandArray"      @nodeClick="nodeClick" @expandTree="expandTree"></zl-tree>      
         </template>   
    
    <script>                    
    export default {          
        name: 'tree',        
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
            }
            
        },
    }         
    </script>             
    
可选属性：     
nodeKey: string类型，关键字，与expandArray, checkedArray 配合使用进行默认展开与勾选，示例: id。   
expandArray: 数组，默认展开节点，传入默认展开节点中关键字（nodeKey）对应值，示例['1', '2', '2-2']。   
checkedArray: 数组，默认勾选节点，传入默认勾选节点中关键字（nodeKey）对应值，示例['1', '1-2', '2-2']。   
isCheckChild: Boolean, 父子是否关联，默认true。   
showCheck: Boolean, 是否展示勾选框,默认true。   

可选方法：      
getAllCheckNodes(): 返回所有勾选状态数据。  
getHalfCheckNodes(): 返回所有半勾选状态数据。  



----树形表格插件      
改插件依赖vue element-ui插件，应先引用element-ui再引用该插件，否则报错     
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
    
