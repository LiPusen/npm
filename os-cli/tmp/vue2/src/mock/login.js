import { param2Obj } from '@/utils'

const userMap = {
  admin: {
    auth: [],
    session: 'admin',
    introduction: '我是超级管理员',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Super Admin'
  },
  editor: {
    auth: [10001],
    session: 'editor',
    introduction: '我是编辑',
    avatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1524632022087&di=c7959643dbf45dd2362f205e3996f5cb&imgtype=0&src=http%3A%2F%2Fn.sinaimg.cn%2Fsinacn%2F20170904%2Fde37-fykqmrv8570749.jpg',
    name: 'Normal Editor'
  }
}

export default {
  loginByUsername: config => {
    const { username } = JSON.parse(config.body);
    if(username == 'admin') {
    	return {code: 200, msg: '登录成功！', body: userMap[username]}
    } else {
    	return {code: 200, msg: '登录成功！', body: userMap['editor']}
    }
    return userMap[username]
  }
}
