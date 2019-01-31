import zlTree from './src/index.vue'

zlTree.install = function (Vue) {
  Vue.component(zlTree.name, zlTree)
}

export default zlTree
