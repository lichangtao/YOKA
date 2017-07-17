/*phone 动画*/
$(function(){//当文档加载完毕后执行代码
	
	$('#phoneWrap li').hover(function(){
		$(this).find('.phone').animate({bottom:0},500);
		$(this).find('.phone-bg').animate({opacity:0.2},500);
		$(this).find('.mark').css({'display':'block'});
	
	},function(){//鼠标滑出
		$(this).find('.phone').animate({bottom:'-20px'},500);
		$(this).find('.phone-bg').animate({opacity:1},500);
		$(this).find('.mark').css({'display':'none'});
	
	})


})