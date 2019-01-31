import hello from './src/index.vue'

hello.install = function (Vue) {
  Vue.component(hello.name, hello)
}

export default hello