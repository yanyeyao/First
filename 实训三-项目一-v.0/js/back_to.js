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