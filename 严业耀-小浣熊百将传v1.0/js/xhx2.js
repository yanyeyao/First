$(function() {



	// 特效图片

	function auto_texiao(t) {
		$(".gif_img").attr("src", "img/" + t + ".png")
	}
	var tx = 1;

	function texiao() {
		if (tx > 78) {
			tx = 1;
		}
		auto_texiao(tx);
		tx++;
	}
	setInterval(texiao, 100);

	// 展开，收起按钮
	$(".close_div").click(function() {
		$(".show_div").hide().css({
			right: "-160px",
			opacity: "0"
		})
		$(".zk_div").show()
	})
	$(".zk_div").click(function() {
		$(".show_div").show().animate({
			right: '0px',
			opacity: '1'
		})
		$(".zk_div").hide()
	})


	$(".hover_list").mouseenter(function() {
		$(this).animate({
			width: '215px'
		}, 500)
		console.log(1)
	})
	$(".hover_list").mouseleave(function() {
		console.log(2)
		$(this).animate({
			width: '114px'
		}, 500)
	})

	//二维码互换
	$(".wx_gzh").mouseenter(function() {
		$(".left_ewm").addClass("hover_wx_gzh")
	})
	$(".wx_gzh").mouseleave(function() {
		$(".left_ewm").removeClass("hover_wx_gzh")
	})

	$(".qqq").mouseenter(function() {
		$(".left_ewm").addClass("hover_qqq")
	})
	$(".qqq").mouseleave(function() {
		$(".left_ewm").removeClass("hover_qqq")
	})

	$(".wb").mouseenter(function() {
		$(".left_ewm").addClass("hover_wb")
	})
	$(".wb").mouseleave(function() {
		$(".left_ewm").removeClass("hover_wb")
	})
	
	
	//进入自动播放
	// function toggleSound() {
	//            console.log($("#yinyue")[0].paused)
	//             if ($("#yinyue")[0].paused) { //判读是否播放  
	//                 $("#yinyue")[0].paused=false;
	// 				$("#yinyue")[0].play(); //没有就播放
	// 			} 
	//         }
	
	// var timer = setInterval(toggleSound,100);
	
	// 音乐点击播放暂停
	var count = 0;
	$(".auto_play_img").click(function(){
		count++;
		$(this).addClass("avatar")
		if(count % 2 == 1){
			$("#yinyue")[0].play()
			
			// clearInterval(timer);
		}else{
			$("#yinyue")[0].pause()
			
			
		}
		$(this).toggleClass("pause0");
		$(this).toggleClass("pause")
		console.log(5)
	})
	
	//视频播放
	$(".play_click").click(function(){
		console.log($(this).index())
		if($(this).index() == 0){
			$("#mv1").css("display","block")
			$(".btn1").css("display","block")
			$(".btn2").css("display","none")
			$("#mv2").css("display","none")
			
			
		}else{
			$("#mv1").css("display","none")
			$(".btn1").css("display","none")
			$(".btn2").css("display","block")
			$("#mv2").css("display","block")
		}
	})
	
	//点击播放按钮,点击出现黑布
	$(".play1").click(function(){
		$(".video_play").slideDown(1000)
		$("#video_bf").attr("src","img/1.mp4")
	})
	
	$(".play2").click(function(){
		$(".video_play").slideDown(1000)
		$("#video_bf").attr("src","img/2.mp4")
	})
	//点击关闭
	$(".close_btn").click(function(){
		$(".video_play").slideUp(500)
		$("#video_bf").attr("src","")
	})
	
	//页面三新闻
	$("#page3_ul li").click(function() {
		$(this).addClass("hover_li").siblings().removeClass("hover_li")
		console.log($(this).index())
		$(".p3_d1").css("display", "none")
		$(".p3_d1").eq($(this).index()).css("display", "block")
		
	})
	
	//数据请求
	$.ajax({
		type:"get",
		url:"page3.json",
		success:function(response,status,xhr){
			console.log(response)
			$.each(response.zx,function(i,e){
				// console.log(e)
				$("<li></li>").html('<span class="new_p1">'+e.title+'</span><span class="new_p2">'+e.msg+'</span><span class="new_p3">'+e.day+'</span>').appendTo($("#zx"))
			})
			$.each(response.gg,function(i,e){
				// console.log(e)
				$("<li></li>").html('<span class="new_p1">'+e.title+'</span><span class="new_p2">'+e.msg+'</span><span class="new_p3">'+e.day+'</span>').appendTo($("#gg"))
			})
			$.each(response.xw,function(i,e){
				// console.log(e)
				$("<li></li>").html('<span class="new_p1">'+e.title+'</span><span class="new_p2">'+e.msg+'</span><span class="new_p3">'+e.day+'</span>').appendTo($("#xw"))
			})
			$.each(response.gl,function(i,e){
				// console.log(e)
				$("<li></li>").html('<span class="new_p1">'+e.title+'</span><span class="new_p2">'+e.msg+'</span><span class="new_p3">'+e.day+'</span>').appendTo($("#gl"))
			})
		}
	})
	
	//图片滑动页面四
	var page4_X = 0;
	var page4_Y = 0;
	 $(document).mousemove(function(e){
		 page4_X = (-e.pageX/1920*100) + (-8.4)
		 page4_Y = (-e.pageY/970*100) + (45.6014)
		 
		 $(".move1").css("transform","translate3d("+page4_X+"px,"+page4_Y+"px,0px)")
		 $(".move2").css("transform","translate3d("+page4_X+"px,"+page4_Y+"px,0px)")
	  });
	  
	//图片滑动页面六
	var page6_X = 0;
	var page6_Y = 0;
	  $(document).mousemove(function(e){
	  		 page6_X = (-e.pageX/1920*100) + (-8.4)
	  		 page6_Y = (-e.pageY/970*100) + (45.6014)
	  		 
	  		 $(".pg6_m1").css("transform","translate3d("+page6_X+"px,"+page6_Y+"px,0px)")
	  		 $(".pg6_m2").css("transform","translate3d("+page6_X+"px,"+page6_Y+"px,0px)")
			 $(".pg6_m3").css("transform","translate3d("+page6_X+"px,"+page6_Y+"px,0px)")
			 $(".pg6_m4").css("transform","translate3d("+page6_X+"px,"+page6_Y+"px,0px)")
	   });
	   
	 // page5 移入移出 这样写为了新增的标签也能有此事件
	 $(document).on("mouseover",".jn_pub",function(){
		 $(".jiao").eq($(this).index()).show()
		 $(".jn_msg").eq($(this).index()).show()
		 console.log(1)
	 })
	 $(document).on("mouseout",".jn_pub",function(){
	 		$(".jiao").eq($(this).index()).hide()
	 		$(".jn_msg").eq($(this).index()).hide()
	 		console.log(2)
	 })
	 
	 
	 //page5 数据请求
	 var alllist = [] 
	 var showList = [] 
	 var audioPlay = document.getElementById('audioPlay'); //绑定台词
	 
	 setTimeout(function(){
		 heroInit()
	 },2000)
	 function heroInit(){
		 $.ajax({
		 		 type:"get",
		 		 url:"hero.json",
		 		 dataType: "JSON",
		 		 success:function(response,status,xhr){
		 			 console.log(response)
		 			 alllist = response.list
		 			 showList = response.list
		 			 // console.log(showList)
		 			 // console.log(alllist[0])
		 			 appendData(showList,alllist[0],0)
		 		}
		 })
	 }
	 
	 
	 function appendData(showList,htmlText,index){
		 //大图片
		 var leftHtml = '<img src="img/'+htmlText.abbreviation+'_pic.png" >'
		
		//技能
		var skillList = htmlText.skillList
		
		//技能信息
		var jn_msg = "";
		for(var i = 0; i < skillList.length; i++){
			jn_msg += '<div class="jn_pub">\
							<div class="pos_div">\
								<img src="img/'+skillList[i].skill+'.png" >\
								<span class="jiao"></span>\
							</div>\
							<div class="jn_msg">\
								<div>\
									<span>'+skillList[i].title+'</span>\
									<p>'+skillList[i].describe+'</p>\
								</div>\
							</div>\
						</div>\
						'
		}
		
		//右板块数据
		var rightHtml = '<span class="star">'+htmlText.star+'</span>\
						<p class="name_list">\
							<i>'+htmlText.nickName+'</i>\
							<span>'+htmlText.heroName+'</span>\
						</p>\
						<i class="ej_icon" data-type="'+ htmlText.abbreviation + '"></i>\
						<span class="pub_font pub_font1" data-type=" '+htmlText.type+'">'+htmlText.typeName+'</span>\
						<span class="pub_font pub_font2">'+htmlText.genre+'</span>\
						<span class="pub_font pub_font3">'+htmlText.mainRespons+'</span>\
						<span class="pub_font pub_font4">'+htmlText.minorRespons+'</span>\
						<span class="pub_font pub_font5">'+htmlText.orientation+'</span>\
						<div class="jn_list">\
							'+jn_msg+'\
						</div>\
						'
		
		//好汉小卡片
		var heroHtml = ""
		for (var i = 0; i< showList.length; i++){
			heroHtml += '<li data-type="'+showList[i].abbreviation+'">\
							<img src="img/'+showList[i].abbreviation+'_card.png" >\
							<span></span>\
						</li>\
						'
		}
		$('.p5_left').html(leftHtml)
		$('.p5_right').html(rightHtml)
		$('.hero_list').html(heroHtml)
		
		$('.hero_list li').eq(index).addClass("select")//选中卡片的添加select类，出现框框
		setTimeout(function() {//延迟200毫秒 为动画效果做准备
			$('.p5_left').css("display", "block")
			$('.p5_right').css("display", "block")
		}, 100)	
	}
	// li点击
	var audioFlag = false
	var audioPlay = document.getElementById('audioPlay');
	$('.hero_list').on("click","li",function(){
		//每个人都有一个对应的data-type 将当前点击的li的data-type赋值给type
		var type = $(this).attr("data-type") 
		var index = $(this).index() //对应下标
		//点中的加框
		$(this).addClass("select").siblings().removeClass("select")
		
		var htmlText = "" //空的单个人数据
		//为了出现动画效果
		$('.p5_left').css("display", "none")
		$('.p5_right').css("display", "none")
		
		//检索数据 如果type == showList[i].abbreviation ，将该人的全部数据给htmlText
		for(var i = 0; i< showList.length; i++){
			if(showList[i].abbreviation == type){
				htmlText = showList[i]
				// console.log(htmlText)
			}
		}
		//台词
		
		audioPlay.src = ''
		// console.log(audioFlag)
		if (audioFlag) {
			audioBg.play()
			audioFlag = false
		}
		appendData(showList,htmlText,index)
	})
	
	//花色的切换
	$('.leixing').on("click","li",function(){
		var type = $(this).attr("data-type") //标签内存放的data-type 值
		//为了出现动画效果
		$('.p5_left').css("display", "none")
		$('.p5_right').css("display", "none")
		//添加一个点击动态类
		$(this).addClass("actives").siblings().removeClass("actives")
		showList = [] //初始化
		if(type == "all"){ 
			showList = alllist
		}else{
			for(var i = 0; i< alllist.length; i++){
				//josn数据中的种类alllist[i].type 值为 1-5
				if(alllist[i].type == type){ 
					showList.push(alllist[i])
				}
			}
		}
		var htmlText = showList[0] //点切换的时候总是显示第一个人的数据
		$('.hero_list').css("margin-left", "0") //左右点击重置
		audioPlay.src = '' //台词重置
		appendData(showList,htmlText,0)
	})
	
	//li的左右切换
	$('.p5_btn_right').on("click",function(){
		var marginLeft = $('.hero_list').css("margin-left")
		var Left = parseInt(marginLeft.substring(0, marginLeft.length - 2))
		var length = showList.length-1  //最后一组要显示6个减6为了让最后不能在向右滑动
		console.log(length)
		if(length > 0){
			length = showList.length -1
		}else{
			length = 0
		}
		if(Left == parseInt(-(length * 134))){
			Left = parseInt(-(length * 134))
		}else{
			Left = parseInt(marginLeft.substring(0,marginLeft.length-2)) -134
		}
		
		$('.hero_list').css("margin-left", Left + "px")
	})
	
	
	$('.p5_btn_left').click(function(){
		//获取ul的当前margin-left
		var marginLeft = $('.hero_list').css("margin-left")
		//substring 方法使用 start 和 end 两者中的较小值作为子字符串的起始点。
		//例如， var hello = "hello" hello.substring(0,2) 得到he
		console.log(marginLeft.length)
		
		console.log(marginLeft.substring(0, marginLeft.length - 2))// -2为了减去px
		var Left = parseInt(marginLeft.substring(0, marginLeft.length - 2))
		if(Left == 0){
			Left = 0
		}else{
			Left = parseInt(marginLeft.substring(0,marginLeft.length-2)) +134
		}
		$('.hero_list').css("margin-left",Left + "px")
			
	})
	
	
	//台词播放
	$(document).on("click",".ej_icon",function(){
		var type = $(this).attr("data-type")
		audioPlay.src = "img/" + type +".mp3";
		audioPlay.play();
		
	})
	
	//消失向下
	setInterval(function(){
		// console.log($(".section-wrap").hasClass('put-section-5'))
		if($(".section-wrap").hasClass('put-section-5')){
			$('.arrow').hide()
			$('.pg6_m1').animate({"left":"145px","top":"195px"},1000)
			$('.pg6_m2').animate({"left":"1315px","top":"372px"},1000)
			$('.pg6_m3').animate({"left":"1390px","top":"52px"},1000)
			$('.pg6_m4').animate({"left":"1690px","top":"550px"},1000)
			// $('.pg6_move span').addClass('slideInRight')
			
			
		}else{
			$('.pg6_m1').stop().css({"left":"545px","top":"1000px"})
			$('.pg6_m2').stop().css({"left":"1715px","top":"1000px"})
			$('.pg6_m3').stop().css({"left":"1790px","top":"1000px"})
			$('.pg6_m4').stop().css({"left":"2090px","top":"1000px"})
			setTimeout(function(){
				$('.arrow').show()
				
			},1000)
			
			
		}
		if($(".section-wrap").hasClass('put-section-3')){
			$('.move1').animate({"left":"-200px"},1000)
			$('.move2').animate({"right":"-50px"},1000)
		}else{
			$('.move1').stop().css({"left":"-600px"})
			$('.move2').stop().css({"right":"-450px"})
		}
		if(!$(".section-wrap").hasClass('put-section-4')){
			setTimeout(function(){
				$('.p5_left').css("display", "none")
				$('.p5_right').css("display", "none")
			},500)
		}else{
			setTimeout(function(){
				$('.p5_left').css("display", "block")
				$('.p5_right').css("display", "block")
			},500)
			
		}
		
	},100)
	
	

})

//屏幕缩放
function resize() {
   var ratioX = $(window).width() / 1920;
   var ratioY = $(window).height() / 970;
   $("body").css({
      transform: "scale(" + ratioX + "," + ratioY + ")",
   });
   $("html").css({'overflow':'hidden'})
}
 
$(window, document).resize(function () {
   resize();
});
resize();


// function yemian(){

// 	var r = $(window).width() / 1920;
// 	console.log($(window).height())
	
// 	$("body").css({"transform":"scale(" + r + ")"});
	

// }
// yemian();

// $(window).resize(function() {


// 	console.log($(window).width())
// 	yemian();
// });
