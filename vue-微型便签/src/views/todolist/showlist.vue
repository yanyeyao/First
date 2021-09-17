<template>
	<div class="">
		<div class="todos">
			<div class="todo" v-for="(item, index) in list" @dblclick="shuangji(index)" :key="index">
				<input type="checkbox" v-model="item.line" @click="gx_data()"/>
				<span :class="{'line':item.line}">{{ item.toDo }}</span>
				<span class="close" @click="del(index)"></span>
				<input type="text" v-model="item.toDo" class="input1" @blur="blur(index)" v-if="item.show_inp" ref="gain" @keydown.enter="enterFun2(index)" />
			</div>
			
		</div>
	</div>
</template>

<script>
	export default {
		// 1.子组件可以使用 props 获取父组件的值。
		//	<showlist :tlist="list"></showlist>
		
		// 2.子组件可以使用 $emit 触发父组件的自定义事件，利用函数使父组件获取到子组件传过来的值。
		//子组件传输数据到父组件 setlist为自定义事件，且在父组件触发事件时一般使用函数接收值 <showlist @setTodolist="getTodolist"></showlist>
		//子组件不能直接修改父组件的所传参数
		props:{
			tlist: Array
		},
		data(){
			return{
				list: [{line: false, toDo:'吃饭睡觉', show_inp: false},{line: false, toDo:'唱歌跳舞', show_inp: false}],
			}
		},
		emits: ['setTodolist'],
		methods:{
			//点击复选框实时更新数据
			gx_data(){
				this.$emit('setTodolist', this.list)
			},
			//双击进行编辑
			shuangji(i){
				this.list[i].show_inp = true
				this.$nextTick( () =>{
				    this.$refs.gain.focus()
				})
			},
			//失去焦点
			blur(i){
				this.list[i].show_inp = false
				//更新list
				this.$emit('setTodolist', this.list)
			},
			//回车键
			enterFun2(i){
				this.list[i].show_inp = false
				//更新list
				this.$emit('setTodolist', this.list)
			},
			
			del(ind){
				//更加安全做法
				// let clone_list = [...this.list]
				// clone_list.splice(ind, 1)
				// this.list = [...clone_list]
				this.list.splice(ind,1)
				//更新list
				this.$emit('setTodolist', this.list)
			},
		},
		watch:{
			//监听父组件传来的值，并且赋值给子组件
			tlist:{
				handler(val){
					if(val){
						this.list = val
					}
				},
				deep: true
			}
		},
	}
</script>
<!-- scoped 确保当前的css文件只用于当前组件，防止css样式冲突 -->
<!-- lang="" 使用的语法 -->
<!-- @import url(""); 可以导入css文件 -->
<style>
	.todos {
		width: 100%;
	}
	
	.todo {
		padding: 20px 20px 11px 0;
		position: relative;
		font-size: 24px;
		line-height: 1.1em;
		border-bottom: 1px solid #cccccc;
	}
	.close {
		position: absolute;
		right: 5px;
		top: 22px;
		display: none;
		cursor: pointer;
		width: 20px;
		height: 20px;
		background: url(../../../public/destroy.png) no-repeat 0 0;
	}
	.close:hover{
		background-position: 0 -20px;
	}
	.todo:hover .close{
		display: block;
	}
	.line{
		color: #777777;
		text-decoration: line-through;
	}
	.editDiv{
		width: 100%;
		height: 100%;
	}
	.input1{
		position: absolute;
		padding-left: 10px;
		box-sizing: border-box;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		font-size: 24px;
		/* display: none; */
	}
</style>
