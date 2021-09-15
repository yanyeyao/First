//接收数据
var top_imgs = document.getElementById("top_imgs")

function huoqu() {
	console.log(window.localStorage.getItem("src"))
	top_imgs.src = window.localStorage.getItem("src")
	index2_top = JSON.parse(window.localStorage.getItem("index2_top"))
	console.log(index2_top)
	index2_xlbt = JSON.parse(window.localStorage.getItem("index2_xlbt"))
	console.log(index2_xlbt)
	index2_text = JSON.parse(window.localStorage.getItem("index2_text"))
	console.log(index2_text)
	index2_play = JSON.parse(window.localStorage.getItem("index2_play"))
	console.log(index2_play)
	
	index2_xgzx1 = JSON.parse(window.localStorage.getItem("index2_xgzx1"))
	console.log(index2_xgzx1)
	index2_xgzx2 = JSON.parse(window.localStorage.getItem("index2_xgzx2"))
	console.log(index2_xgzx2)
	index2_xgzx3 = JSON.parse(window.localStorage.getItem("index2_xgzx3"))
	console.log(index2_xgzx3)
}
huoqu();





//下拉跳位置
$("#xiala").on("click", function() {
	$("html").animate({
		scrollTop: 1000
	}, 500)

})

var wzry = {
	//top
	src: index2_top[0],
	head: index2_top[1],
	verson: index2_top[2],
	shijain: index2_top[3],
	kfs: index2_top[4],
	fl: index2_top[5],
	bq: index2_top[6],

	tx1: index2_top[7],
	tx2: index2_top[8],
	tx3: index2_top[9],
	tx4: index2_top[10],
	tx5: index2_top[11],
	tx6: index2_top[12],

	//content
	c_h1: index2_top[13],


}

var top_t_img = document.getElementById("top_t_img")
top_t_img.src = wzry.src
var top_t_msg = document.getElementById("top-t-msg")
top_t_msg.children[0].innerHTML = wzry.head
var top_lis = top_t_msg.children[1].children
top_lis[0].innerHTML = wzry.verson
top_lis[1].innerHTML = wzry.shijain
top_lis[2].innerHTML = wzry.shijain
top_lis[3].innerHTML = wzry.kfs
top_lis[4].innerHTML = wzry.fl

var top_f = document.getElementById("top-f")
var top_f_lis = top_f.children

top_f_lis[1].innerHTML = wzry.tx1
top_f_lis[2].innerHTML = wzry.tx2
top_f_lis[3].innerHTML = wzry.tx3
top_f_lis[4].innerHTML = wzry.tx4
top_f_lis[5].innerHTML = wzry.tx5
top_f_lis[6].innerHTML = wzry.tx6

var content = document.getElementsByClassName("content")
content[0].children[0].innerHTML = wzry.c_h1

//小轮播图
$(function() {
	var x = 0
	$("#span1").click(function() {
		console.log(1)
		x--;
		if (x == -1) {
			x = 4;
		}
		$("#ul1").css("margin-left", -216 * x + "px");

	})
	$("#span2").click(function() {
		console.log(2)
		x++;
		if (x == 6) {
			x = 0;
		}
		$("#ul1").css("margin-left", -216 * x + "px");
	})
})


//小轮播图数据
var imgList = document.getElementsByClassName("imgList")
var imgList_lis = imgList[0].children
var ul1 = document.getElementById("ul1")
console.log(imgList_lis)
var xlbt = {
	src1: index2_xlbt[0],
	src2: index2_xlbt[1],
	src3: index2_xlbt[2],
	src4: index2_xlbt[3],
	src5: index2_xlbt[4],
}
imgList_lis[0].innerHTML = '<img src="' + xlbt.src1 + '">'
imgList_lis[1].innerHTML = '<img src="' + xlbt.src2 + '">'
imgList_lis[2].innerHTML = '<img src="' + xlbt.src3 + '">'
imgList_lis[3].innerHTML = '<img src="' + xlbt.src4 + '">'
imgList_lis[4].innerHTML = '<img src="' + xlbt.src5 + '">'

var clone_ul = imgList[0].cloneNode(true)
ul1.appendChild(clone_ul);

