//导航栏切换页面
var menu_li = document.getElementsByClassName("menu_li");
var page = document.getElementsByClassName("left_main");
for (var h = 0 ; h < menu_li.length; h++){
	menu_li[h].num = h;
	menu_li[h].onclick = function(){
		for(var i = 0 ; i < menu_li.length; i++){
			menu_li[i].style.color = "#929295";
			menu_li[i].style.borderBottom = "4px solid #3d3c45";
			page[i].style.display = "none";
		}
		this.style.color = "#fff";
		this.style.borderBottom = "4px solid #ff3f3f";
		page[this.num].style.display = "block";
	}
}

//克隆标签
var Left_list1 = document.getElementById("left_list1");
var Left_list_list1 = Left_list1.children;
var Left_lists1 = [{
	title:"《俄罗斯方块环游记》，101人大乱斗的场面你可见过？",
	summary:"相信很多人玩过的第一款电子游戏，都是简单却又十分有趣的俄罗斯方块。从俄罗斯方块的诞生，到现在已经有三十多年的时间了，即便是不怎么玩游戏的朋友，应该也都知道这款休闲小游戏。如今正版授权的《俄罗斯方块环游",
	time:"2021-08-03 14:08:00",
	src:"img/1fc5an61p0.juom7esfujg.jpeg"
},{
	title:"电脑玩斗罗大陆：魂师对决-100%开盲盒，怎么用电脑玩斗罗大陆：魂师对决-100%开盲盒手游",
	summary:"———2亿魂师推荐，真3D战斗手游——— 21年度国民级IP战斗手游巨作，由阅文集团和腾讯动画正版授权，2亿用户推荐，和动画一模一样的《斗罗大陆：魂师对决》7月22日正式公测！   超越斗罗大陆，颠覆",
	time:"2021-07-16 06:07:00",
	src:"img/1fb602rqo0.29qlp7c2o5g.png"
},{
	title:"腾讯手游助手如何设置不卡顿",
	summary:"1.打开腾讯手游助手，点击右上角的设置2.选择设置中心3.再然后将基本设置的“截屏录屏设置”存储位置改为不是系统盘存储，点击保存4.将分辨率调一些，在“引擎设置”将分辨率设置为较低的水平，同时抗锯齿，",
	time:"2021-08-03 10:08:00",
	src:"img/1fc527vqd0.i8oip7s2dt.jpeg"
},{
	title:"《俄罗斯方块环游记》，101人大乱斗的场面你可见过？",
	summary:"相信很多人玩过的第一款电子游戏，都是简单却又十分有趣的俄罗斯方块。从俄罗斯方块的诞生，到现在已经有三十多年的时间了，即便是不怎么玩游戏的朋友，应该也都知道这款休闲小游戏。如今正版授权的《俄罗斯方块环游",
	time:"2021-08-03 14:08:00",
	src:"img/1fc5an61p0.juom7esfujg.jpeg"
},{
	title:"电脑玩斗罗大陆：魂师对决-100%开盲盒，怎么用电脑玩斗罗大陆：魂师对决-100%开盲盒手游",
	summary:"———2亿魂师推荐，真3D战斗手游——— 21年度国民级IP战斗手游巨作，由阅文集团和腾讯动画正版授权，2亿用户推荐，和动画一模一样的《斗罗大陆：魂师对决》7月22日正式公测！   超越斗罗大陆，颠覆",
	time:"2021-07-16 06:07:00",
	src:"img/1fb602rqo0.29qlp7c2o5g.png"
},{
	title:"腾讯手游助手如何设置不卡顿",
	summary:"1.打开腾讯手游助手，点击右上角的设置2.选择设置中心3.再然后将基本设置的“截屏录屏设置”存储位置改为不是系统盘存储，点击保存4.将分辨率调一些，在“引擎设置”将分辨率设置为较低的水平，同时抗锯齿，",
	time:"2021-08-03 10:08:00",
	src:"img/1fc527vqd0.i8oip7s2dt.jpeg"
},{
	title:"《俄罗斯方块环游记》，101人大乱斗的场面你可见过？",
	summary:"相信很多人玩过的第一款电子游戏，都是简单却又十分有趣的俄罗斯方块。从俄罗斯方块的诞生，到现在已经有三十多年的时间了，即便是不怎么玩游戏的朋友，应该也都知道这款休闲小游戏。如今正版授权的《俄罗斯方块环游",
	time:"2021-08-03 14:08:00",
	src:"img/1fc5an61p0.juom7esfujg.jpeg"
},{
	title:"电脑玩斗罗大陆：魂师对决-100%开盲盒，怎么用电脑玩斗罗大陆：魂师对决-100%开盲盒手游",
	summary:"———2亿魂师推荐，真3D战斗手游——— 21年度国民级IP战斗手游巨作，由阅文集团和腾讯动画正版授权，2亿用户推荐，和动画一模一样的《斗罗大陆：魂师对决》7月22日正式公测！   超越斗罗大陆，颠覆",
	time:"2021-07-16 06:07:00",
	src:"img/1fb602rqo0.29qlp7c2o5g.png"
},{
	title:"腾讯手游助手如何设置不卡顿",
	summary:"1.打开腾讯手游助手，点击右上角的设置2.选择设置中心3.再然后将基本设置的“截屏录屏设置”存储位置改为不是系统盘存储，点击保存4.将分辨率调一些，在“引擎设置”将分辨率设置为较低的水平，同时抗锯齿，",
	time:"2021-08-03 10:08:00",
	src:"img/1fc527vqd0.i8oip7s2dt.jpeg"
},{
	title:"《俄罗斯方块环游记》，101人大乱斗的场面你可见过？",
	summary:"相信很多人玩过的第一款电子游戏，都是简单却又十分有趣的俄罗斯方块。从俄罗斯方块的诞生，到现在已经有三十多年的时间了，即便是不怎么玩游戏的朋友，应该也都知道这款休闲小游戏。如今正版授权的《俄罗斯方块环游",
	time:"2021-08-03 14:08:00",
	src:"img/1fc5an61p0.juom7esfujg.jpeg"
}]
for(var i=0 ; i<Left_lists1.length; i++){
	var clone_left_list1 = Left_list_list1[0].cloneNode();
	clone_left_list1.innerHTML = '<a href=""><div class="left_list_left"><h3 onmouseover="overdiscolor(this)" onmouseout="outdiscolor(this)">'+Left_lists1[i].title+'</h3><h4>'+Left_lists1[i].summary+'</h4><p>'+Left_lists1[i].time+'</div><div class="left_list_right"><img src="'+Left_lists1[i].src+'"></div></a>';
	Left_list1.appendChild(clone_left_list1);
}
Left_list1.removeChild(Left_list_list1[0]);


