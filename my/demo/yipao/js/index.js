window.onload=function(){
	var Menu=document.getElementById("menu");
	var a=Menu.getElementsByTagName("a");
	var Container=document.getElementById("container");
	var Con=Container.getElementsByClassName("con");
	for (var i=0;i<a.length;i++) {
		a[i].index=i;
		a[i].onclick=function(){
			for (var i=0;i<a.length;i++) {
				a[i].className="";
				a[i].style.backgroundColor="";
				a[i].style.color="";
				a[i].style.fontWeight="normal";
				Con[i].style.display="none";
				Con[i].idName="";
			}
			this.style.backgroundColor="#F3F3F1";
			this.style.fontWeight="bold";
			this.style.color="#39942d";
			Con[this.index].style.display="block";
		}
	}
	//配速计算器
	var Distance1=document.getElementById("distance1");
	var Hour1=document.getElementById("hour1");
	var Minute1=document.getElementById("minute1") ;
	var Second1=document.getElementById("second1");
	var Minute01=document.getElementById("minute01");
	var Second01=document.getElementById("time1");
	var Calcu1=document.getElementById("calcu1");
	var Reset1=document.getElementById("reset1");
	var Tishi1=document.getElementById("tishi1");
	var result=0;
	Calcu1.onclick=function(){
		var h=Hour1.value*1;
		var m=Minute1.value*1;
		var s=Second1.value*1;
		var m1=Minute01.value*1;
		var s1=Second01.value*1;
		if(Distance1.value.length>0 && Hour1.value.length>0 && Minute1.value.length>0 && Second1.value.length>0){
			result=(h*60*60+m*60+s)/Distance1.value;
			document.getElementById("minute01").value=parseInt(result/60);
			document.getElementById("time1").value=parseInt(result%60);
			Tishi1.style.display='none';
		}
		else if(Distance1.value.length==0 && Hour1.value.length>0 && Minute1.value.length>0 && Second1.value.length>0 && Minute01.value.length>0 && Second01.value.length>0){
			result=(h*60*60+m*60+s)/(m1*60+s1);
			document.getElementById("distance1").value=result.toFixed(1);
			Tishi1.style.display='none';
		}
		else if(Distance1.value.length>0 && (Hour1.value.length==0 || Minute1.value.length==0 || Second1.value.length==0) && Minute01.value.length>0 && Second01.value.length>0){
			result=Distance1.value*(m1*60+s1);
			document.getElementById("hour1").value=parseInt(result/3600);
			document.getElementById("minute1").value=parseInt(result%3600/60);
			document.getElementById("second1").value=parseInt(result%60);
			Tishi1.style.display='none';
		}
		else{
			Tishi1.style.display='inline-block';
		}
	}
	Reset1.onclick=function(){
		Distance1.value='';
		Hour1.value='';
		Minute1.value='';
		Second1.value='';
		Minute01.value='';
		Second01.value='';
		Tishi1.style.display='none';
	}
	//配速转换器
	var Calcu2=document.getElementById("calcu2");
	var Reset2=document.getElementById("reset2");
	var Tishi2=document.getElementById("tishi2");
	var oyx_mm=document.getElementById("yx_mm");
	var oyx_ss=document.getElementById("yx_ss");
	var oyx_km=document.getElementById("yx_km");
	var oyx_meter=document.getElementById("yx_meter");
	Calcu2.onclick=function(){
		if((oyx_mm.value==""||oyx_ss.value=="")&&oyx_km.value==""&&oyx_meter.value==""){
			Tishi2.style.display='inline-block';
		}else {
			Tishi2.style.display='none';
			if(oyx_mm.value.length>0&&oyx_ss.value.length>0){
				var yx_speed=parseFloat(oyx_mm.value)+parseFloat(oyx_ss.value/60);
				oyx_km.value=(60/yx_speed).toFixed(2);
				oyx_meter.value=(1000.0/yx_speed/60.0).toFixed(2);
			}else if(oyx_km.value.length>0){
				var yx_speed2=parseFloat(oyx_km.value/3600);
				var yx_time=parseFloat(1/yx_speed2);
				oyx_mm.value= parseFloat(yx_time/60).toFixed(2);
				oyx_ss.value= parseFloat(yx_time%60).toFixed(2);
				oyx_meter.value=parseFloat(yx_speed2*1000).toFixed(2);
		   }else if(oyx_meter.value.length>0){
				var yx_speed3=yx_meter.value/1000*3600;
				var yx_time2=parseFloat(1/yx_speed3);
				oyx_mm.value= parseFloat(yx_time2/60).toFixed(2);
				oyx_ss.value= parseFloat(yx_time2%60).toFixed(2);
				oyx_km.value=parseFloat(yx_speed3).toFixed(2);
		    }
		}
	}
	Reset2.onclick=function(){
		oyx_mm.value="";
		oyx_ss.value="";
		oyx_km.value="";
		oyx_meter.value="";
		Tishi2.style.display='none';
	}
	//完跑计算器
	var Distance3=document.getElementById("distance3");
	var Distance31=document.getElementById("distance31");
	var Calcu3=document.getElementById("calcu3");
	var Reset3=document.getElementById("reset3");
	var Tishi3=document.getElementById("tishi3");
	var Result3=document.getElementById("result3");
	var num_Hour31=document.getElementById("num_hour31");
	var num_Minute31=document.getElementById("num_minute31");
	var num_Second31=document.getElementById("num_second31");
		for(var i=0 ;i<=24;i++){
			var opt = document.createElement ("option");
			    opt.value = i;
			    opt.innerText = i;
			    num_Hour31.appendChild (opt);
		}
		for(var i=0 ;i<=59;i++){
			var opt = document.createElement ("option");
			    opt.value = i;
			    opt.innerText = i;
			    num_Minute31.appendChild (opt);
		}
		for(var i=0 ;i<=59;i++){
			var opt = document.createElement ("option");
			    opt.value = i;
			    opt.innerText = i;
			    num_Second31.appendChild (opt);
		}
	Calcu3.onclick=function(){
		if(Distance3.value.length>0 && Distance31.value.length>0){
			var h=num_Hour31.value*1;
			var m=num_Minute31.value*1;
			var s=num_Second31.value*1;
			var res3=parseInt((h*3600+m*60+s)*Distance31.value/Distance3.value);
			var Ohour=parseInt(res3/3600);
			var Ominute=parseInt(res3%3600/60);
			var Osecond=parseInt(res3%60);
			Result3.innerHTML="完成的时间是： "+Ohour+"时"+Ominute+"分"+Osecond+"秒";
			Tishi3.style.display='none';
		}
		else{
			Tishi3.style.display='inline-block';
		}
	}
	Reset3.onclick=function(){
		Distance3.value='';
		num_Hour31.value='0';
		num_Minute31.value='0';
		num_Second31.value='0';
		Distance31.value='';
		Result3.innerHTML='';
		Tishi3.style.display='none';
	}
	//马拉松
	var Calcu4=document.getElementById("calcu4");
	var Reset4=document.getElementById("reset4");
	var oyx_minutes4=document.getElementById("yx_minutes4");
	var oyx_seconds4=document.getElementById("yx_seconds4");
	var yx_Min=document.getElementById("yx_min");
	var yx_Hour=document.getElementById("yx_hour");
	var yx_Sec=document.getElementById("yx_sec");
	var Tishi4=document.getElementById("tishi4");
	var oyx_right1=document.getElementById("yx_right1");
	var oyx_right2=document.getElementById("yx_right2");
	var oyx_right3=document.getElementById("yx_right3");
	var oyx_right4=document.getElementById("yx_right4");
	var oyx_right5=document.getElementById("yx_right5");
	var oyx_right6=document.getElementById("yx_right6");
	var oyx_right7=document.getElementById("yx_right7");
	var oyx_right8=document.getElementById("yx_right8");
	var oyx_right9=document.getElementById("yx_right9");
	var yx_Details=document.getElementById("yx_details");
	for (var i=0;i<=12;i++) {
		var opt12=document.createElement("option");
		opt12.value=i;
		opt12.innerText=i;
		yx_Hour.appendChild(opt12);
	}
	for (var i=0;i<=59;i++) {
		var opt1=document.createElement("option");
		opt1.value=i;
		opt1.innerText=i;
		yx_Min.appendChild(opt1);
	}
	for (var i=0;i<=59;i++) {
		var opt1=document.createElement("option");
		opt1.value=i;
		opt1.innerText=i;
		yx_Sec.appendChild(opt1);
	}
	Calcu4.onclick=function(){
		Tishi2.style.display='none';
		yx_Details.style.display="block";
		if(yx_Hour.value.length>0&&yx_Min.value.length>0&&yx_Sec.value.length>0){
			  var cost=parseInt(yx_Hour.value)*3600+parseInt(yx_Min.value)*60+parseInt(yx_Sec.value);
			  var yx_speed4=42/cost;
			  var yx_km;
			  var yx_km=1;
			  var yx_ss=yx_km/yx_speed4; 
			  oyx_right1.innerHTML=parseInt(yx_ss/3600)+"时"+parseInt(yx_ss%3600/60)+"分"+parseInt(yx_ss%3600%60)+"秒";
			  yx_km=20;
			  var yx_ss=yx_km/yx_speed4;
			  oyx_right2.innerHTML=parseInt(yx_ss/3600)+"时"+parseInt(yx_ss%3600/60)+"分"+parseInt(yx_ss%3600%60)+"秒";
			  var yx_km=2;
			  var yx_ss=yx_km/yx_speed4;
			  oyx_right3.innerHTML=parseInt(yx_ss/3600)+"时"+parseInt(yx_ss%3600/60)+"分"+parseInt(yx_ss%3600%60)+"秒";
			  yx_km=21;
			  var yx_ss=yx_km/yx_speed4;
			  oyx_right4.innerHTML=parseInt(yx_ss/3600)+"时"+parseInt(yx_ss%3600/60)+"分"+parseInt(yx_ss%3600%60)+"秒";
			  var yx_km=5;
			  var yx_ss=yx_km/yx_speed4;
			  oyx_right5.innerHTML=parseInt(yx_ss/3600)+"时"+parseInt(yx_ss%3600/60)+"分"+parseInt(yx_ss%3600%60)+"秒";
			  yx_km=30;
			  var yx_ss=yx_km/yx_speed4;
			  oyx_right6.innerHTML=parseInt(yx_ss/3600)+"时"+parseInt(yx_ss%3600/60)+"分"+parseInt(yx_ss%3600%60)+"秒";
			  var yx_km=10;
			  var yx_ss=yx_km/yx_speed4;
			  oyx_right7.innerHTML=parseInt(yx_ss/3600)+"时"+parseInt(yx_ss%3600/60)+"分"+parseInt(yx_ss%3600%60)+"秒";
			  yx_km=42;
			  var yx_ss=yx_km/yx_speed4;
			  oyx_right8.innerHTML=parseInt(yx_ss/3600)+"时"+parseInt(yx_ss%3600/60)+"分"+parseInt(yx_ss%3600%60)+"秒";
			  yx_km=15;
			  oyx_right9.innerHTML=parseInt(yx_ss/3600)+"时"+parseInt(yx_ss%3600/60)+"分"+parseInt(yx_ss%3600%60)+"秒";
		} 
		if(oyx_minutes4.value.length>0&&oyx_seconds4.value.length>0){
			var yx_cost1=oyx_minutes4.value*60+oyx_seconds4.value;
			var yx_km=1;
			var yx_cost3=yx_km*yx_cost1;
			var yx_hh=parseInt(yx_cost3/3600);
			 var yx_mm=parseInt(yx_cost3%3600/60);
			 var yx_ss=parseInt(yx_cost3%3600%60);
			 oyx_right1.innerHTML=parseInt(yx_cost3/3600)+"时"+parseInt(yx_cost3%3600/60)+"分"+parseInt(yx_cost3%3600%60)+"秒";
			 var yx_km=20;
			var yx_cost3=yx_km*yx_cost1;
			 oyx_right2.innerHTML=parseInt(yx_cost3/3600)+"时"+parseInt(yx_cost3%3600/60)+"分"+parseInt(yx_cost3%3600%60)+"秒";
			 var yx_km=2;
			 var yx_cost3=yx_km*yx_cost1;
			 oyx_right3.innerHTML=parseInt(yx_cost3/3600)+"时"+parseInt(yx_cost3%3600/60)+"分"+parseInt(yx_cost3%3600%60)+"秒";
			 var yx_km=21;
			 var yx_cost3=yx_km*yx_cost1;
			 oyx_right4.innerHTML=parseInt(yx_cost3/3600)+"时"+parseInt(yx_cost3%3600/60)+"分"+parseInt(yx_cost3%3600%60)+"秒";
			 var yx_km=5;
			 var yx_cost3=yx_km*yx_cost1;
			 oyx_right5.innerHTML=parseInt(yx_cost3/3600)+"时"+parseInt(yx_cost3%3600/60)+"分"+parseInt(yx_cost3%3600%60)+"秒";
			 var yx_km=30;
			 var yx_cost3=yx_km*yx_cost1;
			 oyx_right6.innerHTML=parseInt(yx_cost3/3600)+"时"+parseInt(yx_cost3%3600/60)+"分"+parseInt(yx_cost3%3600%60)+"秒";
			 var yx_km=10;
			 var yx_cost3=yx_km*yx_cost1;
			 oyx_right7.innerHTML=parseInt(yx_cost3/3600)+"时"+parseInt(yx_cost3%3600/60)+"分"+parseInt(yx_cost3%3600%60)+"秒";
			 var yx_km=42;
			 var yx_cost3=yx_km*yx_cost1;
			 oyx_right8.innerHTML=parseInt(yx_cost3/3600)+"时"+parseInt(yx_cost3%3600/60)+"分"+parseInt(yx_cost3%3600%60)+"秒";
			 var yx_km=15;
			 var yx_cost3=yx_km*yx_cost1;
			 oyx_right9.innerHTML=parseInt(yx_cost3/3600)+"时"+parseInt(yx_cost3%3600/60)+"分"+parseInt(yx_cost3%3600%60)+"秒";
		}
	Reset4.onclick=function(){
		oyx_right1.innerHTML="";
		oyx_right2.innerHTML="";
		oyx_right3.innerHTML="";
		oyx_right4.innerHTML="";
		oyx_right5.innerHTML="";
		oyx_right6.innerHTML="";
		oyx_right7.innerHTML="";
		oyx_right8.innerHTML="";
		oyx_right9.innerHTML="";
		oyx_minutes4.value="";
		oyx_seconds4.value="";
		yx_Hour.value="0";
		yx_Min.value="0"; 
		yx_Sec.value="0";
		yx_Details.style.display="none";
	}
	}
	//年龄等级计算器
	var Tp_man=document.getElementById("tp_man");
	var Tp_age=document.getElementById("tp_age");
	var Tp_sele=document.getElementById("tp_sele");
	var tp_Hour5=document.getElementById("tp_hour5");
	var tp_Min5=document.getElementById("tp_min5");
	var tp_Second5=document.getElementById("tp_sec5");
	var Calcu5=document.getElementById("calcu5");
	var Reset5=document.getElementById("reset5");
	var Tishi5=document.getElementById("tishi5");
	var Result5=document.getElementById("result5");
	for (var i=0;i<=24;i++) {
		var opt2=document.createElement("option");
		opt2.value=i;
		opt2.innerText=i;
		tp_Hour5.appendChild(opt2);
	}
	for (var i=0;i<=59;i++) {
		var opt2=document.createElement("option");
		opt2.value=i;
		opt2.innerText=i;
		tp_Min5.appendChild(opt2);
	}
	for (var i=0;i<=59;i++) {
		var opt2=document.createElement("option");
		opt2.value=i;
		opt2.innerText=i;
		tp_Second5.appendChild(opt2);
	}
	Calcu5.onclick=function(){
		function Sex(){
	      	var oSex='';
	      	if(Tp_man.checked){
	      		oSex='男子';
	      	}
	      	else{
	      		oSex='女子';
	      	}
	      	return oSex;
	    }
		var index=Tp_sele.selectedIndex;
		var tp_dis=Tp_sele.options[index].value;
		if(Tp_age.value==""){
      	Tishi5.style.display="inline-block";
      	Result5.innerHTML="";
	     }else{
      		//  男女
      		if(Tp_man.checked){
      			Tishi5.style.display="none";
      			Result5.innerHTML="该年龄("+Tp_age.value+"周岁)的等级用时是：0分0秒<br/>您的年龄等级得分是：6186.70 % 属于：世界纪录水平<br />要实现世界记录(100%)，需用时：1分1秒 配速：22.09 Km/h(2分3秒/公里)";
      		}
      		else if(0<Tp_age&&10>=Tp_age){
      			Tishi5.style.display="none";
      			Result5.innerHTML="该年龄("+Tp_age.value+"周岁)的等级用时是：0分0秒<br/>您的年龄等级得分是：6186.70 % 属于：世界纪录水平<br />要实现世界记录(100%)，需用时：1分1秒 配速：27.09 Km/h(2分3秒/公里)";
      		}
             else if(10<Tp_age&&20>=Tp_age){
             	Tishi5.style.display="none";
      			Result5.innerHTML="该年龄("+Tp_age.value+"周岁)的等级用时是：0分0秒<br/>您的年龄等级得分是：6186.70 % 属于：世界纪录水平<br />要实现世界记录(100%)，需用时：1分1秒 配速：29.09 Km/h(2分3秒/公里)";
      		}
             else if(20<Tp_age&&30>=Tp_age){
             	Tishi5.style.display="none";
      			Result5.innerHTML="该年龄("+Tp_age.value+"周岁)的等级用时是：0分0秒<br/>您的年龄等级得分是：6186.70 % 属于：世界纪录水平<br />要实现世界记录(100%)，需用时：1分1秒 配速：29.09 Km/h(2分3秒/公里)";
      		}
             else if(30<Tp_age&&40>=Tp_age){
             	Tishi5.style.display="none";
      			Result5.innerHTML="该年龄("+Tp_age.value+"周岁)的等级用时是：0分0秒<br/>您的年龄等级得分是：6186.70 % 属于：世界纪录水平<br />要实现世界记录(100%)，需用时：1分1秒 配速：29.09 Km/h(2分3秒/公里)";
      		}
             else if(40<Tp_age&&50>=Tp_age){
             	Tishi5.style.display="none";
      			Result5.innerHTML="该年龄("+Tp_age.value+"周岁)的等级用时是：0分0秒<br/>您的年龄等级得分是：6186.70 % 属于：世界纪录水平<br />要实现世界记录(100%)，需用时：1分1秒 配速：28.09 Km/h(2分3秒/公里)";
      		}
             else if(50<Tp_age&&60>=Tp_age){
             	Tishi5.style.display="none";
      			Result5.innerHTML="该年龄("+Tp_age.value+"周岁)的等级用时是：0分0秒<br/>您的年龄等级得分是：6186.70 % 属于：世界纪录水平<br />要实现世界记录(100%)，需用时：1分1秒 配速：27.09 Km/h(2分3秒/公里)";
      		}
             else if(60<Tp_age&&70>=Tp_age){
             	Tishi5.style.display="none";
      			Result5.innerHTML="该年龄("+Tp_age.value+"周岁)的等级用时是：0分0秒<br/>您的年龄等级得分是：6186.70 % 属于：世界纪录水平<br />要实现世界记录(100%)，需用时：1分1秒 配速：27.09 Km/h(2分3秒/公里)";
      		}
             else if(70<Tp_age&&80>=Tp_age){
             	Tishi5.style.display="none";
      			Result5.innerHTML="该年龄("+Tp_age.value+"周岁)的等级用时是：0分0秒<br/>您的年龄等级得分是：6186.70 % 属于：世界纪录水平<br />要实现世界记录(100%)，需用时：1分1秒 配速：26.09 Km/h(2分3秒/公里)";
      		} else{
      			Tishi5.style.display="none";
      			Result5.innerHTML="该年龄("+Tp_age.value+"周岁)的等级用时是：0分0秒<br/>您的年龄等级得分是：6186.70 % 属于：世界纪录水平<br />要实现世界记录(100%)，需用时：1分1秒 配速：26.09 Km/h(2分3秒/公里)";
      		}
      	}
	}
	Reset5.onclick=function(){
		Tp_age.value="";
		Tishi5.style.display="none";
      	Result5.innerText="";
	}
	
	//BMI体重指数计算器
	var Height6=document.getElementById("height6");
	var Weight6=document.getElementById("weight6");
	var Calcu6=document.getElementById("calcu6");
	var Reset6=document.getElementById("reset6");
	var Tishi6=document.getElementById("tishi6");
	var Result6=document.getElementById("result6");
	Calcu6.onclick=function(){
		var res6=(Weight6.value/(Height6.value*Height6.value)*10000).toFixed(2);
				if(Height6.value.length>0 && Weight6.value.length>0){
					if(res6<18.5){
						Result6.innerHTML=("您的体重指数为 "+res6+" 属于：偏轻");
						Tishi6.style.display='none';
					}
					if(res6<24.9 && res6>=18.5){
						Result6.innerHTML=("您的体重指数为 "+res6+" 属于：正常");
						Tishi6.style.display='none';
					}
					if(res6<29.9 && res6>=24.9){
						Result6.innerHTML=("您的体重指数为 "+res6+" 属于：偏重");
						Tishi6.style.display='none';
					}
					if(res6>=30){
						Result6.innerHTML=("您的体重指数为 "+res6+" 属于：肥胖");
						Tishi6.style.display='none';
					}
				}
				else{
					Tishi6.style.display='inline-block';
				}
			}
	Reset6.onclick=function(){
		Height6.value='';
		Weight6.value='';
		Result6.innerHTML="";
		Tishi6.style.display='none';
	}
	
	//卡路里计算器
	var Distance7=document.getElementById("distance7");
	var Weight7=document.getElementById("weight7");
	var Calcu7=document.getElementById("calcu7");
	var Reset7=document.getElementById("reset7");
	var Result7=document.getElementById("result7");
	var Tishi7=document.getElementById("tishi7");
	Calcu7.onclick=function(){
		var res7=(Distance7.value*Weight7.value*1.036).toFixed(1);
				if(Distance7.value.length>0 && Weight7.value.length>0){
					Result7.innerHTML="您消耗了 "+res7+" 千卡 kcal";
					Tishi7.style.display='none';
				}
				else{
					Tishi7.style.display='inline-block';
				}
			}
	Reset7.onclick=function(){
		Distance7.value='';
		Weight7.value='';
		Result7.innerHTML="";
		Tishi7.style.display='none';
	}
	//训练计算器
	var Run_dis=document.getElementById("run_dis");
	var zy_Hour=document.getElementById("zy_hour");
	var zy_Min=document.getElementById("zy_min");
	var zy_Second=document.getElementById("zy_second");
	var Calcu8=document.getElementById("calcu8");
	var Reset8=document.getElementById("reset8");
	var Tishi8=document.getElementById("tishi8");
	var S1=document.getElementById("s1");
	var P1=document.getElementById("p1");
	var S2=document.getElementById("s2");
	var P2=document.getElementById("p2");
	var S3=document.getElementById("s3");
	var P3=document.getElementById("p3");
	var S4=document.getElementById("s4");
	var S5=document.getElementById("s5");
	var S6=document.getElementById("s6");
	var zy_Jieguo=document.getElementById("zy_jieguo");
	for (var i=0;i<=24;i++) {
		var opt1=document.createElement("option");
		opt1.value=i;
		opt1.innerText=i;
		zy_Hour.appendChild(opt1);
	}
	for (var i=0;i<=59;i++) {
		var opt1=document.createElement("option");
		opt1.value=i;
		opt1.innerText=i;
		zy_Min.appendChild(opt1);
	}
	for (var i=0;i<=59;i++) {
		var opt1=document.createElement("option");
		opt1.value=i;
		opt1.innerText=i;
		zy_Second.appendChild(opt1);
	}
	Calcu8.onclick=function(){
		if(Run_dis.value==""){
			Tishi8.style.display='inline-block';
		}else{
			Tishi8.style.display='none';
			var zy_value1=(zy_Hour.value*3600+zy_Min.value*60+zy_Second.value)/Run_dis.value;
			S1.innerHTML=parseInt(1.5*zy_value1/3600)+":"+parseInt(1.5*zy_value1%3600/60)+":"+parseInt(1.5*zy_value1%60);
			P1.innerHTML=(Run_dis.value/(zy_Hour.value*60+zy_Min.value+zy_Second.value/60)).toFixed(2);
			S2.innerHTML=parseInt(3*zy_value1/3600)+":"+parseInt(3*zy_value1%3600/60)+":"+parseInt(3*zy_value1%60);
			var abc=(zy_Hour.value+zy_Min.value/60);
			var time=zy_Hour.value*3600+zy_Min.value*60+zy_Second.value;
			P2.innerHTML=(Run_dis.value/(time/3600)).toFixed(2);
			S3.innerHTML=parseInt(5*zy_value1/3600)+":"+parseInt(5*zy_value1%3600/60)+":"+parseInt(5*zy_value1%60);
			P3.innerHTML=(Run_dis.value*1000/(zy_Hour.value*60*60+zy_Min.value*60+zy_Second.value)).toFixed(2);
			S4.innerHTML=parseInt(10*zy_value1/3600)+":"+parseInt(10*zy_value1%3600/60)+":"+parseInt(10*zy_value1%60);
			S5.innerHTML=parseInt(21.0975*zy_value1/3600)+":"+parseInt(21.0975*zy_value1%3600/60)+":"+parseInt(21.0975*zy_value1%60);
			S6.innerHTML=parseInt(42.195*zy_value1/3600)+":"+parseInt(42.195*zy_value1%3600/60)+":"+parseInt(42.195*zy_value1%60);
			zy_Jieguo.style.display="block";
		}
	}
	Reset8.onclick=function(){
		Run_dis.value='';
		zy_Jieguo.style.display="none";
		Tishi8.style.display='none';
	}
	//国家运动员等级
	var Tp9nan=document.getElementById("tp9nan");
	var Tp9nianli=document.getElementById("tp9nianli");
	var Tp91=document.getElementById("tp91");
	var tp_Hour1=document.getElementById("tp_hour1");
	var tp_Min1=document.getElementById("tp_min1");
	var tp_Second1=document.getElementById("tp_second1");
	var Calcu9=document.getElementById("calcu9");
	var Reset9=document.getElementById("reset9");
	var Tishi9=document.getElementById("tishi9");
	var Result9=document.getElementById("result9");
	for (var i=0;i<=24;i++) {
		var opt111=document.createElement("option");
		opt111.value=i;
		opt111.innerText=i;
		tp_Hour1.appendChild(opt111);
	}
	for (var i=0;i<=59;i++) {
		var opt111=document.createElement("option");
		opt111.value=i;
		opt111.innerText=i;
		tp_Min1.appendChild(opt111);
	}
	for (var i=0;i<=59;i++) {
		var opt111=document.createElement("option");
		opt111.value=i;
		opt111.innerText=i;
		tp_Second1.appendChild(opt111);
	}
	Calcu9.onclick=function(){
		function Sex(){
	      	var oSex='';
	      	if(Tp9nan.checked){
	      		oSex='男子';
	      	}
	      	else{
	      		oSex='女子';
	      	}
	      	return oSex;
	    }
		var index=Tp91.selectedIndex;
		var tp_dis=Tp91.options[index].value;
		var i=tp_dis/(tp_Hour1.value*3600+tp_Min1.value*60+tp_Second1.value);
		if(Tp9nianli.value==""){
      	Tishi9.style.display="inline-block";
      	Result9.innerHTML="";
	     }else if(i>2.7777&&tp_dis==21000){
	     	Tishi9.style.display="none";
			Result9.innerHTML="您的成绩达到了全国田径业余锻炼等级标准("+Sex()+"):一级运动员的水平，达标成绩为：2:00:00没有该级别专业运动员标准数据.";
		}else if(i>2.564&&tp_dis==21000){
			Tishi9.style.display="none";
			Result9.innerHTML="您的成绩达到了全国田径业余锻炼等级标准("+Sex()+"):二级运动员的水平，达标成绩为：2:10:00没有该级别专业运动员标准数据.";
		}else if(i>2.381&&tp_dis==21000){
			Tishi9.style.display="none";
			Result9.innerHTML="您的成绩达到了全国田径业余锻炼等级标准("+Sex()+"):三级运动员的水平，达标成绩为：2:20:00没有该级别专业运动员标准数据.";
		}else if(tp_dis==21000){
			Tishi9.style.display="none";
			Result9.innerHTML="您的成绩没有达到全国田径业余锻炼等级标准("+Sex()+")运动员的水平，基本达标成绩为：2:30:00没有该级别专业运动员标准数据.";
		}else if(i>2.7777&&tp_dis==5000){
			Tishi9.style.display="none";
			Result9.innerHTML="您的成绩达到了全国田径业余锻炼等级标准("+Sex()+"):一级运动员的水平，达标成绩为：22:15您的成绩达到了("+Sex()+")专业:二级运动员的水平，达标成绩为：16:10";
		}else if(i>2.564&&tp_dis==5000){
			Tishi9.style.display="none";
			Result9.innerHTML="您的成绩达到了全国田径业余锻炼等级标准("+Sex()+"):二级运动员的水平，达标成绩为：24:15您的成绩没有达到("+Sex()+")专业运动员的水平，基本达标成绩为：17:40";
		}else if(i>2.381&&tp_dis==5000){
			Tishi9.style.display="none";
			Result9.innerHTML="您的成绩达到了全国田径业余锻炼等级标准("+Sex()+"):三级运动员的水平，达标成绩为：26:45您的成绩没有达到("+Sex()+")专业运动员的水平，基本达标成绩为：17:40";
		}else if(tp_dis==5000){
			Tishi9.style.display="none";
			Result9.innerHTML="您的成绩没有达到全国田径业余锻炼等级标准("+Sex()+")运动员的水平，基本达标成绩为：26:45您的成绩没有达到("+Sex()+")专业运动员的水平，基本达标成绩为：17:40";
		}else if(i>2.7777&&tp_dis==10000){
			Tishi9.style.display="none";
			Result9.innerHTML="您的成绩达到了全国田径业余锻炼等级标准("+Sex()+":一级运动员的水平，达标成绩为：22:15您的成绩达到了("+Sex()+")专业:二级运动员的水平，达标成绩为：16:10";
		}else if(i>2.564&&tp_dis==10000){
			Tishi9.style.display="none";
			Result9.innerHTML="您的成绩达到了全国田径业余锻炼等级标准("+Sex()+"):二级运动员的水平，达标成绩为：24:15您的成绩没有达到("+Sex()+")专业运动员的水平，基本达标成绩为：17:40";
		}else if(i>2.381&&tp_dis==10000){
			Tishi9.style.display="none";
			Result9.innerHTML="您的成绩达到了全国田径业余锻炼等级标准("+Sex()+"):三级运动员的水平，达标成绩为：26:45您的成绩没有达到("+Sex()+")专业运动员的水平，基本达标成绩为：17:40";
		}else if(tp_dis==10000){
			Tishi9.style.display="none";
			Result9.innerHTML="您的成绩没有达到全国田径业余锻炼等级标准("+Sex()+")运动员的水平，基本达标成绩为：26:45您的成绩没有达到("+Sex()+")专业运动员的水平，基本达标成绩为：17:40";
		}else if(i>2.7777&&tp_dis==42000){
			Tishi9.style.display="none";
			Result9.innerHTML="您的成绩达到了全国田径业余锻炼等级标准("+Sex()+"):一级运动员的水平，达标成绩为：22:15您的成绩达到了("+Sex()+")专业:二级运动员的水平，达标成绩为：16:10";
		}else if(i>2.564&&tp_dis==42000){
			Tishi9.style.display="none";
			Result9.innerHTML="您的成绩达到了全国田径业余锻炼等级标准("+Sex()+"):二级运动员的水平，达标成绩为：24:15您的成绩没有达到("+Sex()+")专业运动员的水平，基本达标成绩为：17:40";
		}else if(i>2.381&&tp_dis==42000){
			Tishi9.style.display="none";
			Result9.innerHTML="您的成绩达到了全国田径业余锻炼等级标准("+Sex()+"):三级运动员的水平，达标成绩为：26:45您的成绩没有达到("+Sex()+")专业运动员的水平，基本达标成绩为：17:40";
		}else if(tp_dis==42000){
			Tishi9.style.display="none";
			Result9.innerHTML="您的成绩没有达到全国田径业余锻炼等级标准("+Sex()+")运动员的水平，基本达标成绩为：26:45您的成绩没有达到("+Sex()+")专业运动员的水平，基本达标成绩为：17:40";
		} 
	}
	Reset9.onclick=function(){
		Tp9nianli.value="";
		Tishi9.style.display="none";
      	Result9.innerHTML="";
	}
	//公英单位转换器
	var aobnt1=document.getElementById("abnt1");
	var aobnt2=document.getElementById("abnt2");
	var aobnt3=document.getElementById("abnt3");
	var aobnt4=document.getElementById("abnt4");
	
	aobnt2.onclick=function(){
		console.log(aobnt1.value);
		if(aobnt1.value!==""){
		document.getElementById("abnt3").value=(aobnt1.value*1.61).toFixed(2);
		}else{
		console.log(abnt1);
		document.getElementById("abnt1").value=(aobnt3.value/1.61).toFixed(2);
		}


	}
	aobnt4.onclick=function(){
		document.getElementById("abnt1").value="";
		document.getElementById("abnt3").value="";
	}
	
	var bobnt1=document.getElementById("bbnt1");
	var bobnt2=document.getElementById("bbnt2");
	var bobnt3=document.getElementById("bbnt3");
	var bobnt4=document.getElementById("bbnt4");
	bobnt2.onclick=function(){
		console.log(bobnt1.value);
//		document.getElementById("bbnt3").value=(bobnt1.value*2.54).toFixed(2);
		if(bobnt1.value!==""){
		document.getElementById("bbnt3").value=(bobnt1.value*2.54).toFixed(2);
		}else{
		console.log(abnt1);
		document.getElementById("bbnt1").value=(bbnt3.value/2.54).toFixed(2);
		}
	}
	bobnt4.onclick=function(){
		document.getElementById("bbnt1").value="";
		document.getElementById("bbnt3").value="";
	}
	
	var cobnt1=document.getElementById("cbnt1");
	var cobnt2=document.getElementById("cbnt2");
	var cobnt3=document.getElementById("cbnt3");
	var cobnt4=document.getElementById("cbnt4");
	cobnt2.onclick=function(){
//		console.log(cobnt1.value);
//		document.getElementById("cbnt3").value=(cobnt1.value/0.394).toFixed(2);
        if(cobnt1.value!==""){
		document.getElementById("cbnt3").value=(cobnt1.value*0.394).toFixed(2);
		}else{
		console.log(abnt1);
		document.getElementById("cbnt1").value=(cbnt3.value/0.394).toFixed(2);
		}
      
	}
	cobnt4.onclick=function(){
		document.getElementById("cbnt1").value="";
		document.getElementById("cbnt3").value="";
	}
	var dobnt1=document.getElementById("dbnt1");
	var dobnt2=document.getElementById("dbnt2");
	var dobnt3=document.getElementById("dbnt3");
	var dobnt4=document.getElementById("dbnt4");
	dobnt2.onclick=function(){
//		console.log(aobnt1.value);
//		document.getElementById("dbnt3").value=(dobnt1.value/2.2).toFixed(2);
if(dobnt1.value!==""){
		document.getElementById("dbnt3").value=(dobnt1.value*2.2).toFixed(2);
		}else{
		console.log(abnt1);
		document.getElementById("dbnt1").value=(dbnt3.value/2.2).toFixed(2);
		}
	}
	dobnt4.onclick=function(){
		document.getElementById("dbnt1").value="";
		document.getElementById("dbnt3").value="";
	}
	var eobnt1=document.getElementById("ebnt1");
	var eobnt2=document.getElementById("ebnt2");
	var eobnt3=document.getElementById("ebnt3");
	var eobnt4=document.getElementById("ebnt4");
	eobnt2.onclick=function(){
		console.log(aobnt1.value);
		eobnt3.innerHTML=aobnt1.value/1.609344;
//		document.getElementById("ebnt3").value=(eobnt1.value*28.35).toFixed(2);
		if(eobnt1.value!==""){
		document.getElementById("ebnt3").value=(eobnt1.value*28.35).toFixed(2);
		}else{
		console.log(abnt1);
		document.getElementById("ebnt1").value=(ebnt3.value/28.35).toFixed(2);
		}
	}
	eobnt4.onclick=function(){
		document.getElementById("ebnt1").value="";
		document.getElementById("ebnt3").value="";
	}
	var fobnt1=document.getElementById("fbnt1");
	var fobnt2=document.getElementById("fbnt2");
	var fobnt3=document.getElementById("fbnt3");
	var fobnt4=document.getElementById("fbnt4");
	fobnt2.onclick=function(){
		console.log(aobnt1.value);
		aobnt3.innerHTML=aobnt1.value/1.609344;
//		document.getElementById("fbnt3").value=(fobnt1.value*3.785).toFixed(2);
	if(fobnt1.value!==""){
			document.getElementById("fbnt3").value=(fobnt1.value*3.785).toFixed(2);
			}else{
			console.log(abnt1);
			document.getElementById("fbnt1").value=(fbnt3.value/3.785).toFixed(2);
			}
	}
	fobnt4.onclick=function(){
		document.getElementById("fbnt1").value="";
		document.getElementById("fbnt3").value="";
	}
}
