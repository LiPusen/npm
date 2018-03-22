// 接口管理
const api = {
    "login": "/api/oauth/login",
    "settle": "/api/member/querySettlementSummary",
    "queryData": "/api/member/queryOrderSettlementDetailListPage",
    "logOut": "/api/oauth/logOut"
};
// 不同环境分发
for(var k in api) {
    if(process.env.NODE_ENV == 'development') {
        api[k] = '/v' + api[k];
    } else {
        api[k] = htp.api + api[k];
    }
}

export default api
