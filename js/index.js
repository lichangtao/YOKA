window.onload=function(){
	
	var oL = document.getElementById('search');
	var oForm = document.getElementById('formWrap');
	var oSBtn = document.getElementById('search-btn');
	var oA = oL.getElementsByTagName('a');
	var onoff = true;/* 开关 */	
		oA[0].onclick= function(){
			if(onoff){
				oA[0].className = 'hoversearch';
				oForm.style.display='block';
				//onoff = false;
			}else{				
				oA[0].className = 'search pad-R5 dis-B';
				oForm.style.display='none'; 
				//onoff = true;
			}
			onoff = !onoff;//!onoff
		}

		//part1 轮播
			//获取图片
		var oImg = document.getElementById('banner-img');
		var aListImg = oImg.getElementsByTagName('img');
			//获取按钮
		var oBtnBox = document.getElementById('banner-btn');
		var aBtnList = oBtnBox.getElementsByTagName('li');

			//获取左右切换按钮
		var oPrev = document.getElementById('prev');
		var oNext = document.getElementById('next');

		var oBanBox = document.getElementById('m-banner');

		
		var num=0;
		var oldBtn = aBtnList[num];
		var oldImg = aListImg[num];
		var timer;
		
	
		var i=0;
		for(;i<9;i++){			
			aBtnList[i].index = i;
			aBtnList[i].onclick=function(){				
				//alert(this.index);
				num = this.index;
				run();	
			}
		}
		//alert(i);
		function run(){
			oldBtn.className='fl-L hov-cur';
			aBtnList[num].className='show fl-L hov-cur';//1
			oldBtn = aBtnList[num]; 
			//图片
			oldImg.className = 'pos-A dis-N';
			aListImg[num].className='pos-A';
			oldImg = aListImg[num];
		}
		//左切换
		oPrev.onclick = function(){
			
			num--;//每次减一
			if(num<0){
				num=8;
			}
			run();//-
		}
		//右切换
		oNext.onclick = function(){
			num++;//每次减一
			if(num>8){
				num=0;
			}
			run();//-
		}
		
		//自动轮播
		autoplay();
		function autoplay(){
			timer = setInterval(
				function(){
					num++;
					if(num>8){
						num=0;
					}
					run();
			},1000);
		}

		//滑入oBanBox
		oBanBox.onmouseover = function(){
		
			clearInterval(timer);//清除定时器
		}
		//滑出oBanBox
		oBanBox.onmouseout = function(){
			autoplay();//再次调用轮播
		
		}
}
