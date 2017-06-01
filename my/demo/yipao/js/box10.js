window.onload=function(){
	var aobnt1=document.getElementById("abnt1");
	var aobnt2=document.getElementById("abnt2");
	var aobnt3=document.getElementById("abnt3");
	var aobnt4=document.getElementById("abnt4");
	aobnt2.onclick=function(){
		console.log(aobnt1.value);
		document.getElementById("abnt3").value=(aobnt1.value*1.61);
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
		document.getElementById("bbnt3").value=(bobnt1.value*2.54);
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
		console.log(cobnt1.value);
		document.getElementById("cbnt3").value=(cobnt1.value/0.394);
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
		console.log(aobnt1.value);
		document.getElementById("dbnt3").value=(dobnt1.value/2.2);
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
		document.getElementById("ebnt3").value=(eobnt1.value*28.35);
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
		document.getElementById("fbnt3").value=(fobnt1.value*3.785);
	}
	fobnt4.onclick=function(){
		document.getElementById("fbnt1").value="";
		document.getElementById("fbnt3").value="";
	}
//jstp9
	var Tp911=document.getElementById("tp911");
	var Tp912=document.getElementById("tp912");
	var Tp913=document.getElementById("tp913");
	var Tp914=document.getElementById("tp914");

//	var tpx=ty921.value;
	var Tp9t1=document.getElementById("tp9221");
	var Tp9t2=document.getElementById("tp9222");
	var Tp9t3=document.getElementById("tp9223");
	
	var Tp921=document.getElementById("tp921");
	var Tp922=document.getElementById("tp922");
	var Tp923=document.getElementById("tp923");
	
	Tp921.onclick=function(){
	  console.log(Tp9t1.value);
	  console.log(Tp9t2.value);
	  
	  console.log(Tp9t3.value);
	  
//	  var i=Tp9t1.value*3600+Tp9t2.value*60+Tp9t3.value;
//	  console.log(i);
	}
	
	
}
