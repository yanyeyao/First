
	// 头部导航栏
	var centernav = document.getElementsByClassName("center_nav");
	//console.log(centernav[0].offsetTop);
	//console.log(centernav[0].offsetHeight)
	// 游戏APP下载 点击滑动
	
	// var scrolltop = $(window).scrollTop();
	//console.log(scrolltop);
	
	//头部导航栏 滑动定位
	window.onscroll=function(){
	    var topScroll =document.documentElement.scrollTop;//滚动的距离,距离顶部的距离
		//console.log(topScroll);
		centernav_num = Number(centernav[0].offsetTop)+Number(centernav[0].offsetHeight);
	    if(topScroll>centernav_num){
			centernav[0].style.position="fixed";
			centernav[0].style.top=0+"px";
	   }
	   else if(topScroll<150){
			centernav[0].style.position="";
			centernav[0].style.top="";
	   }
	}
	// 游戏APP下载 点击滑动
	var hotgameapp = document.getElementsByName("hotgame_app");
	var sortapp = document.getElementsByName("sort_app");
	var navsortapp = document.getElementsByName("nav_sortapp");
	//console.log(hotgameapp);
	
	GoappScrollToView();
	function GoappScrollToView(){
		for(var j=0;j<hotgameapp.length;j++){
			hotgameapp[j].index=j;
			hotgameapp[j].onclick = function(){
				scrollToView(this.index);
				//console.log(this.index);
			}
		}
		for(var j=0;j<navsortapp.length;j++){
			navsortapp[j].index=j;
			navsortapp[j].onclick = function(){
				scrollToView(this.index);
				//console.log(this.index);
			}
		}
	}
	function scrollToView (th) {
		//console.log(th)
		sortapp[th].scrollIntoView({
		        block: 'center',//垂直方向
		        inline: 'start',//水平方向
		        behavior: 'smooth'//滑动效果
		 })
	}
	
	//热门游戏 下面div 鼠标滑过显示内容
	var hotgamedownload = document.getElementsByClassName("hotgame_download");
	var hotgame_img_text = document.getElementsByClassName("hotgame_img_text");
	HoverNav();
	function HoverNav(){
		for(var j=0;j<hotgamedownload.length;j++){
			hotgamedownload[j].index=j;
			hotgamedownload[j].onmouseover = function(){
				hotgame_img_text[this.index].style.opacity="1";
			}
			hotgamedownload[j].onmouseout = function(){
				hotgame_img_text[this.index].style.opacity="";
			}
		}
	}