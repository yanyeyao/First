var Left_list1 = document.getElementById("left_list1");
var Left_list_list1 = Left_list1.children;
var Left_lists1 = [{
	title:"和平精英：哥斯拉联名军需！时装光效满满，真正的怪兽之王来了",
	summary:"哈喽大家好！我是你们的老朋友小信。相信这段时间小伙伴们已经充分感受到哥斯拉的“魅力”了，除了海岛，连雨林和山谷也有他们的身影，但你以为这就结束了吗？实际上，此次和平精英与“金刚大战哥斯拉”的联动，并不",
	time:"2021-06-03 15:06:00",
	src:"img/0.png"
},{
	title:"和平精英鲨鱼哟变坏了，疯狂给纹身小妹点赞，直言自己好喜欢？",
	summary:"最近，由虎牙直播的PEL和平精英S2赛季正在火爆进行中，这一次担任解说的主播有一点特殊，全平台只有一名主播是二路解说直播间的专员，他就是鲨鱼哟。从这里我们也可以看出鲨鱼有多受和平精英官方的关注，而了解",
	time:"2021-05-19 11:05:00",
	src:"img/1.jpg"
},{
	title:"活久见！某游戏玩家标价5K售“袁爷爷”ID引众怒，官方坐不住了。",
	summary:"游戏事每日报，新鲜大事早知道，各位老板大家好，我是萧宇。虽然很多网友都知道游戏圈很乱？毕竟随着互联网的发展，让这个圈子因为没有及时制定合理的规定而让不少人钻了空子，使得他们在官方底线疯狂试探的行为屡见",
	time:"2021-05-26 18:05:00",
	src:"img/2.jpg"
}]
for(var i=0 ; i<Left_lists1.length; i++){
	var clone_left_list1 = Left_list_list1[0].cloneNode();
	clone_left_list1.innerHTML = '<a href=""><div class="left_list_left"><h3 onmouseover="overdiscolor(this)" onmouseout="outdiscolor(this)">'+Left_lists1[i].title+'</h3><h4>'+Left_lists1[i].summary+'</h4><p>'+Left_lists1[i].time+'</div><div class="left_list_right"><img src="'+Left_lists1[i].src+'"></div></a>';
	Left_list1.appendChild(clone_left_list1);
}
Left_list1.removeChild(Left_list_list1[0]);


