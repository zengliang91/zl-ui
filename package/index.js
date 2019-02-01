import hello from './components/hello/index.js'
import zlTree from './components/tree/index.js'
import msg from './components/message/index.js'
import treeTable from './components/treeTable/index.js'

const components = [
  hello,
  zlTree,
  msg,
  treeTable
]

const zlUi = {
  hello,
  zlTree,
  msg,
  treeTable
}
zlUi.install = Vue => {
  components.forEach(component => {
    Vue.component(component.name, component)
  })

  Vue.prototype.$msg = msg
}

export default zlUi