var Left_list2 = document.getElementById("left_list2");
var Left_list_list2 = Left_list2.children;
var Left_lists2 = [{
	title:"《俄罗斯方块环游记》，101人大乱斗的场面你可见过？",
	summary:"相信很多人玩过的第一款电子游戏，都是简单却又十分有趣的俄罗斯方块。从俄罗斯方块的诞生，到现在已经有三十多年的时间了，即便是不怎么玩游戏的朋友，应该也都知道这款休闲小游戏。如今正版授权的《俄罗斯方块环游",
	time:"2021-08-03 14:08:00",
	src:"img/1fc5an61p0.juom7esfujg.jpeg"
},{
	title:"电脑玩斗罗大陆：魂师对决-100%开盲盒，怎么用电脑玩斗罗大陆：魂师对决-100%开盲盒手游",
	summary:"———2亿魂师推荐，真3D战斗手游——— 21年度国民级IP战斗手游巨作，由阅文集团和腾讯动画正版授权，2亿用户推荐，和动画一模一样的《斗罗大陆：魂师对决》7月22日正式公测！   超越斗罗大陆，颠覆",
	time:"2021-07-16 06:07:00",
	src:"img/1fb602rqo0.29qlp7c2o5g.png"
},{
	title:"腾讯手游助手如何设置不卡顿",
	summary:"1.打开腾讯手游助手，点击右上角的设置2.选择设置中心3.再然后将基本设置的“截屏录屏设置”存储位置改为不是系统盘存储，点击保存4.将分辨率调一些，在“引擎设置”将分辨率设置为较低的水平，同时抗锯齿，",
	time:"2021-08-03 10:08:00",
	src:"img/1fc527vqd0.i8oip7s2dt.jpeg"
},{
	title:"《俄罗斯方块环游记》，101人大乱斗的场面你可见过？",
	summary:"相信很多人玩过的第一款电子游戏，都是简单却又十分有趣的俄罗斯方块。从俄罗斯方块的诞生，到现在已经有三十多年的时间了，即便是不怎么玩游戏的朋友，应该也都知道这款休闲小游戏。如今正版授权的《俄罗斯方块环游",
	time:"2021-08-03 14:08:00",
	src:"img/1fc5an61p0.juom7esfujg.jpeg"
},{
	title:"电脑玩斗罗大陆：魂师对决-100%开盲盒，怎么用电脑玩斗罗大陆：魂师对决-100%开盲盒手游",
	summary:"———2亿魂师推荐，真3D战斗手游——— 21年度国民级IP战斗手游巨作，由阅文集团和腾讯动画正版授权，2亿用户推荐，和动画一模一样的《斗罗大陆：魂师对决》7月22日正式公测！   超越斗罗大陆，颠覆",
	time:"2021-07-16 06:07:00",
	src:"img/1fb602rqo0.29qlp7c2o5g.png"
},{
	title:"腾讯手游助手如何设置不卡顿",
	summary:"1.打开腾讯手游助手，点击右上角的设置2.选择设置中心3.再然后将基本设置的“截屏录屏设置”存储位置改为不是系统盘存储，点击保存4.将分辨率调一些，在“引擎设置”将分辨率设置为较低的水平，同时抗锯齿，",
	time:"2021-08-03 10:08:00",
	src:"img/1fc527vqd0.i8oip7s2dt.jpeg"
},{
	title:"《俄罗斯方块环游记》，101人大乱斗的场面你可见过？",
	summary:"相信很多人玩过的第一款电子游戏，都是简单却又十分有趣的俄罗斯方块。从俄罗斯方块的诞生，到现在已经有三十多年的时间了，即便是不怎么玩游戏的朋友，应该也都知道这款休闲小游戏。如今正版授权的《俄罗斯方块环游",
	time:"2021-08-03 14:08:00",
	src:"img/1fc5an61p0.juom7esfujg.jpeg"
},{
	title:"电脑玩斗罗大陆：魂师对决-100%开盲盒，怎么用电脑玩斗罗大陆：魂师对决-100%开盲盒手游",
	summary:"———2亿魂师推荐，真3D战斗手游——— 21年度国民级IP战斗手游巨作，由阅文集团和腾讯动画正版授权，2亿用户推荐，和动画一模一样的《斗罗大陆：魂师对决》7月22日正式公测！   超越斗罗大陆，颠覆",
	time:"2021-07-16 06:07:00",
	src:"img/1fb602rqo0.29qlp7c2o5g.png"
},{
	title:"腾讯手游助手如何设置不卡顿",
	summary:"1.打开腾讯手游助手，点击右上角的设置2.选择设置中心3.再然后将基本设置的“截屏录屏设置”存储位置改为不是系统盘存储，点击保存4.将分辨率调一些，在“引擎设置”将分辨率设置为较低的水平，同时抗锯齿，",
	time:"2021-08-03 10:08:00",
	src:"img/1fc527vqd0.i8oip7s2dt.jpeg"
},{
	title:"《俄罗斯方块环游记》，101人大乱斗的场面你可见过？",
	summary:"相信很多人玩过的第一款电子游戏，都是简单却又十分有趣的俄罗斯方块。从俄罗斯方块的诞生，到现在已经有三十多年的时间了，即便是不怎么玩游戏的朋友，应该也都知道这款休闲小游戏。如今正版授权的《俄罗斯方块环游",
	time:"2021-08-03 14:08:00",
	src:"img/1fc5an61p0.juom7esfujg.jpeg"
}]
for(var i=0 ; i<Left_lists2.length; i++){
	var clone_left_list2 = Left_list_list2[0].cloneNode();
	clone_left_list2.innerHTML = '<a href=""><div class="left_list_left"><h3 onmouseover="overdiscolor(this)" onmouseout="outdiscolor(this)">'+Left_lists2[i].title+'</h3><h4>'+Left_lists2[i].summary+'</h4><p>'+Left_lists2[i].time+'</div><div class="left_list_right"><img src="'+Left_lists2[i].src+'"></div></a>';
	Left_list2.appendChild(clone_left_list2);
}
Left_list2.removeChild(Left_list_list2[0]);