var Related_games_box = document.getElementById("related_games_box");
var Related_games_box_list = Related_games_box.children;
var Related_games_boxs = [{
	img:"img/96.png",
	title:"王者荣耀",
	summary:"S24赛季【长枪掠火】上线，新英雄云缨，风火来袭！",
	msg:"《王者荣耀》是腾讯第一5V5团队公平竞技手游，国民MOBA手游大作！5V5王者峡谷、公平对战，还原MOBA经典体验；契约之战、五军对决、边境突围等，带来花式作战乐趣！10秒实时跨区匹配，与好友开黑上分，向最强王者进击！多款英雄任凭选择，一血、五杀、超神，实力碾压，收割全场！敌军即将到达战场，王者召唤师快来集结好友，准备团战，就在《王者荣耀》！"
},{
	img:"img/96(5).png",
	title:"使命召唤手游",
	summary:"使命召唤正版授权，3A级枪战手游大作",
	msg:"《使命召唤手游》是使命召唤IP正版授权、天美J3工作室倾力打造的3A级枪战手游大作。游戏以高质量的视觉效果呈现游戏品质，高度还原使命召唤系列的经典玩法地图角色；不同的被动技能、终极技能及连续得分奖励的搭配，使得每个玩家都是独一无二的“英雄”存在！海量枪械配件及武器迷彩，枪械diy制定自己喜欢的样式。全新主题【火力边界】使命手册即将正式上线，在南美热带的气候，伴随车辆的爆炸声获取全新的角色和武器蓝图吧。全新模式正面对决、怒火抢牌行动，全新地图残破街区、荒漠靶场，全新枪型MX9、AMR，全新技能/道具凝固汽油弹、硬汉芯片，均将在版本更新后陆续上线。"
},{
	img:"img/96(1).png",
	title:"和平精英",
	summary:"腾讯光子工作室群自研打造的军事竞赛体验手游。",
	msg:"《和平精英》是腾讯光子工作室群自研打造的军事竞赛体验手游。虚幻引擎4研发，次世代完美画质，极致视听感受；超大实景地图，打造指尖战场，全方面自由施展战术；百人同场竞技，真实弹道，完美的射击手感；好友一键组队，语音开黑；腾讯光子工作室群超过300人团队研发，给您带来一场震撼的竞技体验。"
},{
	img:"img/96(6).png",
	title:"三国志・战略版（郭德纲代言）",
	summary:"郭德纲力荐五千万战略家真实战场",
	msg:"《三国志・战略版》由光荣特库摩正版授权，吴宇森监制，呈现真实三国古战争。不仅有知名文人高晓松、军事专家董嘉耀、局座张召忠、游戏主播大司马、人气演员姜超等一众名人力荐，更有征战多个赛季的资深玩家Mlxg、烟雨江南、六神磊磊、史航等你来战！进入这个3D古战场，你将化身一名征战乱世的主公，体验赤壁之战、夷陵之战等冷兵器时代的巅峰战争。你可以跟刘备和周瑜一样，在赤壁水陆并进，一边在水路驾驶着火的蒙冲、斗舰撞击敌船，一边在陆路放火追击敌军；可以像诸葛亮那样，利用山谷隘口设下八卦阵，搭配战法与兵种，以弱胜强；还可以效仿曹操，从孤军奋战到群雄归顺，率领300位兄弟荡平八荒……你的所思所想，都能在这成为现实。而且，你不用担心大佬会碾压全服。这里没有晃眼的VIP，不卖资源不卖兵，崛起的捷径就是策略与克制，万里基业都需要各位一步一步依靠策略与战术去夯实。这是3500万战略家的真实战场，恭迎我主一策燃尽天下九州"
},]
for(var i=0 ; i<Related_games_boxs.length; i++){
	var clone_related_games_box = Related_games_box_list[0].cloneNode();
	clone_related_games_box.innerHTML = '<div class="games_box_main"><a href=""><img src="'+Related_games_boxs[i].img+'"/><h3>"'+Related_games_boxs[i].title+'"</h3><p>"'+Related_games_boxs[i].summary+'"</p><div class="games_box_button">下载</div><div class="games_box_main_background"></div></a></div><div class="games_box_msg"><a href=""><p>"'+Related_games_boxs[i].msg+'"</p><span>查看详情</span></a></div>';
	Related_games_box.appendChild(clone_related_games_box);
}
Related_games_box.removeChild(Related_games_box_list[0]);


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


var Main = document.getElementsByClassName("related_games_box_li");
var Btn = document.getElementsByClassName("games_box_button");
var Background = document.getElementsByClassName("games_box_main_background");
var Msg = document.getElementsByClassName("games_box_msg");
// console.log(Main);
// console.log(Msg);
for(var i = 0; i < Main.length; i++){
	Main[i].index = i;
	Main[i].onmouseover = function(){
		Btn[this.index].style.backgroundColor = "#ff3f3f";
		Background[this.index].style.backgroundColor = "#42424c";
		Msg[this.index].style.display = "block";
	}
	Main[i].onmouseout = function(){
		Btn[this.index].style.backgroundColor = "#42424c";
		Background[this.index].style.backgroundColor = "#2e2e33";
		Msg[this.index].style.display = "none";
	}
}


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
function overQQ(s){
	s.src = "img/QQ空间(1).png";
}
function overweixin(s){
	s.src = "img/微信(1).png";
}
function overweibo(s){
	s.src = "img/微博(1).png";
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
function outQQ(s){
	s.src = "img/QQ空间.png";
}
function outweixin(s){
	s.src = "img/微信.png";
}
function outweibo(s){
	s.src = "img/微博.png";
}




// 底部
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