//详细信息
var xx_msg = document.getElementsByClassName("xx_msg")
var xx_msgs = xx_msg[0].children
var xxxx = [{
		p: index2_text[0]
	},
	{
		h2: index2_text[1]
	},
	{
		p: index2_text[2]
	},
	{
		p: index2_text[3]
	},
	{
		p: index2_text[4]
	},
	{
		p: index2_text[5]
	},
	{
		p: index2_text[6]
	},
	{
		p: index2_text[7]
	},
	{
		p: index2_text[8]
	},
	{
		p: index2_text[9]
	},
	{
		p: index2_text[10]
	},
	{
		p: index2_text[11]
	},
	{
		h2: index2_text[12]
	},
	{
		p: index2_text[13]
	},
	{
		p: index2_text[14]
	},
	{
		p: index2_text[15]
	},
	{
		p: index2_text[16]
	},
]
xx_msgs[0].innerHTML = xxxx[0].p
xx_msgs[1].innerHTML = xxxx[1].h2
xx_msgs[2].innerHTML = xxxx[2].p


for (var i = 0; i < 9; i++) {
	var clone_p = xx_msgs[0].cloneNode()
	clone_p.innerHTML = xxxx[i + 3].p
	xx_msg[0].appendChild(clone_p)
}
var clone_h2 = xx_msgs[1].cloneNode()
clone_h2.innerHTML = xxxx[12].h2
xx_msg[0].appendChild(clone_h2)

for (var i = 0; i < 4; i++) {
	var clone_p = xx_msgs[0].cloneNode()
	clone_p.innerHTML = xxxx[i + 13].p
	xx_msg[0].appendChild(clone_p)
}