var Left_list3 = document.getElementById("left_list3");
var Left_list_list3 = Left_list3.children;
var Left_lists3 = [{
	title:"《俄罗斯方块环游记》，101人大乱斗的场面你可见过？",
	summary:"相信很多人玩过的第一款电子游戏，都是简单却又十分有趣的俄罗斯方块。从俄罗斯方块的诞生，到现在已经有三十多年的时间了，即便是不怎么玩游戏的朋友，应该也都知道这款休闲小游戏。如今正版授权的《俄罗斯方块环游",
	time:"2021-08-03 14:08:00",
	src:"img/1fc5an61p0.juom7esfujg.jpeg"
},{
	title:"电脑玩斗罗大陆：魂师对决-100%开盲盒，怎么用电脑玩斗罗大陆：魂师对决-100%开盲盒手游",
	summary:"———2亿魂师推荐，真3D战斗手游——— 21年度国民级IP战斗手游巨作，由阅文集团和腾讯动画正版授权，2亿用户推荐，和动画一模一样的《斗罗大陆：魂师对决》7月22日正式公测！   超越斗罗大陆，颠覆",
	time:"2021-07-16 06:07:00",
	src:"img/1fb602rqo0.29qlp7c2o5g.png"
},{
	title:"腾讯手游助手如何设置不卡顿",
	summary:"1.打开腾讯手游助手，点击右上角的设置2.选择设置中心3.再然后将基本设置的“截屏录屏设置”存储位置改为不是系统盘存储，点击保存4.将分辨率调一些，在“引擎设置”将分辨率设置为较低的水平，同时抗锯齿，",
	time:"2021-08-03 10:08:00",
	src:"img/1fc527vqd0.i8oip7s2dt.jpeg"
},{
	title:"《俄罗斯方块环游记》，101人大乱斗的场面你可见过？",
	summary:"相信很多人玩过的第一款电子游戏，都是简单却又十分有趣的俄罗斯方块。从俄罗斯方块的诞生，到现在已经有三十多年的时间了，即便是不怎么玩游戏的朋友，应该也都知道这款休闲小游戏。如今正版授权的《俄罗斯方块环游",
	time:"2021-08-03 14:08:00",
	src:"img/1fc5an61p0.juom7esfujg.jpeg"
},{
	title:"电脑玩斗罗大陆：魂师对决-100%开盲盒，怎么用电脑玩斗罗大陆：魂师对决-100%开盲盒手游",
	summary:"———2亿魂师推荐，真3D战斗手游——— 21年度国民级IP战斗手游巨作，由阅文集团和腾讯动画正版授权，2亿用户推荐，和动画一模一样的《斗罗大陆：魂师对决》7月22日正式公测！   超越斗罗大陆，颠覆",
	time:"2021-07-16 06:07:00",
	src:"img/1fb602rqo0.29qlp7c2o5g.png"
},{
	title:"腾讯手游助手如何设置不卡顿",
	summary:"1.打开腾讯手游助手，点击右上角的设置2.选择设置中心3.再然后将基本设置的“截屏录屏设置”存储位置改为不是系统盘存储，点击保存4.将分辨率调一些，在“引擎设置”将分辨率设置为较低的水平，同时抗锯齿，",
	time:"2021-08-03 10:08:00",
	src:"img/1fc527vqd0.i8oip7s2dt.jpeg"
},{
	title:"《俄罗斯方块环游记》，101人大乱斗的场面你可见过？",
	summary:"相信很多人玩过的第一款电子游戏，都是简单却又十分有趣的俄罗斯方块。从俄罗斯方块的诞生，到现在已经有三十多年的时间了，即便是不怎么玩游戏的朋友，应该也都知道这款休闲小游戏。如今正版授权的《俄罗斯方块环游",
	time:"2021-08-03 14:08:00",
	src:"img/1fc5an61p0.juom7esfujg.jpeg"
},{
	title:"电脑玩斗罗大陆：魂师对决-100%开盲盒，怎么用电脑玩斗罗大陆：魂师对决-100%开盲盒手游",
	summary:"———2亿魂师推荐，真3D战斗手游——— 21年度国民级IP战斗手游巨作，由阅文集团和腾讯动画正版授权，2亿用户推荐，和动画一模一样的《斗罗大陆：魂师对决》7月22日正式公测！   超越斗罗大陆，颠覆",
	time:"2021-07-16 06:07:00",
	src:"img/1fb602rqo0.29qlp7c2o5g.png"
},{
	title:"腾讯手游助手如何设置不卡顿",
	summary:"1.打开腾讯手游助手，点击右上角的设置2.选择设置中心3.再然后将基本设置的“截屏录屏设置”存储位置改为不是系统盘存储，点击保存4.将分辨率调一些，在“引擎设置”将分辨率设置为较低的水平，同时抗锯齿，",
	time:"2021-08-03 10:08:00",
	src:"img/1fc527vqd0.i8oip7s2dt.jpeg"
},{
	title:"《俄罗斯方块环游记》，101人大乱斗的场面你可见过？",
	summary:"相信很多人玩过的第一款电子游戏，都是简单却又十分有趣的俄罗斯方块。从俄罗斯方块的诞生，到现在已经有三十多年的时间了，即便是不怎么玩游戏的朋友，应该也都知道这款休闲小游戏。如今正版授权的《俄罗斯方块环游",
	time:"2021-08-03 14:08:00",
	src:"img/1fc5an61p0.juom7esfujg.jpeg"
}]
for(var i=0 ; i<Left_lists3.length; i++){
	var clone_left_list3 = Left_list_list3[0].cloneNode();
	clone_left_list3.innerHTML = '<a href=""><div class="left_list_left"><h3 onmouseover="overdiscolor(this)" onmouseout="outdiscolor(this)">'+Left_lists3[i].title+'</h3><h4>'+Left_lists3[i].summary+'</h4><p>'+Left_lists3[i].time+'</div><div class="left_list_right"><img src="'+Left_lists3[i].src+'"></div></a>';
	Left_list3.appendChild(clone_left_list3);
}
Left_list3.removeChild(Left_list_list3[0]);


