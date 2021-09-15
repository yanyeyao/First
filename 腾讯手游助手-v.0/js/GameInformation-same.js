
// 获取传递数据
var  All_Gamelist=[]; //所有游戏分类传递过来的数据
var SameGame1=[];
function getcookie() {
    //获取传递过来的localStorage
	//All_Gamelist=[];
	getGamelist = JSON.parse(window.localStorage.getItem('Gamelist1'));
	Samelist = JSON.parse(window.localStorage.getItem('Samelist'));
	All_Gamelist = getGamelist;
	SameGame1 = Samelist;
 
}
getcookie();
	

//console.log(All_Gamelist[0].computertext);
// 游戏详情页面信息上传	
UpdateGameText();
function UpdateGameText(){
	var GameName = document.getElementById("GameName");
	var Game_pric = document.getElementById("Game_pric");
	var information_text = document.getElementsByClassName("information-text");
	var Game_data = document.getElementsByName("Game-data");
	GameName.innerHTML = All_Gamelist.gamename;//游戏名称
	Game_pric.src = All_Gamelist.gameimg;//游戏图片
	information_text[0].children[0].innerHTML=All_Gamelist.gamename;//游戏名称
	for(var j=0;j<Game_data.length;j++){
		Game_data[j].innerHTML=All_Gamelist.gametext1[j]; //游戏开发详情
	}
	// <!-- 游戏图片轮播图 -->
	var Gameswiper_img = document.getElementsByName("Gameswiper_img");
	var Gameswiperimg_list = Gameswiper_img[0].children;
	var Computerimg =  All_Gamelist.computerimg;
	CloneText2(Gameswiper_img,Gameswiperimg_list,Computerimg);
	function CloneText2(P_text,C_text,textlist){
		for(var i=0;i<textlist.length;i++){
			var clone_text = C_text[0].cloneNode(true);
			clone_text.innerHTML = '<div class="swiper-slide"><img src='+textlist[i]+' ></div>'
			P_text[0].appendChild(clone_text);
		}
		P_text[0].removeChild(C_text[0]);
	}
	//游戏简介 说明
	var Gametext = document.getElementById("Game-text");
	Gametext.innerHTML = All_Gamelist.computertext;
	// 必玩游戏理由
	var Game_reason = document.getElementsByClassName("Game-reason");
	var Game_reason_list = Game_reason[0].children;
	var Computerreason = All_Gamelist.playreason;
	CloneText3(Game_reason,Game_reason_list,Computerreason);
	function CloneText3(P_text,C_text,textlist){
		for(var i=0;i<textlist.length;i++){
			var clone_text = C_text[0].cloneNode(true);
			clone_text.innerHTML = '<p>'+textlist[i]+'</p>'
			P_text[0].appendChild(clone_text);
		}
		P_text[0].removeChild(C_text[0]);
	}
}



// 手游游戏特性characteristic
Phone_characteristic();
function Phone_characteristic(){
	var Phonetext = document.getElementsByClassName("Game-character");
	var Phonetext_list = Phonetext[0].children;
	//console.log(Phonetext_list);
	text_list=[{
		img:"img/feature_img1.png",
		text1:"高清画质 大屏畅享"
		},{
		img:"img/feature_img2.png",
		text1:"高清画质 大屏畅享"
		},{
		img:"img/feature_img3.png",
		text1:"高清画质 大屏畅享"
		},{
		img:"img/feature_img4.png",
		text1:"高清画质 大屏畅享"
		},{
		img:"img/feature_img5.png",
		text1:"高清画质 大屏畅享"
		},{
		img:"img/feature_img6.png",
		text1:"高清画质 大屏畅享"
		},
	]
	CloneText(Phonetext,Phonetext_list,text_list);
		function CloneText(P_text,C_text,textlist){
			for(var i=0;i<textlist.length;i++){
				var clone_text = C_text[0].cloneNode(true);
				clone_text.innerHTML = '<img src='+textlist[i].img+' >\
										<span>'+textlist[i].text1+'</span>'
				P_text[0].appendChild(clone_text);
			}
			P_text[0].removeChild(C_text[0]);
		}
	}

//<!-- 游戏资讯 -->
 SameGameApp();
