// 封装请求
import api from './api'
import axios from 'axios';
import store from '../store'
import { Toast, Indicator} from 'mint-ui'

// 全局设置
axios.defaults.headers.common['Authorization'] = 'Bearer';
axios.defaults.headers.post['Content-Type'] = 'application/json';


// 拦截request,设置全局请求为ajax请求
axios.interceptors.request.use(config => {
	config.headers['X-Requested-With'] = 'XMLHttpRequest'
	return config
})

// 响应拦截
axios.interceptors.response.use(response => {}, err => {})

const htp = axios.create({
	baseURL: "/",
	timeout: 2000
});

// 处理接口规范的公有方法
const server = ({ method = 'post', ur, options = {} }) => {
	let p, m = false;
	let load = { close: () => {} };
	setTimeout(() => {
		!m && (load = Indicator.open({
			text: '加载中...',
			spinnerType: 'fading-circle'
		  }));
	}, 500);
	axios.defaults.headers['token'] = store.state.token || '';
	// 混入公共参数
	const ops = options;
	// const ops = JSON.parse(JSON.stringify(store.state.common));
	// Object.assign(ops, options);
	switch(method) {
		case 'get':
			p = new Promise(function(resolve, reject) {				
				htp.get(api[ur], { params: ops }).then(response => {
					m = true;
					Indicator.close();
					if(response.data.code && response.data.code == 200) {
						resolve(response.data.body);
					} else {
						reject(response.data.msg);
					}
				}, er => {
					m = true;
					Indicator.close();
					errHandler(er);
				});
			});
			break;
		case 'post':
			p = new Promise(function(resolve, reject) {
				htp.post(api[ur], ops ).then(response => {
					m = true;
					Indicator.close();
					if(response.data.code && response.data.code == 200) {
						resolve(response.data.body);
					} else {
						reject(response.data.msg);
					}
				}, er => {
					m = true;
					Indicator.close();					
					errHandler(er);
				})
			});
			break;
		default:
			break;
	}
	return p;
}

function errHandler(er) {
	if(er.response) {
		if(er.response.status == 401){
			store.commit('mExit');
			window.location.reload();
		} else {
			Toast({message: '服务器异常稍后请重试！'});
		}
	} else {
		Toast({message: '请检查您的网络连接是否正常'});
	}
	
}

export default server
