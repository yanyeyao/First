<template>
	<div class="">
		<div class="input-div">
			<input type="text"  placeholder="What needs to be done?"  @keydown.enter="enterFun()" v-model="listMsg"/>
				
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return{
				listMsg: '',
			}
		},
		methods:{
			//回车键添加内容
			enterFun(){
				// 1.父组件可以使用 props 把数据传给子组件。
				// 2.子组件可以使用 $emit 触发父组件的自定义事件。
				//子组件传输数据到父组件 setlist为自定义事件，且在父组件触发事件时一般使用函数接收值
				this.$emit('setlist',{line: false, toDo: this.listMsg, show_inp: false})
				this.listMsg = ''
			},
		},
	}
</script>
<!-- scoped 确保当前的css文件只用于当前组件，防止css样式冲突 -->
<!-- lang="" 使用的语法 -->
<!-- @import url(""); 可以导入css文件 -->
<style>
	.input-div {
		text-align: center;
	
	}
	.input-div input {
		outline: none;
		border: 1px solid #999999;
		width: 100%;
		line-height: 1.4em;
		padding: 6px;
		box-shadow: rgb(0 0 0 / 20%) 0 1px 2px 0 inset;
		box-sizing: border-box;
		font-size: 24px;
	}
</style>