function SameGameApp(){
	var Left_list1 = document.getElementById("left_list1");
	var Left_list_list1 = Left_list1.children;
	var Left_lists1 = [{
		title:"《俄罗斯方块环游记》，101人大乱斗的场面你可见过？",
		summary:"相信很多人玩过的第一款电子游戏，都是简单却又十分有趣的俄罗斯方块。从俄罗斯方块的诞生，到现在已经有三十多年的时间了，即便是不怎么玩游戏的朋友，应该也都知道这款休闲小游戏。如今正版授权的《俄罗斯方块环游",
		time:"2021-08-03 14:08:00",
		src:"img/SameGameimg10.jpeg"
		},{
		title:"电脑玩斗罗大陆：魂师对决-100%开盲盒，怎么用电脑玩斗罗大陆：魂师对决-100%开盲盒手游",
		summary:"———2亿魂师推荐，真3D战斗手游——— 21年度国民级IP战斗手游巨作，由阅文集团和腾讯动画正版授权，2亿用户推荐，和动画一模一样的《斗罗大陆：魂师对决》7月22日正式公测！   超越斗罗大陆，颠覆",
		time:"2021-07-16 06:07:00",
		src:"img/SameGameimg7.jpeg"
		},{
		title:"腾讯手游助手如何设置不卡顿",
		summary:"1.打开腾讯手游助手，点击右上角的设置2.选择设置中心3.再然后将基本设置的“截屏录屏设置”存储位置改为不是系统盘存储，点击保存4.将分辨率调一些，在“引擎设置”将分辨率设置为较低的水平，同时抗锯齿，",
		time:"2021-08-03 10:08:00",
		src:"img/SameGameimg11.jpeg"
		},{
		title:"《俄罗斯方块环游记》，101人大乱斗的场面你可见过？",
		summary:"相信很多人玩过的第一款电子游戏，都是简单却又十分有趣的俄罗斯方块。从俄罗斯方块的诞生，到现在已经有三十多年的时间了，即便是不怎么玩游戏的朋友，应该也都知道这款休闲小游戏。如今正版授权的《俄罗斯方块环游",
		time:"2021-08-03 14:08:00",
		src:"img/SameGameimg1.jpeg"
			},{
		title:"电脑玩斗罗大陆：魂师对决-100%开盲盒，怎么用电脑玩斗罗大陆：魂师对决-100%开盲盒手游",
		summary:"———2亿魂师推荐，真3D战斗手游——— 21年度国民级IP战斗手游巨作，由阅文集团和腾讯动画正版授权，2亿用户推荐，和动画一模一样的《斗罗大陆：魂师对决》7月22日正式公测！   超越斗罗大陆，颠覆",
		time:"2021-07-16 06:07:00",
		src:"img/SameGameimg2.jpeg"
		},{
		title:"腾讯手游助手如何设置不卡顿",
		summary:"1.打开腾讯手游助手，点击右上角的设置2.选择设置中心3.再然后将基本设置的“截屏录屏设置”存储位置改为不是系统盘存储，点击保存4.将分辨率调一些，在“引擎设置”将分辨率设置为较低的水平，同时抗锯齿，",
		time:"2021-08-03 10:08:00",
		src:"img/SameGameimg3.jpeg"
		},{
		title:"《俄罗斯方块环游记》，101人大乱斗的场面你可见过？",
		summary:"相信很多人玩过的第一款电子游戏，都是简单却又十分有趣的俄罗斯方块。从俄罗斯方块的诞生，到现在已经有三十多年的时间了，即便是不怎么玩游戏的朋友，应该也都知道这款休闲小游戏。如今正版授权的《俄罗斯方块环游",
		time:"2021-08-03 14:08:00",
		src:"img/SameGameimg4.jpeg"
		},{
		title:"电脑玩斗罗大陆：魂师对决-100%开盲盒，怎么用电脑玩斗罗大陆：魂师对决-100%开盲盒手游",
		summary:"———2亿魂师推荐，真3D战斗手游——— 21年度国民级IP战斗手游巨作，由阅文集团和腾讯动画正版授权，2亿用户推荐，和动画一模一样的《斗罗大陆：魂师对决》7月22日正式公测！   超越斗罗大陆，颠覆",
		time:"2021-07-16 06:07:00",
		src:"img/SameGameimg5.jpeg"
		},{
		title:"腾讯手游助手如何设置不卡顿",
		summary:"1.打开腾讯手游助手，点击右上角的设置2.选择设置中心3.再然后将基本设置的“截屏录屏设置”存储位置改为不是系统盘存储，点击保存4.将分辨率调一些，在“引擎设置”将分辨率设置为较低的水平，同时抗锯齿，",
		time:"2021-08-03 10:08:00",
		src:"img/SameGameimg6.jpeg"
		},{
		title:"《俄罗斯方块环游记》，101人大乱斗的场面你可见过？",
		summary:"相信很多人玩过的第一款电子游戏，都是简单却又十分有趣的俄罗斯方块。从俄罗斯方块的诞生，到现在已经有三十多年的时间了，即便是不怎么玩游戏的朋友，应该也都知道这款休闲小游戏。如今正版授权的《俄罗斯方块环游",
		time:"2021-08-03 14:08:00",
		src:"img/SameGameimg7.jpeg"
	}]
	for(var i=0 ; i<Left_lists1.length-5; i++){
		var clone_left_list1 = Left_list_list1[0].cloneNode();
		clone_left_list1.innerHTML = '<a href="">\
											<div class="left_list_left">\
											<h3 onmouseover="overdiscolor(this)" onmouseout="outdiscolor(this)">'+Left_lists1[i].title+'</h3>\
											<h4>'+Left_lists1[i].summary+'</h4>\
											<p>'+Left_lists1[i].time+'</p></div>\
											<div class="left_list_right"><img src="'+Left_lists1[i].src+'"></div>\
										</a>';
		Left_list1.appendChild(clone_left_list1);
	}
	Left_list1.removeChild(Left_list_list1[0]);
}

