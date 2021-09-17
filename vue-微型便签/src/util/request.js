//导入
import axios from 'axios'
import base_url from '../../env.js'

//建一个axios实例
var services = axios.created({
	base_url: base_url ,//配置base_url
	timeout: 5000,		//请求超时单位是毫秒
	
	
})

//请求拦截器，配置一些访问后台的条件
services.interceptors.request.use( (config) => {
	//config配置
	console.log(config)
}, (err) => {
	// 可能出现的问题：跨域
	console.log(err, '请求失败信息')
})

//响应拦截器，可以根据后台返回数据进行对应逻辑
services.interceptors.response.use( (response) => {
	//response响应信息 
	console.log(response, '响应信息')
	//根据后台标志符去做某些事情
}, (err) => {
	// 可能出现的问题：服务器崩了
	console.log(err, '响应错误信息')
})

export default services