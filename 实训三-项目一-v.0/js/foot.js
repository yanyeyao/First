
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