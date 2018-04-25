import htp from '../http'
import { Message } from 'element-ui'
/**
 * 异步请求集中管理
 */
export default {
    aLogin({ commit }, data) {
        htp({ur: 'login', options: data.ops}).then(res => {
            commit('mUserInfo', res);
            data.callback && data.callback();
        }, er => {
            data.er && data.er();
            Message.error('登录失败，请重试！')
        })
    },
    aDelCur({ commit, state }, data) {
    	return new Promise((resolve) => {
	        commit('mDelCur', data)
	        resolve([...state.visitedViews])
	    })
    }
}