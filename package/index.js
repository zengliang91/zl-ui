import hello from './components/hello/index.js'
import zlTree from './components/tree/index.js'
import msg from './components/message/index.js'

const components = [
  hello,
  zlTree,
  msg
]

const zlUi = {
  hello,
  zlTree,
  msg
}
zlUi.install = Vue => {
  components.forEach(component => {
    Vue.component(component.name, component)
  })

  Vue.prototype.$msg = msg
}

export default zlUi
