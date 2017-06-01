var oheaderfyc=document.getElementsByClassName('headerfyc')[0];
var b=oheaderfyc.getElementsByTagName('li');
//var city=b.getElementsByTagName('a')[0];
var ohederfl1=document.getElementsByClassName('headerfl1')[0];
var ocity=ohederfl1.getElementsByTagName('a');
//console.log(ocity[0]);
//console.log(ocity[0].innerHTML);
for (var i=0;i<b.length;i++) {
	b[i].onclick=function(){
		if (confirm('你确定要切换成到'+this.innerHTML+'吗？')) {
		ocity[0].innerHTML=this.innerHTML
		}
	}
}

//下拉列表
var oxia=document.getElementsByClassName('xia');
var oxiaxian=document.getElementsByClassName('xiaxian');
for (var i=0;i<oxia.length;i++) {
	oxiaxian[i].index=i;
	oxiaxian[i].onmousemove=function(){
		oxia[this.index].style.display='block';
	}
	oxiaxian[i].onmouseout=function(){
		oxia[this.index].style.display='none';
	}
}
//右弹出
var oheader=document.getElementsByClassName('header-fl');
var oheaderdiv=document.getElementsByClassName('header-fr');
 for (var i=0;i<oheader.length;i++) {
 	oheader[i].index=i;
 	oheader[i].onmousemove=function(){
 		oheaderdiv[this.index].style.display='block';
 	}
 	oheader[i].onmouseout=function(){
 		oheaderdiv[this.index].style.display='none';
 		
 	}
 }

//边框
var ocontentjxleftxfr=document.getElementsByClassName('contentjxleftxfr')[0].getElementsByTagName('li');
 for (var i=0;i<ocontentjxleftxfr.length;i++) {
 	ocontentjxleftxfr[i].index=i;
 	
 	ocontentjxleftxfr[i].onmousemove=function(){
 		ocontentjxleftxfr[this.index].style.border='1px solid red';
 	}
 	ocontentjxleftxfr[i].onmouseout=function(){
 		ocontentjxleftxfr[this.index].style.border='1px solid #DFDFDF';
 		
 	}
 }
//尾部切换

var ofooter1nav=document.getElementsByClassName('footer1nav')[0].getElementsByTagName('li');
var oflrem=document.getElementsByClassName('f1rem');
console.log(oflrem);
 		oflrem[0].style.display='block';
 for (var i=0;i<ofooter1nav.length;i++) {
 	ofooter1nav[i].index=i;
 	ofooter1nav[i].onmouseout=function(){
 		for (var a=0;a<oflrem.length;a++) {
 			oflrem[a].style.display='none';
 		}
 		oflrem[this.index].style.display='block';
 		
 	}
 	ofooter1nav[i].onmouseover=function(){
 		oflrem[this.index].style.display='block';
 	}
 }
 
//底部删除

var oscreenfooter=document.getElementsByClassName('screen-footer');
var oscreenimg=oscreenfooter[0].getElementsByTagName('img')
 oscreenimg[0].onclick=function(){
 	oscreenfooter[0].style.display='none';
 }
//头部显示
/*var oscreentop=document.getElementsByClassName('screen-top')[0];
    window.onscroll=function(){
     var oscrollTop = window.pageYOffset|| document.documentElement.scrollTop || document.body.scrollTop;
	   console.log(oscrollTop);
	if (oscrollTop>400) {
		oscreentop.style.display='block';
		var i=10;
	     otop();
		
		
		
	} else{
		oscreentop.style.display='none';
	}
}



function otop(){
	  	 var otime=setInterval(function(){
		  		i++;
		  		 oscreentop.style.top=i+'px';
		  		 console.log(oscreentop.style.top)
		  		if(oscreentop.style.top=='200px'){
		  			clearInterval(otime);
		  		}
	  		 },10)
	    }*/
	   

//顶部显示2动画
var oscreentop=document.getElementsByClassName('screen')[0].getElementsByTagName('div')[0];

window.onscroll=function(){
     var oscrollTop = window.pageYOffset|| document.documentElement.scrollTop || document.body.scrollTop;

    if (oscrollTop>400) {
    	
//  	oscreentop.style.className="topscreen";
    	oscreentop.setAttribute("class", "screen-top"); 
    	 console.log(oscreentop);
    	
    	
    }else{
    	oscreentop.className="topscreen";
    	
    }
    
    
}