var Left_list4 = document.getElementById("left_list4");
var Left_list_list4 = Left_list4.children;
var Left_lists4 = [{
	title:"《俄罗斯方块环游记》，101人大乱斗的场面你可见过？",
	summary:"相信很多人玩过的第一款电子游戏，都是简单却又十分有趣的俄罗斯方块。从俄罗斯方块的诞生，到现在已经有三十多年的时间了，即便是不怎么玩游戏的朋友，应该也都知道这款休闲小游戏。如今正版授权的《俄罗斯方块环游",
	time:"2021-08-03 14:08:00",
	src:"img/1fc5an61p0.juom7esfujg.jpeg"
},{
	title:"电脑玩斗罗大陆：魂师对决-100%开盲盒，怎么用电脑玩斗罗大陆：魂师对决-100%开盲盒手游",
	summary:"———2亿魂师推荐，真3D战斗手游——— 21年度国民级IP战斗手游巨作，由阅文集团和腾讯动画正版授权，2亿用户推荐，和动画一模一样的《斗罗大陆：魂师对决》7月22日正式公测！   超越斗罗大陆，颠覆",
	time:"2021-07-16 06:07:00",
	src:"img/1fb602rqo0.29qlp7c2o5g.png"
},{
	title:"腾讯手游助手如何设置不卡顿",
	summary:"1.打开腾讯手游助手，点击右上角的设置2.选择设置中心3.再然后将基本设置的“截屏录屏设置”存储位置改为不是系统盘存储，点击保存4.将分辨率调一些，在“引擎设置”将分辨率设置为较低的水平，同时抗锯齿，",
	time:"2021-08-03 10:08:00",
	src:"img/1fc527vqd0.i8oip7s2dt.jpeg"
},{
	title:"《俄罗斯方块环游记》，101人大乱斗的场面你可见过？",
	summary:"相信很多人玩过的第一款电子游戏，都是简单却又十分有趣的俄罗斯方块。从俄罗斯方块的诞生，到现在已经有三十多年的时间了，即便是不怎么玩游戏的朋友，应该也都知道这款休闲小游戏。如今正版授权的《俄罗斯方块环游",
	time:"2021-08-03 14:08:00",
	src:"img/1fc5an61p0.juom7esfujg.jpeg"
},{
	title:"电脑玩斗罗大陆：魂师对决-100%开盲盒，怎么用电脑玩斗罗大陆：魂师对决-100%开盲盒手游",
	summary:"———2亿魂师推荐，真3D战斗手游——— 21年度国民级IP战斗手游巨作，由阅文集团和腾讯动画正版授权，2亿用户推荐，和动画一模一样的《斗罗大陆：魂师对决》7月22日正式公测！   超越斗罗大陆，颠覆",
	time:"2021-07-16 06:07:00",
	src:"img/1fb602rqo0.29qlp7c2o5g.png"
},{
	title:"腾讯手游助手如何设置不卡顿",
	summary:"1.打开腾讯手游助手，点击右上角的设置2.选择设置中心3.再然后将基本设置的“截屏录屏设置”存储位置改为不是系统盘存储，点击保存4.将分辨率调一些，在“引擎设置”将分辨率设置为较低的水平，同时抗锯齿，",
	time:"2021-08-03 10:08:00",
	src:"img/1fc527vqd0.i8oip7s2dt.jpeg"
},{
	title:"《俄罗斯方块环游记》，101人大乱斗的场面你可见过？",
	summary:"相信很多人玩过的第一款电子游戏，都是简单却又十分有趣的俄罗斯方块。从俄罗斯方块的诞生，到现在已经有三十多年的时间了，即便是不怎么玩游戏的朋友，应该也都知道这款休闲小游戏。如今正版授权的《俄罗斯方块环游",
	time:"2021-08-03 14:08:00",
	src:"img/1fc5an61p0.juom7esfujg.jpeg"
},{
	title:"电脑玩斗罗大陆：魂师对决-100%开盲盒，怎么用电脑玩斗罗大陆：魂师对决-100%开盲盒手游",
	summary:"———2亿魂师推荐，真3D战斗手游——— 21年度国民级IP战斗手游巨作，由阅文集团和腾讯动画正版授权，2亿用户推荐，和动画一模一样的《斗罗大陆：魂师对决》7月22日正式公测！   超越斗罗大陆，颠覆",
	time:"2021-07-16 06:07:00",
	src:"img/1fb602rqo0.29qlp7c2o5g.png"
},{
	title:"腾讯手游助手如何设置不卡顿",
	summary:"1.打开腾讯手游助手，点击右上角的设置2.选择设置中心3.再然后将基本设置的“截屏录屏设置”存储位置改为不是系统盘存储，点击保存4.将分辨率调一些，在“引擎设置”将分辨率设置为较低的水平，同时抗锯齿，",
	time:"2021-08-03 10:08:00",
	src:"img/1fc527vqd0.i8oip7s2dt.jpeg"
},{
	title:"《俄罗斯方块环游记》，101人大乱斗的场面你可见过？",
	summary:"相信很多人玩过的第一款电子游戏，都是简单却又十分有趣的俄罗斯方块。从俄罗斯方块的诞生，到现在已经有三十多年的时间了，即便是不怎么玩游戏的朋友，应该也都知道这款休闲小游戏。如今正版授权的《俄罗斯方块环游",
	time:"2021-08-03 14:08:00",
	src:"img/1fc5an61p0.juom7esfujg.jpeg"
}]
for(var i=0 ; i<Left_lists4.length; i++){
	var clone_left_list4 = Left_list_list4[0].cloneNode();
	clone_left_list4.innerHTML = '<a href=""><div class="left_list_left"><h3 onmouseover="overdiscolor(this)" onmouseout="outdiscolor(this)">'+Left_lists4[i].title+'</h3><h4>'+Left_lists4[i].summary+'</h4><p>'+Left_lists4[i].time+'</div><div class="left_list_right"><img src="'+Left_lists4[i].src+'"></div></a>';
	Left_list4.appendChild(clone_left_list4);
}
Left_list4.removeChild(Left_list_list4[0]);


