import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//全局配置
import './assets/scss/reset.scss'
import 'element-ui/lib/theme-chalk/index.css'
import http from './api/config'
import './mock'
//第三方包
import ElementUI from 'element-ui'
Vue.use(ElementUI)
//挂载到Vue原型上
// 引入 echarts 插件
import * as echarts from 'echarts'
// 配置成全局组件
Vue.prototype.$echarts = echarts
Vue.prototype.$http = http

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
