$('.b-list').click(function(){
	console.log(1)
	if($(this).index() == 0){
		window.location.href = "index.html"
	}else if($(this).index() == 1){
		window.location.href = "sjlb.html"
	}else if($(this).index() == 2){
		window.location.href = "wddd.html"
	}else if($(this).index() == 3){
		window.location.href = "login.html"
	}
	
})