import Vue from 'vue'

import 'normalize.css/normalize.css'// A modern alternative to CSS resets

import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import '@/styles/index.scss' // global css

import App from './App'
import router from './router'
import store from './store'

import i18n from './lang' // Internationalization
import components from './components'
import './errorLog'// error log
import './mock' // simulation data

import * as filters from './filters' // global filters 

Vue.use(Element, {
  size: 'medium', 
  i18n: (key, value) => i18n.t(key, value)
})

// 全局注册自有组件
Object.keys(components).forEach((key) => {
	var name = key.replace(/(\w)/, (v) => v.toUpperCase()) //首字母大写
	Vue.component(`v${name}`, components[key])
})

// 全局注册过滤器.
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  i18n,
  render: h => h(App)
})
