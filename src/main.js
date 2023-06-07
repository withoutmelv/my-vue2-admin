import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import LvFormDesign from 'lv-form-design/src'
import ElementUI from 'element-ui'
import '@/styles/index.scss'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(LvFormDesign)
Vue.use(ElementUI)
Vue.config.productionTip = false

require('../mock/index')

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
