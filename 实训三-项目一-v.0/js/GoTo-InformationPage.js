//跳转页面
	var AllGame_list = []; //所有游戏数据 的 数组
	AllGame_list.push(hotgame_list);//热门游戏
	AllGame_list.push(Roleapp_list);// 角色扮演
	AllGame_list.push(Actapp_list);// 动作冒险
	AllGame_list.push(Sportapp_list);// 体育竞技
	AllGame_list.push(Manegeapp_list);//经营策略
	AllGame_list.push(Flyapp_list);// 飞行射击
	AllGame_list.push(Restapp_list);// 休闲益智
	AllGame_list.push(Chessapp_list);//棋牌中心
	//console.log(AllGame_list[1][0].gamename);
function GoTo_InformationPage(th){
	function GoToppage(list,samelist){
		// 打开页面
		localStorage.clear();
		window.open("Game-information.html");
		//设置localStorage
		window.localStorage.setItem('Gamelist1',JSON.stringify(list));
		window.localStorage.setItem('Samelist',JSON.stringify(samelist));
	}
	var a=0;
	//console.log(th.getAttribute("gamevalue"));
	//console.log(AllGame_list);
	//console.log(AllGame_list[1][0].gamename);
	for(var i=0;i<AllGame_list.length;i++){
		// console.log(SortGamelist[1]);
		var newGamelist = AllGame_list[i];
		for(var j=0;j<AllGame_list[i].length;j++){
			//console.log(1);
			//判断点击游戏时搜索数据表内的对应游戏名臣名称
			 if(AllGame_list[i][j].gamename==th.getAttribute("gamevalue")){
			 	GoToppage(AllGame_list[i][j],AllGame_list[i]);
				a=1;
				break;
			 }
		}
		if(a==1){
			break;
			a=0;
		}
	}
	
	
	
}