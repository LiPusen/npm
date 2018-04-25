import Cookies from 'js-cookie'

export default {
    // 改变并记录菜单的打开状态
    mToggleBar(state) {
        if(state.sidebar.opened) {
            Cookies.set('barSta', 1)
        } else {
            Cookies.set('barSta', 0)
        }
        state.sidebar.opened = !state.sidebar.opened;
    },
    // 语言选择
    mSelLang(state, data) {
        state.language = data
        Cookies.set('language', data)
    },
    // 添加错误日志
    mErrorLog(state, data) {
        state.logs.push(data)
    },
    // 储存登录用户信息
    mUserInfo(state, data) {
        Cookies.set('userInfo', JSON.stringify(data));
        Cookies.set('session', data.session);
        state.common.session = data.session;
        state.userInfos = data;
        state.auth = data.auth;
    },
    // 用户登出
    mLogout(state) {
    	Cookies.remove('userInfo');
    	Cookies.remove('session');
    	state.common.session = '';
    	state.userInfos = {};
    	state.auth = [];
    },
    // 路由tag队列
    mRouteTag(state, data) {
    	if(data.delAll) {
    		state.tagList = data.i || [];
    	} else if(data.del){
    		data.index && state.tagList.splice(data.index, 1);
    		data.i && state.tagList.length <= 0 && (state.tagList = data.i)
    	} else {
    		let sta = false;
    		for (let i = 0; i < state.tagList.length; i++) {
    			 state.tagList[i].name == data.to.name && (sta = true);
    		}
    		!sta && state.tagList.push(data.to);
    	}
    },
    // 当前tag
    mCurTag(state, data) {
    	state.tagCur = data;
    },
    // 注入导航路由
    mMenu(state, data) {
    	state.menu = JSON.parse(JSON.stringify(data));
    }
}