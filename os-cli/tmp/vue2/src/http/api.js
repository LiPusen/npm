// 接口统一管理
const api = {
    login: '/login',
    art: '/article/list'
}
// 不同环境分发
// for(var k in api) {
//     if(process.env.NODE_ENV == 'development') {
//         api[k] = '/api/' + api[k];
//     } else {
//         api[k] = 'https://127.0.0.1:8888/' + api[k];
//     }
// }

export default api