var Left_list5 = document.getElementById("left_list5");
var Left_list_list5 = Left_list5.children;
var Left_lists5 = [{
	title:"《俄罗斯方块环游记》，101人大乱斗的场面你可见过？",
	summary:"相信很多人玩过的第一款电子游戏，都是简单却又十分有趣的俄罗斯方块。从俄罗斯方块的诞生，到现在已经有三十多年的时间了，即便是不怎么玩游戏的朋友，应该也都知道这款休闲小游戏。如今正版授权的《俄罗斯方块环游",
	time:"2021-08-03 14:08:00",
	src:"img/1fc5an61p0.juom7esfujg.jpeg"
},{
	title:"电脑玩斗罗大陆：魂师对决-100%开盲盒，怎么用电脑玩斗罗大陆：魂师对决-100%开盲盒手游",
	summary:"———2亿魂师推荐，真3D战斗手游——— 21年度国民级IP战斗手游巨作，由阅文集团和腾讯动画正版授权，2亿用户推荐，和动画一模一样的《斗罗大陆：魂师对决》7月22日正式公测！   超越斗罗大陆，颠覆",
	time:"2021-07-16 06:07:00",
	src:"img/1fb602rqo0.29qlp7c2o5g.png"
},{
	title:"腾讯手游助手如何设置不卡顿",
	summary:"1.打开腾讯手游助手，点击右上角的设置2.选择设置中心3.再然后将基本设置的“截屏录屏设置”存储位置改为不是系统盘存储，点击保存4.将分辨率调一些，在“引擎设置”将分辨率设置为较低的水平，同时抗锯齿，",
	time:"2021-08-03 10:08:00",
	src:"img/1fc527vqd0.i8oip7s2dt.jpeg"
},{
	title:"《俄罗斯方块环游记》，101人大乱斗的场面你可见过？",
	summary:"相信很多人玩过的第一款电子游戏，都是简单却又十分有趣的俄罗斯方块。从俄罗斯方块的诞生，到现在已经有三十多年的时间了，即便是不怎么玩游戏的朋友，应该也都知道这款休闲小游戏。如今正版授权的《俄罗斯方块环游",
	time:"2021-08-03 14:08:00",
	src:"img/1fc5an61p0.juom7esfujg.jpeg"
},{
	title:"电脑玩斗罗大陆：魂师对决-100%开盲盒，怎么用电脑玩斗罗大陆：魂师对决-100%开盲盒手游",
	summary:"———2亿魂师推荐，真3D战斗手游——— 21年度国民级IP战斗手游巨作，由阅文集团和腾讯动画正版授权，2亿用户推荐，和动画一模一样的《斗罗大陆：魂师对决》7月22日正式公测！   超越斗罗大陆，颠覆",
	time:"2021-07-16 06:07:00",
	src:"img/1fb602rqo0.29qlp7c2o5g.png"
},{
	title:"腾讯手游助手如何设置不卡顿",
	summary:"1.打开腾讯手游助手，点击右上角的设置2.选择设置中心3.再然后将基本设置的“截屏录屏设置”存储位置改为不是系统盘存储，点击保存4.将分辨率调一些，在“引擎设置”将分辨率设置为较低的水平，同时抗锯齿，",
	time:"2021-08-03 10:08:00",
	src:"img/1fc527vqd0.i8oip7s2dt.jpeg"
},{
	title:"《俄罗斯方块环游记》，101人大乱斗的场面你可见过？",
	summary:"相信很多人玩过的第一款电子游戏，都是简单却又十分有趣的俄罗斯方块。从俄罗斯方块的诞生，到现在已经有三十多年的时间了，即便是不怎么玩游戏的朋友，应该也都知道这款休闲小游戏。如今正版授权的《俄罗斯方块环游",
	time:"2021-08-03 14:08:00",
	src:"img/1fc5an61p0.juom7esfujg.jpeg"
},{
	title:"电脑玩斗罗大陆：魂师对决-100%开盲盒，怎么用电脑玩斗罗大陆：魂师对决-100%开盲盒手游",
	summary:"———2亿魂师推荐，真3D战斗手游——— 21年度国民级IP战斗手游巨作，由阅文集团和腾讯动画正版授权，2亿用户推荐，和动画一模一样的《斗罗大陆：魂师对决》7月22日正式公测！   超越斗罗大陆，颠覆",
	time:"2021-07-16 06:07:00",
	src:"img/1fb602rqo0.29qlp7c2o5g.png"
},{
	title:"腾讯手游助手如何设置不卡顿",
	summary:"1.打开腾讯手游助手，点击右上角的设置2.选择设置中心3.再然后将基本设置的“截屏录屏设置”存储位置改为不是系统盘存储，点击保存4.将分辨率调一些，在“引擎设置”将分辨率设置为较低的水平，同时抗锯齿，",
	time:"2021-08-03 10:08:00",
	src:"img/1fc527vqd0.i8oip7s2dt.jpeg"
},{
	title:"《俄罗斯方块环游记》，101人大乱斗的场面你可见过？",
	summary:"相信很多人玩过的第一款电子游戏，都是简单却又十分有趣的俄罗斯方块。从俄罗斯方块的诞生，到现在已经有三十多年的时间了，即便是不怎么玩游戏的朋友，应该也都知道这款休闲小游戏。如今正版授权的《俄罗斯方块环游",
	time:"2021-08-03 14:08:00",
	src:"img/1fc5an61p0.juom7esfujg.jpeg"
}]
for(var i=0 ; i<Left_lists5.length; i++){
	var clone_left_list5 = Left_list_list5[0].cloneNode();
	clone_left_list5.innerHTML = '<a href=""><div class="left_list_left"><h3 onmouseover="overdiscolor(this)" onmouseout="outdiscolor(this)">'+Left_lists5[i].title+'</h3><h4>'+Left_lists5[i].summary+'</h4><p>'+Left_lists5[i].time+'</div><div class="left_list_right"><img src="'+Left_lists5[i].src+'"></div></a>';
	Left_list5.appendChild(clone_left_list5);
}
Left_list5.removeChild(Left_list_list5[0]);


