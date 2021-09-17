//项目运行相关配置
module.exports = {
	publicPath: './', //部署应用包时的基本url
	outputDir: 'dist' ,//输出文件路径
	assetsDir: 'assets', //静态文件路径
	
	devServer: {
		open: true,//运行后自动在浏览器打开
		port:13060 ,// 修改运行时服务器端口
		https: false,
		
	}
}