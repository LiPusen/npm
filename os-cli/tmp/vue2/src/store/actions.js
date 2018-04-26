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
    aGetList({ commit }, data) {
    	htp({ur: 'art', method: 'get'}).then(res => {
    		console.log(res)
    		data.callback && data.callback(res);
    	}, er => {
    		data.er && data.er();
            Message.error('请求异常，请重试！')
    	})
    }
}