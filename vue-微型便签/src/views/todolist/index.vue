<template>
	<div class="todolist-page">
		<div class="d1">
			<h2>Todos</h2>

			<!-- 输入框组件化  <addlist></addlist> -->
			<!-- 数据传递：@setlist为addlist.vue页面所添加的一条todolist   addtodolist为本页面接收数据的函数-->
			<addlist @setlist='addtodolist'></addlist>

			<!-- :tlist为子组件的，目的是为了获取父组件list的值 -->
			<showlist :tlist="list" @setTodolist="getTodolist"></showlist>
			<div class="bottom">
				<span class="b-left"><span style="font-weight: 600;">{{ Count }}</span> items left</span>
				<span class="b-right">Clear <span>{{ list.length - Count }}</span> completed items</span>
			</div>
			<div class="del_check" @click="del_check()">delete check</div>
		</div>
		<div class="d2">
			Double-click to edit a todo.
		</div>
		<div>{{ get_ajax_msg }},11111</div>
	</div>
</template>

<script>
	// 组件化过程 
	// 1.新建一个xx.vue文件 样式，功能等在xx.vue本页面完成
	// 2.import xx from './xx.vue'
	// 3.components: {xx},
	import addlist from './addlist.vue'
	import showlist from './showlist.vue'
	export default {
		components: {
			addlist,
			showlist
		},
		data() {
			return {
				listMsg: '',
				list: [{
					line: false,
					toDo: '吃饭睡觉',
					show_inp: false
				}, {
					line: false,
					toDo: '唱歌跳舞',
					show_inp: false
				}],
				new_list: {
					line: false,
					toDo: '',
					show_inp: false
				},
				fc: false,
				get_ajax_msg: ''
			}
		},
		//computed用来监控自己定义的变量，该变量不在data里面声明，直接在computed里面定义，然后就可以在页面上进行双向数据绑定展示出结果或者用作其他处理；
		computed: {
			//计数，
			Count() {
				let count = 0
				this.list.forEach(item => {
					if (item.line) {
						console.log('计数1')
						count++
					}
				})
				return count
			},

		},
		created(){
			this.getDataInfo()
		},
		methods: {
			//XMLHttpRequest
			// 传统的AJAX
			// XMLHttpRequest使用
			getDataInfo() {
				let xmr = new XMLHttpRequest()
				// 使用 open 方法 完成请求
				// GET POST PUT DELETE
				xmr.open('GET', 'https://api.tianapi.com/txapi/worldtime/index?key=2fad777c3592a1e88b11c070c83ba26b&city=北京')
				// 向服务器发送
				xmr.send(null)

				// xmr.onreadystatechange 状态改变回调函数
				xmr.onreadystatechange = () => {
					console.log(xmr.readyState)
					/* readyState 5个状态
					o- (未初始化)还没有调用send()方法
					1 -(载入）已调用send()方法，正在发送请求
					2-(载入完成) send()方法执行完成，已经接收到全部响应内容
					3-(交互)正在解析响应内容
					4-(完成)响应内容解析完成，可以在客户端调用了*/
					if (xmr.readyState == 4) {
						// xmr.status  http响应状态码

						if (xmr.status == 200) {
							//判断接口给的code是否是正常
							let rus = JSON.parse(xmr.responseText)
							if (rus.code == 200) {
								console.log(rus.newslist[0].city)
								this.get_ajax_msg = rus.newslist[0].city
								console.log(this.get_ajax_msg)
							} else {
								window.alert(rus.msg)
							}
						}
					}
				}
			},


			//删除选中
			del_check() {
				let clone_list = []
				this.list.forEach((item, index) => {
					if (!item.line) {
						clone_list.push(item)
					}
				})
				this.list = [...clone_list]
			},

			//组件化后添加内容
			addtodolist(val) {
				this.list.push(val)
			},

			del(ind) {
				//更加安全做法
				// let clone_list = [...this.list]
				// clone_list.splice(ind, 1)
				// this.list = [...clone_list]
				this.list.splice(ind, 1)
			},
			//获取数据
			getTodolist(val) {
				console.log(val)
				this.list = [...val]
			}
		},
	}
</script>
<!-- scoped 确保当前的css文件只用于当前组件，防止css样式冲突 -->
<!-- lang="" 使用的语法 -->
<!-- @import url(""); 可以导入css文件 -->
<style>
	* {
		margin: 0;
		padding: 0;
	}

	html,
	body {
		height: 100%;
		width: 100%;

	}

	.d1 {
		margin: 0 auto;
		width: 520px;
		background-color: white;
		padding: 20px;
		box-shadow: rgb(0 0 0 / 20%) 0 5px 6px 0;
	}

	h2 {
		text-align: center;
		margin-bottom: 20px;
	}


	.bottom {
		padding-top: 20px;
		display: flex;
		justify-content: space-between;
	}

	.bottom span {
		color: #777;
		font-size: 14px;
	}

	.b-right {
		text-decoration: underline
	}

	.d2 {
		text-align: center;
		color: #777777;
		margin-top: 50px;
	}


	.editDiv {
		width: 100%;
		height: 100%;
	}


	.del_check {
		cursor: pointer;
		margin-top: 20px;
		width: 100px;
		height: 20px;
		padding: 10px 0;
		line-height: 20px;
		font-size: 14px;
		text-align: center;
		border-radius: 5px;
		background-color: #00FFFF;
	}
</style>
