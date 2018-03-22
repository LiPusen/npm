import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router'
import store from '../store'

Vue.use(VueRouter)

const router = new VueRouter({
	mode: 'hash',
	linkActiveClass: 'is-active',
	routes
});

// 路由拦截
router.beforeEach((to, from, next) => {
	// 用户校验
	if(to.path != '/login' && !store.state.token) {
		next('/login');
	} else {
		next();
	}
})

router.afterEach(route => {})

export default router