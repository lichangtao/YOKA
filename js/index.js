window.onload=function(){
	
	var oL = document.getElementById('search');
	var oForm = document.getElementById('formWrap');
	var oSBtn = document.getElementById('search-btn');
	var oA = oL.getElementsByTagName('a');
	var onoff = true;/* ���� */	
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

		//part1 �ֲ�
			//��ȡͼƬ
		var oImg = document.getElementById('banner-img');
		var aListImg = oImg.getElementsByTagName('img');
			//��ȡ��ť
		var oBtnBox = document.getElementById('banner-btn');
		var aBtnList = oBtnBox.getElementsByTagName('li');

			//��ȡ�����л���ť
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
			//ͼƬ
			oldImg.className = 'pos-A dis-N';
			aListImg[num].className='pos-A';
			oldImg = aListImg[num];
		}
		//���л�
		oPrev.onclick = function(){
			
			num--;//ÿ�μ�һ
			if(num<0){
				num=8;
			}
			run();//-
		}
		//���л�
		oNext.onclick = function(){
			num++;//ÿ�μ�һ
			if(num>8){
				num=0;
			}
			run();//-
		}
		
		//�Զ��ֲ�
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

		//����oBanBox
		oBanBox.onmouseover = function(){
		
			clearInterval(timer);//�����ʱ��
		}
		//����oBanBox
		oBanBox.onmouseout = function(){
			autoplay();//�ٴε����ֲ�
		
		}
}
