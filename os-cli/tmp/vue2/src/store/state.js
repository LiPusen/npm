import Cookies from 'js-cookie'
/*
 * 参数说明:
 * @common 后台接收的公共参数,一般是对用户的校验参数
 * @userInfo 用户相关信息
 * @sidebar 菜单的打开状态
 * @language 国际化的语言选择
 * @logs vue内部错误日志
 * @routers 经过权限过滤后的路由
 */
export default {
    common : {
        session: Cookies.get('session') || ''
    },
    userInfos : (Cookies.get('userInfo') && JSON.parse(Cookies.get('userInfo'))) || {},
    sidebar: {
        opened: !+Cookies.get('barSta')
    },
    language: Cookies.get('language') || 'en',
    logs: [],
    auth: [],
    menu: [],
    cachedViews: [],
    tagList: [],
    tagCur: {}
}