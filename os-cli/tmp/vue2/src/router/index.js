import Vue from 'vue'
import Router from 'vue-router'
import routes from './route'
import store from '../store'
import { Message } from 'element-ui'
import NProgress from 'nprogress' 
import 'nprogress/nprogress.css'

Vue.use(Router)

const router =  new Router({
  mode: 'hash', 
  linkActiveClass: 'is-active',
  scrollBehavior: () => ({ y: 0 }),
  routes
})

NProgress.configure({ showSpinner: false })

// 菜单排序控制
const sort = [{name: 'home', icon: 'dashboard'}, {name: 'clipboardDemo', icon: 'clipboard'}, {name: 'errorPages', icon: '404'}, {name: 'icons', icon: 'icon'}, {name: 'charts', icon: 'chart'}, {name: 'example', icon: 'example'}, {name: 'zip', icon: 'zip'}, { name: 'i18n', icon: 'international' }];
// 数组对象化
const uu = {};
const u = [];
// 路由装配
if(!store.state.menu.length){
	routes[0].children.forEach((item) => {
		if(item.meta.tree) {
			!uu[item.meta.tree] && (uu[item.meta.tree] = []);
			uu[item.meta.tree].push(item)
		} else {
			uu[item.name] = item;
		}
	})
	sort.forEach((m, k) => {
		if(uu[m.name]) {
			if(uu[m.name].length) {
				const mm = uu[m.name];
				uu[m.name] = {...m, redirect: mm[0].path, children: mm};
			} else {
				uu[m.name] = {...uu[m.name], ...m};
			}
			u.push(uu[m.name]);
		}
	})
	store.commit('mMenu', u);
}

// 路由拦截
router.beforeEach((to, from, next) => {
  NProgress.start() 
  NProgress.done()
  
  // 路由标签 
  if(to.name) {
  	store.commit('mRouteTag', { to });
  	store.commit('mCurTag', to);
  }
  // 权限控制待补全，大体思路是去验证资源树里面的code码，如果没有code码，则不受权限控制
  next();
})

router.afterEach(route => { NProgress.done() })

export default router

/*
 * 路由约定：
 * 1.公共页面没有name属性
 * 2.不需要权限控制的页面没有meta.code属性
 */