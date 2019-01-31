import msg from './src/main.vue'
import Vue from 'vue'

const MsgBox = Vue.extend(msg)
const message = function (options, callback) {
  let instance = new MsgBox({
    propsData: options,
    methods: {
      onClose: callback
    }
  })

  let vm = instance.$mount()
  let el = vm.$el
  document.body.appendChild(el)

  let time1 = setTimeout(() => {
    clearTimeout(time1)
    document.body.removeChild(el)
    instance.$destroy()
    vm = null
  }, 2000)
}

export default message