var play_game = {
	h2: index2_play[0]
}
var play_game_li = [{
	xh: 1,
	msg: index2_play[1]
}, {
	xh: 2,
	msg: index2_play[2]
}, {
	xh: 3,
	msg: index2_play[3]
}, {
	xh: 4,
	msg: index2_play[4]
}, {
	xh: 5,
	msg: index2_play[5]
}, {
	xh: 6,
	msg: index2_play[6]
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
play_ul_lis[0].remove()

var xgzx = document.getElementById("xgzx")
var xgzx_div = xgzx.children

var xgzx_msg = [{
		h4: index2_xgzx1[0],
		p1: index2_xgzx1[1],
		p2: index2_xgzx1[2],
		src: index2_xgzx1[3],
	},
	{
		h4: index2_xgzx2[0],
		p1: index2_xgzx2[1],
		p2: index2_xgzx2[2],
		src: index2_xgzx2[3]
	},
	{
		h4: index2_xgzx3[0],
		p1: index2_xgzx3[1],
		p2: index2_xgzx3[2],
		src: index2_xgzx3[3]
	},
]
for (var i = 0; i < xgzx_msg.length; i++) {
	var clone_xgzx_div = xgzx_div[1].cloneNode()
	clone_xgzx_div.innerHTML =
		'<div class="xgzx_div" >\
						<h4>' + xgzx_msg[i].h4 + '</h4>\
						<p class="xgzx_div_p1">' + xgzx_msg[i].p1 +
		'</p>\
						<p class="xgzx_div_p2">' + xgzx_msg[i].p2 + '</p>\
						<img src="' + xgzx_msg[i].src +
		'" width="150px" height="100px">\
		</div>\
		'
	xgzx.appendChild(clone_xgzx_div)
}
console.log(xgzx_div)
xgzx_div[1].remove();


//相关游戏
// 游戏上传
function allgame(sortapp1, sortapp2, dataText) {
	for (var j = 0; j < dataText.length; j++) {
		//console.log(1);
		var clone_app = sortapp2[0].cloneNode(true);
		clone_app.innerHTML = '<div class="roleapp_box">\
											<div class="roleapp_box_img">\
												<img src=' +
			dataText[j].img1 + ' >\
											</div>\
											<div class="roleapp_box_txet">\
												<p>' + dataText[j]
			.title + '</p>\
												<span>' + dataText[j].text1 +
			'</span>\
											</div>\
											<div class="roleapp_box_txet2">\
												下载\
											</div>\
											<div class="roleapp_text">\
												<p>\
													' +
			dataText[j].text2 + '\
												</p>\
												<span>游戏详情</span>\
											</div>\
										</div>'
		sortapp1[0].appendChild(clone_app);
	}
	sortapp1[0].removeChild(sortapp2[0]);
}

// 角色扮演

var roleapp = document.getElementsByClassName("Roleapp");
var roleapp_li = roleapp[0].children;
var Roleapp_list = [{
		img1: "img/xxyx1.png",
		title: "斗罗大陆武魂觉醒",
		text1: "你从未见过的全新斗罗",
		text2: "《斗罗大陆》正版授权，IP高还原、高品质、高福利手游《斗罗大陆：武魂觉醒》于3月16日正式与大家见面！"

			+
			"【策略制胜，灵活变阵以弱胜强】" +
			"游戏贯彻着“没有废物的武魂，只有废物的魂师”来设计各角色之间的技能与平衡，使每一位人物的技能与被动都有独到之处，待发掘并装备合适的魂骨、吸收合适的魂环等并制定合适的阵容搭配，他就可以发挥出强大的实力！这不是氪金至强的世界，而是策略与脑力的较量！"

			+
			"【宗门养成，重铸荣光再建唐门】" +
			"游戏可以创建自己的唐门，并产出免费养成资源！唐门分属五大堂，其中武堂是拟态修炼的场所；力堂可以打造暗器，不同的阵容搭配适合的暗器往往会有奇效！药堂则可以种植仙草仙药，更有机会获得烈火杏娇疏与八角玄冰草，大幅提升魂力上限！"

			+
			"猎杀魂兽，9大魂环自由搭配】" +
			"每个武魂可以附加9个魂环，不同的魂环会触发不同的技能，需要根据武魂的特性，为它选择合适的魂环进行吸收。十级一进阶，吸收的魂环颜色逐渐从白、黄、紫、黑、到红，猎杀的魂兽逐渐从百年、千年、万年到十万年，一步步从10级魂师成为90级封号斗罗!"
	},
	{
		img1: "img/xxyx2.png",
		title: "荣耀大天使",
		text1: "迪丽热巴代言，谁是我的荣耀",
		text2: "荣耀回归，再战勇者大陆！《荣耀大天使》是一款次世代的大型多人在线魔幻3D手游，采用当前先进的3D实时成像引擎，创造独有的细微人物肢体动作和暗黑魔幻世界背景。游戏角色均是由次世代标准的3D模型烘培而成，搭配4K的画面表现与极具视觉冲击力的变身特效，让玩家真正体验到纵横大陆的畅快感！伟大的勇士，您准备好了吗？ 即将荣耀启航，踏上勇者旅途！" +
			"【游戏特色】" +
			"【一人三职，单人即可成团】" +
			"【宗门养成，重铸荣光再建唐门】" +
			"一人三职，技能远攻近扛；多维加点培养，自由探索阵容；带来全新阵容体验。" +
			"【次世技能，缔造史诗特效】" +
			"招牌神技，演绎超神收割；灵活搭配，缔造团战传说；享受精彩视觉盛宴。" +
			"【推图闯关，探索异域地图】" +
			"大漠孤烟、冰天雪地、神秘海底，百千异域。探索无限未知，收获海量钻石。" +
			"【多维社交，激活交互能量】" +
			"特色战盟，盟友多维助力；市场交易系统，自由买卖装备；颠覆传统社交桎梏。" +
			"【贴心护肝，轻松解放双手】" +
			"挂机系统，保姆式护肝体验；自助多开，坐享海量经验；体验一夜战力飞升。"
	},
	{
		img1: "img/xxyx3.png",
		title: "斗罗大陆武魂觉醒",
		text1: "你从未见过的全新斗罗",
		text2: "斗罗大陆》正版授权，IP高还原、高品质、高福利手游《斗罗大陆：武魂觉醒》于3月16日正式与大家见面！"

			+
			"【策略制胜，灵活变阵以弱胜强】" +
			"游戏贯彻着“没有废物的武魂，只有废物的魂师”来设计各角色之间的技能与平衡，使每一位人物的技能与被动都有独到之处，待发掘并装备合适的魂骨、吸收合适的魂环等并制定合适的阵容搭配，他就可以发挥出强大的实力！这不是氪金至强的世界，而是策略与脑力的较量！"

			+
			"【宗门养成，重铸荣光再建唐门】" +
			"游戏可以创建自己的唐门，并产出免费养成资源！唐门分属五大堂，其中武堂是拟态修炼的场所；力堂可以打造暗器，不同的阵容搭配适合的暗器往往会有奇效！药堂则可以种植仙草仙药，更有机会获得烈火杏娇疏与八角玄冰草，大幅提升魂力上限！"

			+
			"猎杀魂兽，9大魂环自由搭配】" +
			"每个武魂可以附加9个魂环，不同的魂环会触发不同的技能，需要根据武魂的特性，为它选择合适的魂环进行吸收。十级一进阶，吸收的魂环颜色逐渐从白、黄、紫、黑、到红，猎杀的魂兽逐渐从百年、千年、万年到十万年，一步步从10级魂师成为90级封号斗罗!"
	},
	{
		img1: "img/xxyx4.png",
		title: "斗罗大陆武魂觉醒",
		text1: "你从未见过的全新斗罗",
		text2: "斗罗大陆》正版授权，IP高还原、高品质、高福利手游《斗罗大陆：武魂觉醒》于3月16日正式与大家见面！"

			+
			"【策略制胜，灵活变阵以弱胜强】" +
			"游戏贯彻着“没有废物的武魂，只有废物的魂师”来设计各角色之间的技能与平衡，使每一位人物的技能与被动都有独到之处，待发掘并装备合适的魂骨、吸收合适的魂环等并制定合适的阵容搭配，他就可以发挥出强大的实力！这不是氪金至强的世界，而是策略与脑力的较量！"

			+
			"【宗门养成，重铸荣光再建唐门】" +
			"游戏可以创建自己的唐门，并产出免费养成资源！唐门分属五大堂，其中武堂是拟态修炼的场所；力堂可以打造暗器，不同的阵容搭配适合的暗器往往会有奇效！药堂则可以种植仙草仙药，更有机会获得烈火杏娇疏与八角玄冰草，大幅提升魂力上限！"

			+
			"猎杀魂兽，9大魂环自由搭配】" +
			"每个武魂可以附加9个魂环，不同的魂环会触发不同的技能，需要根据武魂的特性，为它选择合适的魂环进行吸收。十级一进阶，吸收的魂环颜色逐渐从白、黄、紫、黑、到红，猎杀的魂兽逐渐从百年、千年、万年到十万年，一步步从10级魂师成为90级封号斗罗!"
	},
	{
		img1: "img/xxyx5.png",
		title: "斗罗大陆武魂觉醒",
		text1: "你从未见过的全新斗罗",
		text2: "斗罗大陆》正版授权，IP高还原、高品质、高福利手游《斗罗大陆：武魂觉醒》于3月16日正式与大家见面！"

			+
			"【策略制胜，灵活变阵以弱胜强】" +
			"游戏贯彻着“没有废物的武魂，只有废物的魂师”来设计各角色之间的技能与平衡，使每一位人物的技能与被动都有独到之处，待发掘并装备合适的魂骨、吸收合适的魂环等并制定合适的阵容搭配，他就可以发挥出强大的实力！这不是氪金至强的世界，而是策略与脑力的较量！"

			+
			"【宗门养成，重铸荣光再建唐门】" +
			"游戏可以创建自己的唐门，并产出免费养成资源！唐门分属五大堂，其中武堂是拟态修炼的场所；力堂可以打造暗器，不同的阵容搭配适合的暗器往往会有奇效！药堂则可以种植仙草仙药，更有机会获得烈火杏娇疏与八角玄冰草，大幅提升魂力上限！"

			+
			"猎杀魂兽，9大魂环自由搭配】" +
			"每个武魂可以附加9个魂环，不同的魂环会触发不同的技能，需要根据武魂的特性，为它选择合适的魂环进行吸收。十级一进阶，吸收的魂环颜色逐渐从白、黄、紫、黑、到红，猎杀的魂兽逐渐从百年、千年、万年到十万年，一步步从10级魂师成为90级封号斗罗!"
	},
	{
		img1: "img/xxyx6.png",
		title: "斗罗大陆武魂觉醒",
		text1: "你从未见过的全新斗罗",
		text2: "斗罗大陆》正版授权，IP高还原、高品质、高福利手游《斗罗大陆：武魂觉醒》于3月16日正式与大家见面！"

			+
			"【策略制胜，灵活变阵以弱胜强】" +
			"游戏贯彻着“没有废物的武魂，只有废物的魂师”来设计各角色之间的技能与平衡，使每一位人物的技能与被动都有独到之处，待发掘并装备合适的魂骨、吸收合适的魂环等并制定合适的阵容搭配，他就可以发挥出强大的实力！这不是氪金至强的世界，而是策略与脑力的较量！"

			+
			"【宗门养成，重铸荣光再建唐门】" +
			"游戏可以创建自己的唐门，并产出免费养成资源！唐门分属五大堂，其中武堂是拟态修炼的场所；力堂可以打造暗器，不同的阵容搭配适合的暗器往往会有奇效！药堂则可以种植仙草仙药，更有机会获得烈火杏娇疏与八角玄冰草，大幅提升魂力上限！"

			+
			"猎杀魂兽，9大魂环自由搭配】" +
			"每个武魂可以附加9个魂环，不同的魂环会触发不同的技能，需要根据武魂的特性，为它选择合适的魂环进行吸收。十级一进阶，吸收的魂环颜色逐渐从白、黄、紫、黑、到红，猎杀的魂兽逐渐从百年、千年、万年到十万年，一步步从10级魂师成为90级封号斗罗!"
	},
	{
		img1: "img/xxyx7.png",
		title: "斗罗大陆武魂觉醒",
		text1: "你从未见过的全新斗罗",
		text2: "斗罗大陆》正版授权，IP高还原、高品质、高福利手游《斗罗大陆：武魂觉醒》于3月16日正式与大家见面！"

			+
			"【策略制胜，灵活变阵以弱胜强】" +
			"游戏贯彻着“没有废物的武魂，只有废物的魂师”来设计各角色之间的技能与平衡，使每一位人物的技能与被动都有独到之处，待发掘并装备合适的魂骨、吸收合适的魂环等并制定合适的阵容搭配，他就可以发挥出强大的实力！这不是氪金至强的世界，而是策略与脑力的较量！"

			+
			"【宗门养成，重铸荣光再建唐门】" +
			"游戏可以创建自己的唐门，并产出免费养成资源！唐门分属五大堂，其中武堂是拟态修炼的场所；力堂可以打造暗器，不同的阵容搭配适合的暗器往往会有奇效！药堂则可以种植仙草仙药，更有机会获得烈火杏娇疏与八角玄冰草，大幅提升魂力上限！"

			+
			"猎杀魂兽，9大魂环自由搭配】" +
			"每个武魂可以附加9个魂环，不同的魂环会触发不同的技能，需要根据武魂的特性，为它选择合适的魂环进行吸收。十级一进阶，吸收的魂环颜色逐渐从白、黄、紫、黑、到红，猎杀的魂兽逐渐从百年、千年、万年到十万年，一步步从10级魂师成为90级封号斗罗!"
	},
	{
		img1: "img/xxyx8.png",
		title: "斗罗大陆武魂觉醒",
		text1: "你从未见过的全新斗罗",
		text2: "斗罗大陆》正版授权，IP高还原、高品质、高福利手游《斗罗大陆：武魂觉醒》于3月16日正式与大家见面！"

			+
			"【策略制胜，灵活变阵以弱胜强】" +
			"游戏贯彻着“没有废物的武魂，只有废物的魂师”来设计各角色之间的技能与平衡，使每一位人物的技能与被动都有独到之处，待发掘并装备合适的魂骨、吸收合适的魂环等并制定合适的阵容搭配，他就可以发挥出强大的实力！这不是氪金至强的世界，而是策略与脑力的较量！"

			+
			"【宗门养成，重铸荣光再建唐门】" +
			"游戏可以创建自己的唐门，并产出免费养成资源！唐门分属五大堂，其中武堂是拟态修炼的场所；力堂可以打造暗器，不同的阵容搭配适合的暗器往往会有奇效！药堂则可以种植仙草仙药，更有机会获得烈火杏娇疏与八角玄冰草，大幅提升魂力上限！"

			+
			"猎杀魂兽，9大魂环自由搭配】" +
			"每个武魂可以附加9个魂环，不同的魂环会触发不同的技能，需要根据武魂的特性，为它选择合适的魂环进行吸收。十级一进阶，吸收的魂环颜色逐渐从白、黄、紫、黑、到红，猎杀的魂兽逐渐从百年、千年、万年到十万年，一步步从10级魂师成为90级封号斗罗!"
	},
	{
		img1: "img/xxyx9.png",
		title: "斗罗大陆武魂觉醒",
		text1: "你从未见过的全新斗罗",
		text2: "斗罗大陆》正版授权，IP高还原、高品质、高福利手游《斗罗大陆：武魂觉醒》于3月16日正式与大家见面！"

			+
			"【策略制胜，灵活变阵以弱胜强】" +
			"游戏贯彻着“没有废物的武魂，只有废物的魂师”来设计各角色之间的技能与平衡，使每一位人物的技能与被动都有独到之处，待发掘并装备合适的魂骨、吸收合适的魂环等并制定合适的阵容搭配，他就可以发挥出强大的实力！这不是氪金至强的世界，而是策略与脑力的较量！"

			+
			"【宗门养成，重铸荣光再建唐门】" +
			"游戏可以创建自己的唐门，并产出免费养成资源！唐门分属五大堂，其中武堂是拟态修炼的场所；力堂可以打造暗器，不同的阵容搭配适合的暗器往往会有奇效！药堂则可以种植仙草仙药，更有机会获得烈火杏娇疏与八角玄冰草，大幅提升魂力上限！"

			+
			"猎杀魂兽，9大魂环自由搭配】" +
			"每个武魂可以附加9个魂环，不同的魂环会触发不同的技能，需要根据武魂的特性，为它选择合适的魂环进行吸收。十级一进阶，吸收的魂环颜色逐渐从白、黄、紫、黑、到红，猎杀的魂兽逐渐从百年、千年、万年到十万年，一步步从10级魂师成为90级封号斗罗!"
	},
	{
		img1: "img/xxyx10.png",
		title: "斗罗大陆武魂觉醒",
		text1: "你从未见过的全新斗罗",
		text2: "斗罗大陆》正版授权，IP高还原、高品质、高福利手游《斗罗大陆：武魂觉醒》于3月16日正式与大家见面！"

			+
			"【策略制胜，灵活变阵以弱胜强】" +
			"游戏贯彻着“没有废物的武魂，只有废物的魂师”来设计各角色之间的技能与平衡，使每一位人物的技能与被动都有独到之处，待发掘并装备合适的魂骨、吸收合适的魂环等并制定合适的阵容搭配，他就可以发挥出强大的实力！这不是氪金至强的世界，而是策略与脑力的较量！"

			+
			"【宗门养成，重铸荣光再建唐门】" +
			"游戏可以创建自己的唐门，并产出免费养成资源！唐门分属五大堂，其中武堂是拟态修炼的场所；力堂可以打造暗器，不同的阵容搭配适合的暗器往往会有奇效！药堂则可以种植仙草仙药，更有机会获得烈火杏娇疏与八角玄冰草，大幅提升魂力上限！"

			+
			"猎杀魂兽，9大魂环自由搭配】" +
			"每个武魂可以附加9个魂环，不同的魂环会触发不同的技能，需要根据武魂的特性，为它选择合适的魂环进行吸收。十级一进阶，吸收的魂环颜色逐渐从白、黄、紫、黑、到红，猎杀的魂兽逐渐从百年、千年、万年到十万年，一步步从10级魂师成为90级封号斗罗!"
	},
	{
		img1: "img/xxyx11.png",
		title: "斗罗大陆武魂觉醒",
		text1: "你从未见过的全新斗罗",
		text2: "斗罗大陆》正版授权，IP高还原、高品质、高福利手游《斗罗大陆：武魂觉醒》于3月16日正式与大家见面！"

			+
			"【策略制胜，灵活变阵以弱胜强】" +
			"游戏贯彻着“没有废物的武魂，只有废物的魂师”来设计各角色之间的技能与平衡，使每一位人物的技能与被动都有独到之处，待发掘并装备合适的魂骨、吸收合适的魂环等并制定合适的阵容搭配，他就可以发挥出强大的实力！这不是氪金至强的世界，而是策略与脑力的较量！"

			+
			"【宗门养成，重铸荣光再建唐门】" +
			"游戏可以创建自己的唐门，并产出免费养成资源！唐门分属五大堂，其中武堂是拟态修炼的场所；力堂可以打造暗器，不同的阵容搭配适合的暗器往往会有奇效！药堂则可以种植仙草仙药，更有机会获得烈火杏娇疏与八角玄冰草，大幅提升魂力上限！"

			+
			"猎杀魂兽，9大魂环自由搭配】" +
			"每个武魂可以附加9个魂环，不同的魂环会触发不同的技能，需要根据武魂的特性，为它选择合适的魂环进行吸收。十级一进阶，吸收的魂环颜色逐渐从白、黄、紫、黑、到红，猎杀的魂兽逐渐从百年、千年、万年到十万年，一步步从10级魂师成为90级封号斗罗!"
	},
	{
		img1: "img/xxyx12.png",
		title: "斗罗大陆武魂觉醒",
		text1: "你从未见过的全新斗罗",
		text2: "斗罗大陆》正版授权，IP高还原、高品质、高福利手游《斗罗大陆：武魂觉醒》于3月16日正式与大家见面！"

			+
			"【策略制胜，灵活变阵以弱胜强】" +
			"游戏贯彻着“没有废物的武魂，只有废物的魂师”来设计各角色之间的技能与平衡，使每一位人物的技能与被动都有独到之处，待发掘并装备合适的魂骨、吸收合适的魂环等并制定合适的阵容搭配，他就可以发挥出强大的实力！这不是氪金至强的世界，而是策略与脑力的较量！"

			+
			"【宗门养成，重铸荣光再建唐门】" +
			"游戏可以创建自己的唐门，并产出免费养成资源！唐门分属五大堂，其中武堂是拟态修炼的场所；力堂可以打造暗器，不同的阵容搭配适合的暗器往往会有奇效！药堂则可以种植仙草仙药，更有机会获得烈火杏娇疏与八角玄冰草，大幅提升魂力上限！"

			+
			"猎杀魂兽，9大魂环自由搭配】" +
			"每个武魂可以附加9个魂环，不同的魂环会触发不同的技能，需要根据武魂的特性，为它选择合适的魂环进行吸收。十级一进阶，吸收的魂环颜色逐渐从白、黄、紫、黑、到红，猎杀的魂兽逐渐从百年、千年、万年到十万年，一步步从10级魂师成为90级封号斗罗!"
	},
];
allgame(roleapp, roleapp_li, Roleapp_list);

// <!-- // 游戏分类 每列第四第五个 文本向右移动 -->
MoveGame();

function MoveGame() {
	var roleapptext = document.getElementsByClassName("roleapp_text");
	// 游戏分类 每列第四第五个 文本向右移动
	for (var i = 0; i < roleapptext.length; i++) {
		if (i != 0 && i % 6 == 4 || i != 0 && i % 6 == 5) {
			roleapptext[i].classList.add("roleapp_text2");
			//	console.log(i);
		} else {
			roleapptext[i].classList.add("roleapp_text1");
		}
	}
}



//底部数据
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


//返回顶部
$(function() {


	//返回顶部
	// 当页面向下滑动 150px 出现"返回顶部" 按钮
	$(window).scroll(function() {
		if ($(window).scrollTop() > 150) {
			$('.back-top').css('display', 'block');
		} else {
			$('.back-top').css('display', 'none');
		}
	});
	// 点击按钮，返回页面顶部
	$(".back-top").on("click", function() {
		$("html").animate({
			scrollTop: 0
		}, 500)
	})
});
