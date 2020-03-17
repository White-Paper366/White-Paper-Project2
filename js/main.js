$(function(){
	$(".address").mouseover(function(){
		$(".xia").css("display","none")
		$(".shang").css("display","block")
		$(".address").css("color","#FFFFFF")
		$(".top-ul").css("transform","translateY(236px)")
		$(".top-ul").css("transition","1s")
	})
	
	$(".address").mouseout(function(){
		$(".xia").css("display","block")
		$(".shang").css("display","none")
		$(".address").css("color","#AAACAE")
		$(".top-ul").css("transform","translateY(0px)")
		$(".top-ul").css("transition","1s")
	})
	
	$(".top-img").mouseover(function(){
		$(".xia").css("display","none")
		$(".shang").css("display","block")
		$(".address").css("color","#FFFFFF")
		$(".top-ul").css("transform","translateY(236px)")
		$(".top-ul").css("transition","1s")
	})
	
	$(".top-img").mouseout(function(){
		$(".xia").css("display","block")
		$(".shang").css("display","none")
		$(".address").css("color","#AAACAE")
		$(".top-ul").css("transform","translateY(0px)")
		$(".top-ul").css("transition","1s")
	})
	$(".x1").mouseover(function(){
		$(".list").css("display","block")
		$(".x1").css("border-bottom","none")
	})
	
	$(".list").mouseover(function(){
		$(".list").css("display","block")
		$(".x1").css("border-bottom","none")
	})
	
	$(".x1").mouseout(function(){
		$(".list").css("display","none")
		$(".x1").css("border-bottom","1px solid")
	})
	
	$(".list").mouseout(function(){
		$(".list").css("display","none")
		$(".x1").css("border-bottom","1px solid")
	})
	
	$(".list-li").click(function(){
	 	var txt =$(this).text()
	 	if(txt=="看作品"){
	 		$(".down").css("padding-left","25px")
	 		$(".serach-txt").attr("placeholder","海量效果图，装修灵感必备")
	 		$(".list").css("display","none")
	 	}else if(txt=="装修课堂"){
	 		$(".serach-txt").attr("placeholder","实用学习攻略，装修早知道")
	 		$(".down").css("padding-left","10px")
	 		$(".list").css("display","none")
	 	}else{
	 		$(".down").css("padding-left","10px")
	 		$(".serach-txt").attr("placeholder","专业设计师团队，为您私人订制")
	 		$(".list").css("display","none")
	 	}
	 	$(".x1-txt").text(txt)
	})
	
//	$(".li2").mouseover(function(){
//	
//	})

	$(".LunboBtn").mouseover(function(){
		$(".Btn1").css("display","block")
		$(".Btn2").css("display","block")
		$(".Btn1").css("transition","1s")
		$(".Btn2").css("transition","1s")
	})
	
	$(".LunboBtn").mouseout(function(){
		$(".Btn1").css("display","none")
		$(".Btn2").css("display","none")
		$(".Btn1").css("transition","1s")
		$(".Btn2").css("transition","1s")
	})
 		SSS()
 		zz()
 	$("#li10").mouseover(function(){
 		change(0)
 	})
 	
 	$("#li11").mouseover(function(){
 		change(1)
 	})
 	
 	$("#li12").mouseover(function(){
 		change(2)
 	})
 	
 	$(".index_tit").mouseover(function(){
 		$(".index_tit_line").css("transform","scale(2.25,1)")
 	})
 	
 	$(".index_tit").mouseout(function(){
 		$(".index_tit_line").css("transform","scale(1,1)")
 	})
 	$(".designer .hd ul li").mouseover(function(){
 		var index = $(this).index();
 		if(index==1){
 			$(this).siblings("li").removeClass("on")
 			$(this).addClass("on")
 			$(".designer .bd ul li:eq(1)").css("display","list-item")
 			$(".designer .bd ul li:eq(0)").css("display","none")
 			$(".designer .bd ul li:eq(2)").css("display","none")
 			$(".designer .bd ul li:eq(3)").css("display","none")
 			$(".designer .bd ul li:eq(4)").css("display","none")
 		}else if(index==2){
 			$(this).siblings("li").removeClass("on")
 			$(this).addClass("on")
 			$(".designer .bd ul li:eq(1)").css("display","none")
 			$(".designer .bd ul li:eq(0)").css("display","none")
 			$(".designer .bd ul li:eq(2)").css("display","list-item")
 			$(".designer .bd ul li:eq(3)").css("display","none")
 			$(".designer .bd ul li:eq(4)").css("display","none")
 		}else if(index==3){
 			$(this).siblings("li").removeClass("on")
 			$(this).addClass("on")
 			$(".designer .bd ul li:eq(1)").css("display","none")
 			$(".designer .bd ul li:eq(0)").css("display","none")
 			$(".designer .bd ul li:eq(2)").css("display","none")
 			$(".designer .bd ul li:eq(3)").css("display","list-item")
 			$(".designer .bd ul li:eq(4)").css("display","none")
 		}else if(index==4){
 			$(this).siblings("li").removeClass("on")
 			$(this).addClass("on")
 			$(".designer .bd ul li:eq(1)").css("display","none")
 			$(".designer .bd ul li:eq(0)").css("display","none")
 			$(".designer .bd ul li:eq(2)").css("display","none")
 			$(".designer .bd ul li:eq(3)").css("display","none")
 			$(".designer .bd ul li:eq(4)").css("display","list-item")
 		}else{
 			$(this).siblings("li").removeClass("on")
 			$(this).addClass("on")
 			$(".designer .bd ul li:eq(1)").css("display","none")
 			$(".designer .bd ul li:eq(0)").css("display","list-item")
 			$(".designer .bd ul li:eq(2)").css("display","none")
 			$(".designer .bd ul li:eq(3)").css("display","none")
 			$(".designer .bd ul li:eq(4)").css("display","none")
 		}
 	})
 	
 	$(".village .hd ul li").mouseover(function(){
 		var index = $(this).index();
 		if(index==1){
 			$(".zzz1").attr("id","")
 			$(".zzz3").attr("id","")
 			$(this).attr("id","zxccc")
 			$(".village .bd ul li:eq(1)").css("display","list-item")
 			$(".village .bd ul li:eq(0)").css("display","none")
 			$(".village .bd ul li:eq(2)").css("display","none")
 		}else if(index==2){
 			$(".zzz1").attr("id","")
 			$(".zzz2").attr("id","")
 			$(this).attr("id","zxccc")
 			$(".village .bd ul li:eq(1)").css("display","none")
 			$(".village .bd ul li:eq(0)").css("display","none")
 			$(".village .bd ul li:eq(2)").css("display","list-item")
 		}else{
 			$(".zzz3").attr("id","")
 			$(".zzz2").attr("id","")
 			$(this).attr("id","zxccc")
 			$(".village .bd ul li:eq(1)").css("display","none")
 			$(".village .bd ul li:eq(0)").css("display","list-item")
 			$(".village .bd ul li:eq(2)").css("display","none")
 		}
 	})
})

