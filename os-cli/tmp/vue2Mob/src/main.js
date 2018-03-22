import Vue from 'vue'
import { Field, Button, Toast, Header, DatetimePicker,Loadmore } from 'mint-ui'
import App from './App'
import router from './router'
import store from './store'
// eslint-disable-next-line
import filters from './utils/filters'
import './mock'
import components from './components'

// 载入组件
Vue.component(Field.name, Field);
Vue.component(Button.name, Button);
Vue.component(Header.name, Header);
Vue.component(DatetimePicker.name, DatetimePicker);
Vue.component(Loadmore.name, Loadmore);

Vue.prototype.$tip = Toast;

Object.keys(components).forEach((key) => {
	var name = key.replace(/(\w)/, (v) => v.toUpperCase()) //首字母大写
	Vue.component(`v${name}`, components[key])
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')