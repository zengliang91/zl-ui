import treeTable from './src/index.vue'

treeTable.install = function (Vue) {
  Vue.component(treeTable.name, treeTable)
}

export default treeTable
