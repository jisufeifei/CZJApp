// 此vm参数为页面的实例，可以通过它引用vuex中的变量
module.exports = (vm) => {
    // 初始化请求配置
    uni.$u.http.setConfig((config) => {
        /* config 为默认全局配置*/
        // config.baseURL = 'https://www.example.com'; /* 根域名 */
		custom: {
			auth: true //是否携带token
		}
        return config
    })
	
	// 请求拦截
	uni.$u.http.interceptors.request.use((config) => { // 可使用async await 做异步操作
			// console.log(config)
			// 初始化请求拦截器时，会执行此方法，此时data为undefined，赋予默认{}
			// config.data = config.data || {};
			// 根据custom参数中配置的是否需要token，添加对应的请求头
			// if(config?.custom?.auth) {
				// 可以在此通过vm引用vuex中的变量，具体值在vm.$store.state中
			let token = uni.getStorageSync('token')
			// console.log(token)
			config.header.token = token || '';
			// }
			return config 
		}, config => { // 可使用async await 做异步操作
			return Promise.reject(config)
	})
	
	// 响应拦截
	uni.$u.http.interceptors.response.use((response) => { /* 对响应成功做点什么 可使用async await 做异步操作*/
		// console.log(response);
		// 自定义参数
		
		const data = response.data;
		// console.log(data)
		if(data.code != 0){
			if (data.code == 401) {
				console.log('401')
			// 如果没有显式定义custom的toast参数为false的话，默认对报错进行toast弹出提示
			// if (custom.toast !== false) {
				//#ifdef MP-WEIXIN
				const str = '你好久没来好招了<br>请重新登录后再继续';
				var content = str.replace(/<br>/g,"\n")
				//#endif
				uni.setStorage('token', '');
				return uni.showModal({
					title: '',
					//#ifndef MP-WEIXIN
					content: `你好久没来好招了\n请重新登录后再继续`,
					//#endif
					//#ifdef MP-WEIXIN
					content: content,
					//#endif
					// showCancel: false,
					confirmColor: '#FD8919',
					cancelColor: '#909399',
					success: (res) => {
						if(res.confirm) {
							// console.log('confirm')
							// console.log(uni.$u)
							uni.$u.route({
								type: 'redirect',
								url: '/pages/login/index'
							})
						}
					}
				})
			}
			if(data.code == 500){
				return uni.$u.toast(data.msg)
			}
		}
		// return data.data
		return Promise.resolve(data.data)
		// }
		// return Promise.resolve(data.res)
		
		
		// if(data.code != 200 && data.code != 401){
		// 	uni.$u.toast(data.msg)
		// 	return false
		// }
        // return Promise.resolve({
        //     success: true,
        //     data: data
        // })
	}, (rej) => { 
        console.log(rej)
        // return response
		// 对响应错误做点什么 （statusCode !== 200）
		return Promise.reject({
            success: false,
            error: rej
        })
	});
}