var indeximg = 0;

function xia() {
	clearInterval(timer); //清空定时器，不再执行每5秒钟平移一次
	if(indeximg == 2) {
		document.getElementById("Lunbo").style = "transform: translateX(-" + (0 * 1920) + "px);";
	} else {
		indeximg++;
		document.getElementById("Lunbo").style = "transform: translateX(-" + (indeximg * 1920) + "px);";
		//		document.getElementById("btn-lb2").disable=false;
	}
}

function shang(){
	clearInterval(timer); //清空定时器，不再执行每5秒钟平移一次
	if(indeximg == 0) {
		document.getElementById("Lunbo").style = "transform: translateX(-" + (2 * 1920) + "px);";
		indeximg=2;
	} else {
		indeximg--;
		document.getElementById("Lunbo").style = "transform: translateX(-" + (indeximg * 1920) + "px);";
	}
}

var timer;

function SSS() {
	var index = 0;
		timer = setInterval(function() {
		if(index == 2) {
			document.getElementById("Lunbo").style = "transform: translateX(0px)"; //将所有的图片回到最初始位置
			index=0
		} else {
			index++; //index+1
			document.getElementById("Lunbo").style = "transform: translateX(-" + (index * 1920) + "px);";
		}
	}, 4000)
	
}

function change(index){
		document.getElementById("Lunbo").style = "transform: translateX(-" + (index * 1920) + "px);";
}

function zz(){
	var tim;
	tim=setInterval(function(){
		document.getElementById("tit").style="transform:scale(2.25,1);";
	},3500,zz1(),2000)
}
   
function zz1(){
	var tim1;
	tim1=setInterval(function(){
		document.getElementById("tit").style="transform:scale(1,1);";
	},1000)
}