var Download_list = document.getElementById("download_list");
var Download_list_list = Download_list.children;
var Download_lists = [{
	img:"img/96.png",
	title:"王者荣耀",
	summary:"S24赛季【长枪掠火】上线，新英雄云缨，风火来袭！"
},{
	img:"img/96(1).png",
	title:"和平精英",
	summary:"腾讯光子工作室群自研打造的军事竞赛体验手游。"
},{
	img:"img/96(2).png",
	title:"赏金侦探",
	summary:"轻悬疑推理破案APP"
},{
	img:"img/96(3).png",
	title:"天龙八部手游（门派：鬼谷）",
	summary:"社区化武侠MMORPG手机游戏"
},{
	img:"img/96(4).png",
	title:"欢乐斗地主（腾讯）",
	summary:"随时随地斗地主"
}]
for(var i=0 ; i<Download_lists.length; i++){
	var clone_download_list = Download_list_list[0].cloneNode();
	clone_download_list.innerHTML = '<a href=""><div class="download_list_left"><img src="'+Download_lists[i].img+'"/></div><div class="download_list_center"><h3 onmouseover="overdiscolor(this)" onmouseout="outdiscolor(this)">'+Download_lists[i].title+'</h3><p>'+Download_lists[i].summary+'<p></div><div class="download_list_right"><div onmouseover="overbtndiscolor(this)" onmouseout="outbtndiscolor(this)">下载</div></div></a>';
	Download_list.appendChild(clone_download_list);
}
Download_list.removeChild(Download_list_list[0]);


