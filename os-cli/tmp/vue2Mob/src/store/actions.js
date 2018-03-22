import { Toast } from 'mint-ui'
import htp from '../http'

/* 异步请求集中管理
 *
 */

export default {
	aLogin({ commit }, data) {
		htp({ur: 'login', options: data.ops}).then(res => {
			commit('mToken', res.accessToken);
			data.callback && data.callback(res);
		}, er => {
			Toast({message: er || '网络错误！'});
		})
	},
	aInfo({ commit }, data) {
		htp({ur: 'settle', options: data.ops}).then(res => {
			commit('mInfo', res);
			data.callback && data.callback(res);
		}, er => {
			Toast({message: er || '网络错误！'})
		})
	},
	aList({ commit }, data) {
		htp({ur: 'queryData', options: data.ops}).then(res => {
			//commit('mList', res.rows);
			data.callback && data.callback(res);
		}, er => {
			Toast({message: er || '网络错误！'})
		})
	},
	aOut({ commit }, data) {
		htp({ur: 'logOut', options: {}, method: 'get'}).then();
	}
}
