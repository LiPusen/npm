import {getSi, getLoc} from '../utils'
/*
 * 参数说明:
 * @common 后台接收的公共参数,一般是对用户的校验参数
 */

export default {
    common : {
    },
    token: getLoc('token') || '',
    memberType: 0,
    info: {},
    list: []
}