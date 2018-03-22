const router = [
    {
			path: '/',
			component: resolve => require(['@/pages/index.vue'], resolve),
			children: []
		},
		{
			path: '/code',
			component: resolve => require(['@/pages/code.vue'], resolve),
			children: []
		},
		{
			name: 'login',
			path: '/login',
			component: resolve => require(['@/pages/login'], resolve)
		},
		{
			name: '404',
			path: '/404',
			component: resolve => require(['@/pages/404'], resolve)
		},
		{
			name: '403',
			path: '/403',
			component: resolve => require(['@/pages/403'], resolve)
		},
		{
			name: '500',
			path: '/500',
			component: resolve => require(['@/pages/500'], resolve)
		},
		{
			path: '*',
			redirect: '/404'
		}
]

export default router