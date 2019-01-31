# zl-ui

执行  npm run package  进行插件打包，生成插件包dist，提交到npm上时src，package，config，static这几个文件可以不用提交。
也可以通过执行 npm install zengliang-ui --save 进行插件下载

调用方法：            
1、main.js页面引入插件           
import zlUI from 'zengliang-ui'             
import Vue from 'vue'             
Vue.use(zlUI)            

2、具体页面进行调用            
<temp          
    <zl-tree :data="data"/zl-tree>    
    github自动替换关键字，展示不全，请自行补充尖括号        
/temp>
<script>   
 
    data() {  
        return {  
            data: [
                {
                    id: '1',   
                    label: '节点1',   
                    children: [   
                        {   
                             id: '1-1',   
                             label: '节点1-1'   
                        },   
                        {   
                             id: '1-2',   
                             label: '节点1-2'  
                        }  
                    ]  
                },  
                {
                    id: '2',
                    label: '节点2',
                    children: [
                        {
                             id: '2-1',
                             label: '节点2-1'
                        },
                        {
                            id: '2-2',
                            label: '节点2-2',
                            children: [
                                {
                                    id: '2-2-1',
                                    label: '节点2-2-1'
                                },
                                {
                                    id: '2-2-2',
                                    label: '节点2-2-2'
                                }
                            ]
                        }
                    ]
                },
            ]      
        }     
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