//鼠标移入事件
function overdiscolor(t){
	t.style.color = "#ff3f3f";
}
function overbtndiscolor(s){
	s.style.backgroundColor = "#ff3f3f";
}
function overbuttondiscolor(s){
	s.style.backgroundColor = "#ff5252";
}


//鼠标移出事件
function outdiscolor(c){
	c.style.color = "#fff";
}
function outbtndiscolor(x){
	x.style.backgroundColor = "#42424c";
}
function outbuttondiscolor(s){
	s.style.backgroundColor = "#ff3f3f";
}


// 底部
var tu = document.getElementById("tu");
tu.innerHTML = '<img src="img/T1.png" alt="">';
var good = document.getElementById("good");
good.innerHTML = '全球最快的电脑安卓模拟器，键鼠组合操控，精准灵活体验更佳';
var dl = document.getElementById("dl");
dl.innerHTML = '下载客户端';
dl.onmouseover = function() {
	dl.style.background = "rgba(255,63,63,0.8)";
}
dl.onmouseout = function() {
	dl.style.background = "#ff3f3f";
}
var Do = document.getElementById("do");
var do_list = Do.children;
var dy = [{
	s: "热门游戏",
	a1: "罗布乐思",
	a2: "斗罗大陆武魂觉醒",
	a3: "QQ飞车",
	a4: "王者荣耀",
	a5: "欢乐斗地主"
}, {
	s: "动作冒险",
	a1: "明日之后",
	a2: "一人之下",
	a3: "崩坏3",
	a4: "龙族幻想",
	a5: "魂斗罗:归来"
}, {
	s: "经营策略",
	a1: "火影忍者",
	a2: "小森生活",
	a3: "鸿图之下",
	a4: "三国志战略版",
	a5: "镇魂街:武神躯"
}, {
	s: "角色扮演",
	a1: "梦幻新诛仙",
	a2: "坎公骑冠剑",
	a3: "完美世界",
	a4: "雪鹰领主",
	a5: "剑与远征"
}, {
	s: "飞行射击",
	a1: "使命召唤",
	a2: "穿越火线",
	a3: "星际历险:流浪地球",
	a4: "王牌战土",
	a5: "和平精英"
}]
for (var i = 0; i < dy.length; i++) {
	var clone_dy = do_list[0].cloneNode();
	clone_dy.innerHTML = '<li><span>' + dy[i].s + '</span></li><li><a>' + dy[i].a1 + '</a></li><li><a>' + dy[i].a2 +
		'</a></li><li><a>' + dy[i].a3 +
		'</a></li><li><a>' + dy[i].a4 + '</a></li><li><a>' + dy[i].a5 + '</a></li>';
	Do.appendChild(clone_dy);
}
Do.removeChild(do_list[0]);
var Dt = document.getElementById("dt");
var dt_list = Dt.children;
var de = [{
	s: "关于助手",
	a1: "版权所有",
	a2: "关于我们",
	a3: "隐私政策",
	a4: "用户权限"
}]
for (var i = 0; i < de.length; i++) {
	var clone_de = dt_list[0].cloneNode();
	clone_de.innerHTML = '<li><span>' + de[i].s + '</span></li><li><a>' + de[i].a1 + '</a></li>><li><a>' + de[i].a2 +
		'</a></li><li><a>' + de[i].a3 +
		'</a></li><li><a>' + de[i].a4 + '</a></li>';
	Dt.appendChild(clone_de);
}
Dt.removeChild(dt_list[0]);


// 返回顶部
function myScroll(){
//前边是获取chrome等一般浏览器 如果获取不到就是ie了 就用ie的办法获取
	var x=document.body.scrollTop||document.documentElement.scrollTop;
	var timer=setInterval(function(){
	x=x-20;
	if(x<100){
		x=0;
		window.scrollTo(x,x);
		clearInterval(timer);
	}
	window.scrollTo(x,x);
	});
}