//鼠标移入事件
function overdiscolor(t){
	t.style.color = "#ff3f3f";
}
function overbtndiscolor(s){
	s.style.backgroundColor = "#ff3f3f";
}
//鼠标移出事件
function outdiscolor(c){
	c.style.color = "#fff";
}
function outbtndiscolor(x){
	x.style.backgroundColor = "#42424c";
}




// 游戏上传
function allgame(sortapp1,sortapp2,dataText){
	// console.log(dataText);
		for(var j=0;j<dataText.length;j++){
			//console.log(1);
			var clone_app = sortapp2[0].cloneNode(true);
			clone_app.innerHTML = '<div class="roleapp_box" onclick="GoTo_InformationPage(this)" gamevalue='+dataText[j].gamename+'>\
									<div class="roleapp_box_img">\
										<img src='+dataText[j].gameimg+' >\
									</div>\
									<div class="roleapp_box_txet">\
										<p>'+dataText[j].title+'</p>\
										<span>'+dataText[j].text1+'</span>\
									</div>\
									<div class="roleapp_box_txet2">\
										下载\
									</div>\
									<div class="roleapp_text">\
										<p>\
											'+dataText[j].computertext+'\
										</p>\
										<span>游戏详情</span>\
									</div>\
								</div>'
			sortapp1[0].appendChild(clone_app);
		}
		sortapp1[0].removeChild(sortapp2[0]);
	}
	
// 相关游戏
SameGame();
function SameGame(){
	var roleapp = document.getElementsByClassName("Roleapp");
	var roleapp_li = roleapp[0].children;
	// 	//console.log(Role_appbox_list.length);
	allgame(roleapp,roleapp_li,SameGame1);
}

	
// 如何在电脑上玩手游
HowPlayComputerGame();
function HowPlayComputerGame(){
		// 如何在电脑上玩手游
		var play_game = {
			h2: "如何在电脑上用手游助手玩《"+All_Gamelist.gamename+"》手游"
		}
		var play_game_li = [{
			xh: 1,
			msg: "在官网下载手游助手模拟器"
		}, {
			xh: 2,
			msg: "运行 exe 文件完成安装"
		}, {
			xh: 3,
			msg: "打开手游助手模拟器并在右上方搜索栏输入王者荣耀"
		}, {
			xh: 4,
			msg: "在搜索结果中找到对应游戏并点击安装"
		}, {
			xh: 5,
			msg: "完成安装后，点击开始启动游戏"
		}, {
			xh: 6,
			msg: "在腾讯手游助手上畅玩王者荣耀电脑版"
		}, ]
		var xx_msg2 = document.getElementsByClassName("xx_msg2")
		var xx_msg2s = xx_msg2[0].children
		
		xx_msg2s[0].innerHTML = play_game.h2
		
		var play_ul = document.getElementById("play_ul")
		var play_ul_lis = play_ul.children
		
		for (var i = 0; i < play_game_li.length; i++) {
			var clone_play_ul_lis = play_ul_lis[0].cloneNode()
			clone_play_ul_lis.innerHTML = '<div class="play_li_t">\
											 ' + play_game_li[i].xh +
				'	\
											</div>\
											<div class="play_li_b">\
												' + play_game_li[i].msg +
				'\
											</div>\
											'
			play_ul.appendChild(clone_play_ul_lis)
		}
		play_ul_lis[0].remove();
	}
	
// <!-- // 游戏分类 每列第四第五个 文本向右移动 -->
MoveGame();
function MoveGame(){
	var roleapptext= document.getElementsByClassName("roleapp_text");
	// 游戏分类 每列第四第五个 文本向右移动
	for(var i=0;i<roleapptext.length;i++){
		if(i!=0&&i%6==4 || i!=0&&i%6==5){
			roleapptext[i].classList.add("roleapp_text2");
		//	console.log(i);
		}
		else{
			roleapptext[i].classList.add("roleapp_text1");
		}
	}
}



	
	