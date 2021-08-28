/*轮播图*/
var lbt0 = document.getElementById("lbt0")
var lbt = document.getElementById("lbt")
var ul1 = document.getElementById("ul1")
var lis = ul1.children
var p1 = document.getElementById("p1")
var is0 = p1.children
var imgs = document.getElementsByClassName("imgs_")
var i;
var index = 0;
var msgs = document.getElementsByClassName("msg1")
document.documentElement.style.overflowX = 'hidden';

function clear_op() { //格式化图片为透明
	for (var o = 0; o < lis.length; o++) {
		lis[o].style.opacity = 0;
		lis[o].style.zIndex = "1"
	}
}

function clear_class() { //清除动画
	for (r = 0; r < msgs.length; r++) {
		msgs[r].classList.remove("bounceInRight")
		msgs[r].style.opacity = 0;
	
	}
}

function autoplay() {
	clear_class();
	clear_op();
	index++;
	// console.log(index)
	i = index;
	if (i == 6) {
		i = 0;
		index = 0;
	}
	msgs[index].classList.add("bounceInRight")
	msgs[index].style.opacity = 1;
	// console.log(i)
	lis[i].style.opacity = 1;
	lis[index].style.zIndex = "2";
	
	
	
	isColor();
}

var time = setInterval("autoplay()", 2000)


lbt0.onmouseover = function() {
	// console.log(1)
	clearInterval(time);
}

lbt0.onmouseout = function() {
	// console.log(2)
	time = setInterval("autoplay()", 2000)
}
for (var b = 0; b < is0.length; b++) {
	is0[b].index = b; //将索引存入存入is0[b].index中
	is0[b].onclick = function() {
		index = this.index //将索引拿出来使用
		for (var x = 0; x < lis.length; x++) {
			imgs[x].style.height = "82px"
			imgs[x].style.width = "164px"
			msgs[x].classList.remove("bounceInRight")
			msgs[x].style.opacity = 0;
		}
		imgs[index].style.height = "110px"
		imgs[index].style.width = "221px"
		// console.log(this.index)
		clear_op();
		lis[index].style.opacity = 1;
		lis[index].style.zIndex = "2";
		// lis[index].style.display = "block";
		
		msgs[index].classList.add("bounceInRight")
		msgs[index].style.opacity = 1;
	}
}

function isColor() {
	for (var x = 0; x < lis.length; x++) {
		imgs[x].style.height = "82px"
		imgs[x].style.width = "164px"
	}
	is0[i].style.transition = "all 1.5s"
	imgs[i].style.height = "110px"
	imgs[i].style.width = "221px"
}

/*手游助手*/
var game_li = document.getElementsByClassName("game_li")
var g_left = document.getElementsByClassName("g_left")
for(var c = 0; c<game_li.length; c++){
	game_li[c].index = c;
	game_li[c].onclick = function(){
		for(var y=0; y<game_li.length; y++){
			console.log(2)
			g_left[y].style.opacity = 0
			game_li[y].style.backgroundColor = ""
			game_li[y].style.color = ""
			game_li[y].classList.remove("color_li")
		}
		var index = this.index
		console.log(index)
		g_left[index].style.opacity = 1
		this.style.backgroundColor = "#2e2e33"
		this.style.color = "#ff3f3f"
		this.classList.add("color_li")
	}
}

/*更多游戏切换*/
var mg_top = document.getElementsByClassName("mg-top")
var mg_lis = mg_top[0].children
var mg_ul = document.getElementsByClassName("mg-div")
console.log(mg_lis.length)
for(var m = 0; m< mg_lis.length; m++){
	mg_lis[m].index = m;
	mg_lis[m].onclick = function(){
		for(var i= 0;i<mg_lis.length;i++){
			mg_lis[i].style.borderBottom= "3px solid #3d3c45"
			mg_lis[i].style.color = "#8e8e91"
		}
		var index = this.index
		console.log(index)
		mg_lis[index].style.borderBottom= "3px solid #ff3f3f"
		mg_lis[index].style.color = "white"
		mg_ul[0].style.marginLeft = -1080*index +"px"
	}
}