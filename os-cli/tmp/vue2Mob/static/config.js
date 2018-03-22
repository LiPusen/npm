// 服务器环境相关参数配置
//全局配置
(function(win) {
	// 接口环境配置参数
	const origin = (location.hostname == 'localhost' || location.hostname == '127.0.0.1') ? 'http://myyop.meia8.com' : location.origin;
	win.htp = {
		api: origin   // B端服务器地址
	}
})(this)
