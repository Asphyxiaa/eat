var rq = document.getElementsByClassName("rongqi")[0];
var oneP = document.getElementsByClassName("oneP");
var twoP = document.getElementsByClassName("twoP");
//第一页效果获取
var theme = document.getElementsByClassName("theme")[0];
var bg = document.getElementsByClassName("bg")[0];
//第二页效果获取
var xian = document.getElementsByClassName("xian");
var grid = document.getElementsByClassName("grid");
var leaf = document.getElementsByClassName("leaf");
//第三页效果的获取
var three_text = document.getElementsByClassName("three_text");
var three_moveimg = document.getElementsByClassName("three_moveimg");
var three_symbol = document.getElementsByClassName("three_symbol");
//第四张效果的获取
var four_img = document.getElementsByClassName("four_img");
var four_text = document.getElementsByClassName("four_text");
//第5页效果的获取
var five_img = document.getElementsByClassName("five_img");
var five_text = document.getElementsByClassName("five_text");
//第6页的效果获取
var six_text=document.getElementsByClassName("six_text");
var six_img=document.getElementsByClassName("six_img");
//第7页的效果获取
var seven_img = document.getElementsByClassName("seven_img");
var seven_text = document.getElementsByClassName("seven_text");
//第8页
var cover_bg = document.getElementsByClassName("cover_bg");
var eight_text = document.getElementsByClassName("eight_text");

var deg = 0;
var page = 0;
var kk = true;
var xk = true;
change_anmation_star();
//音乐的播放开关
var btn = document.getElementsByClassName("btn")[0];
var music = document.getElementById("music");
btn.addEventListener("touchstart", musick, false);
function musick () {
	if(music.paused) {
		music.play();
		btn.style.webkitAnimation="music 3s linear infinite";
	} else {
		music.pause();	
		btn.style.webkitAnimation="none";
	}
}

	
//document.onclick = function() {
//
//	deg += 90;
//	page++;
//	if(page >7) {
//		page = 0;
//	}
//	change();
//	rq.style.transform = "translateZ(-40vh) rotateX(" + deg + "deg)";
//
//}
//console.log(window.getComputedStyle(twoP[0],null).display);
document.addEventListener("touchstart", start, false);

function start(e) {
	var touch = e.touches[0];
	sy = touch.pageY;
	document.addEventListener("touchmove", move, false);
	sdeg = 0;
	xk = true;
	kk = true;
}
document.addEventListener("touchend", end, false);

function move(ev) {
	event.preventDefault();
	var touch = ev.touches[0];
	var dy = touch.pageY;
	var my = dy - sy;
	//记录滑动百分比，计算旋转角度
	sdeg = my / rq.offsetHeight * 90;
	//上下的判断
	if(sdeg >= 90) {
		sdeg = 90;
	}
	if(sdeg <= -90) {
		sdeg = -90;
	}
	//临时记录旋转角度
	kdeg = deg - sdeg;
	
	//将要翻页的时候，让下一个页面就发生变化
	if(sdeg > 10 && kk == true) {
		page--;
		if(page < 0) {
			page = 7;
		}
		change();
		change_anmation_star()
		kk = false;
	}
	if(sdeg < -10 && xk == true) {
		page++;
		if(page > 7) {
			page = 0;
		}
		change();
		change_anmation_star()
		xk = false;
	}

	rq.style.webkitTransition = "all 0.1s linear";
	rq.style.webkitTransform = "translateZ(-50vh) rotateX(" + kdeg + "deg)";
}

function end() {
	//移动一部分进行页面切换
	//	if(sdeg<10 && sdeg>=0){
	//		alert("aa");
	//		sdeg=0;
	//		if(xk=false){
	//		page--;
	//		if(page<0) {
	//			page = 7;
	//		}
	//		change();
	//		xk=true;
	//		}
	//	}
	
	//当将要翻页的变化效果还原
	if(xk == false) {
		page--;
		if(page < 0) {
			page = 7;
		}
		change();
	}
	if(kk == false) {
		page++;
		if(page > 7) {
			page = 0;
		}
		change();
	}
	
	//未滑动但未翻页的时候，不进行翻页
	if(sdeg < 10 && sdeg > -10) {
		sdeg = 0;
	}

	//正常滑动翻页
	if(sdeg >= 10) {
		sdeg = 90;
		page--;
		if(page < 0) {
			page = 7;
		}
	}
	if(sdeg <= -10) {
		sdeg = -90;
		page++;
		if(page > 7) {
			page = 0;
		}
	}
	kdeg = deg - sdeg;
	rq.style.webkitTransition = "all 0.5s linear";
	rq.style.webkitTransform = "translateZ(-50vh) rotateX(" + kdeg + "deg)";
	deg = kdeg
//	console.log(page);
	change();
	setTimeout(function () {
		change_anmation_end();
	},500)
	
}

function change() {
	if(page == 0) {
		oneP[0].style.display = "block";
		twoP[0].style.display = "none";
	}
	if(page == 1) {
		oneP[1].style.display = "block";
		twoP[1].style.display = "none";
		
	}
	if(page == 2) {
		oneP[2].style.display = "block";
		twoP[2].style.display = "none";
	}
	if(page == 3) {
		oneP[3].style.display = "block";
		twoP[3].style.display = "none";
	}
	if(page == 4) {
		twoP[0].style.display = "block";
		oneP[0].style.display = "none";
	}
	if(page == 5) {
		twoP[1].style.display = "block";
		oneP[1].style.display = "none";
	}
	if(page == 6) {
		twoP[2].style.display = "block";
		oneP[2].style.display = "none";
	}
	if(page == 7) {
		twoP[3].style.display = "block";
		oneP[3].style.display = "none";
	}
}


//开启当前页的动画
function change_anmation_star() {
	if(page == 0) {
		one_result_star();
	}
	if(page == 1) {
		two_result_star();
	}
	if(page == 2) {
		three_result_star();
	}
	if(page == 3) {
		four_result_star();
	}
	if(page == 4) {
		five_result_star();
	}
	if(page == 5) {
		six_result_star();
	}
	if(page == 6) {
		seven_result_star();
	}
	if(page == 7) {
		eight_result_star();
	}
}
//关闭所有动画
function change_anmation_end() {
	if(page == 0) {
		two_result_end();
		eight_result_end();
		//解决第八张页面的3D效果副影响
		twoP[3].style.display = "none";
		
	}
	if(page == 1) {
		one_result_end();
		three_result_end();
	}
	if(page == 2) {
		two_result_end();
		four_result_end();
	}
	if(page == 3) {
		three_result_end();
		five_result_end();
	}
	if(page == 4) {
		four_result_end();
		six_result_end();
	}
	if(page == 5) {
		five_result_end();
		seven_result_end();
	}
	if(page == 6) {
		six_result_end();
		eight_result_end();
		//解决第八张页面的3D效果副影响
		twoP[3].style.display = "none";
	}
	if(page == 7) {
		one_result_end ();
		seven_result_end();
		
	}
}

//第一页效果
function one_result_star() {
	theme.style.webkitAnimation = "appear 1.5s 0.8s linear forwards";
	bg.style.webkitAnimation = "suo 1.8s 0.8s linear forwards";
}
function one_result_end () {
	theme.style.webkitAnimation = "";
	bg.style.webkitAnimation = "";
}

//第二页效果
function two_result_star() {
	xian[0].style.webkitAnimation = "chang 1.5s ease-out forwards";
	xian[1].style.webkitAnimation = "chang 1.5s 0.4s ease-out forwards";
	xian[2].style.webkitAnimation = "chang 1.5s 0.6s ease-out forwards";
	grid[0].style.webkitAnimation ="shows 1.5s 0.6s linear forwards";
	grid[1].style.webkitAnimation ="shows 1.5s 0.8s linear forwards";
	grid[2].style.webkitAnimation ="shows 1.5s 0.3s linear forwards";
	grid[3].style.webkitAnimation ="shows 1.5s 0.5s linear forwards";
	grid[4].style.webkitAnimation ="shows 1.5s 0.9s linear forwards";
	grid[5].style.webkitAnimation ="shows 1.5s 1.1s linear forwards";
	grid[6].style.webkitAnimation ="shows 1.5s 1.2s linear forwards";
	grid[7].style.webkitAnimation ="shows 1.5s 1.4s linear forwards";
	leaf[0].style.webkitAnimation ="shows 1.5s 0.4s linear forwards";
	leaf[1].style.webkitAnimation ="shows 1.5s 1.6s linear forwards";
	leaf[2].style.webkitAnimation ="shows 1.5s 1.2s linear forwards";
	leaf[3].style.webkitAnimation ="shows 1.5s 0.8s linear forwards";
}
function two_result_end() {
	xian[0].style.webkitAnimation = "";
	xian[1].style.webkitAnimation = "";
	xian[2].style.webkitAnimation = "";
	grid[0].style.webkitAnimation ="";
	grid[1].style.webkitAnimation ="";
	grid[2].style.webkitAnimation ="";
	grid[3].style.webkitAnimation ="";
	grid[4].style.webkitAnimation ="";
	grid[5].style.webkitAnimation ="";
	grid[6].style.webkitAnimation ="";
	grid[7].style.webkitAnimation ="";
	leaf[0].style.webkitAnimation ="";
	leaf[1].style.webkitAnimation ="";
	leaf[2].style.webkitAnimation ="";
	leaf[3].style.webkitAnimation ="";
}

//第三页效果
function three_result_star () {
	three_text[0].style.webkitAnimation ="three_moveleft 0.8s 1s ease-out forwards";
	three_text[1].style.webkitAnimation ="three_appear 1s 2s linear forwards";
	three_text[2].style.webkitAnimation ="three_appear 1s 1.4s linear forwards";
	three_text[3].style.webkitAnimation ="three_appear 1s 2.5s linear forwards";
	three_moveimg[0].style.webkitAnimation ="three_moveright 0.3s 0.5s linear forwards";
	three_moveimg[1].style.webkitAnimation ="three_tiao 2s 1.3s ease-in-out forwards";
	three_symbol[0].style.webkitAnimation ="three_movebottom1 1s 1s ease-out forwards";
	three_symbol[1].style.webkitAnimation ="three_appear 0.4s 1s linear forwards";
	three_symbol[2].style.webkitAnimation ="three_movebottom2 1s 2s ease-out forwards";
	three_symbol[3].style.webkitAnimation ="three_xian1 0.8s 0.6s ease-out forwards";
	three_symbol[4].style.webkitAnimation ="three_xian2 1s 0.5s ease-out forwards";
}
function three_result_end () {
	three_text[0].style.webkitAnimation ="";
	three_text[1].style.webkitAnimation ="";
	three_text[2].style.webkitAnimation ="";
	three_text[3].style.webkitAnimation ="";
	three_moveimg[0].style.webkitAnimation ="";
	three_moveimg[1].style.webkitAnimation ="";
	three_symbol[0].style.webkitAnimation ="";
	three_symbol[1].style.webkitAnimation ="";
	three_symbol[2].style.webkitAnimation ="";
	three_symbol[3].style.webkitAnimation ="";
	three_symbol[4].style.webkitAnimation ="";	
}

//第四页效果
function four_result_star () {
	four_img[0].style.webkitAnimation ="four_right 0.8s 0.5s linear forwards";
	four_img[1].style.webkitAnimation ="four_left 0.8s 0.5s linear forwards";
	four_text[0].style.webkitAnimation="four_bottom 1s 0.5s ease-in-out forwards";
	four_text[1].style.webkitAnimation="zhuan 3s ease-in-out forwards";
	four_text[2].style.webkitAnimation="four_top 1s 0.5s ease-in-out forwards";
}
function four_result_end () {
	four_img[0].style.webkitAnimation ="";
	four_img[1].style.webkitAnimation ="";
	four_text[0].style.webkitAnimation="";
	four_text[1].style.webkitAnimation="";
	four_text[2].style.webkitAnimation="";
}
//第五页效果
function  five_result_star () {
	five_img[0].style.webkitAnimation="five_left 0.5s 0.2s ease-in forwards";
	five_img[1].style.webkitAnimation="five_top 0.5s 0.2s ease-in forwards";
	five_text[0].style.webkitAnimation="five_xian 1.5s 0.8s linear forwards";
	five_text[1].style.webkitAnimation="five_xian 1.5s 1.3s linear forwards";
}
function  five_result_end () {
	five_img[0].style.webkitAnimation="";
	five_img[1].style.webkitAnimation="";
	five_text[0].style.webkitAnimation="";
	five_text[1].style.webkitAnimation="";
}
//第六页效果
function six_result_star () {
	six_img[0].style.webkitAnimation="six_big 0.5s linear forwards";
	six_img[1].style.webkitAnimation="six_tiao 0.5s 1s linear forwards";
	six_img[2].style.webkitAnimation="six_xian 0.5s 1.6s linear forwards";
	six_img[3].style.webkitAnimation="six_leaf_right 0.8s 0.2s ease-out forwards";
	six_img[4].style.webkitAnimation="six_leaf_left 0.8s 0.2s ease-out forwards";
	six_img[5].style.webkitAnimation="six_big 0.5s linear forwards";
	six_text[0].style.webkitAnimation="six_bottom 0.8s 2s linear forwards";
	six_text[1].style.webkitAnimation="six_jian_bottom 0.5s 0.5s linear forwards";
	six_text[2].style.webkitAnimation="six_big 0.3s 1.2s linear forwards";
	six_text[3].style.webkitAnimation="six_left 0.5s 1.8s ease-out forwards";
}
function six_result_end () {
	six_img[0].style.webkitAnimation="";
	six_img[1].style.webkitAnimation="";
	six_img[2].style.webkitAnimation="";
	six_img[3].style.webkitAnimation="";
	six_img[4].style.webkitAnimation="";
	six_img[5].style.webkitAnimation="";
	six_text[0].style.webkitAnimation="";
	six_text[1].style.webkitAnimation="";
	six_text[2].style.webkitAnimation="";
	six_text[3].style.webkitAnimation="";
}
//第七页效果
function seven_result_star () {
	seven_img[0].style.webkitAnimation="seven_img_one 3s ease-out forwards";
	seven_img[1].style.webkitAnimation="seven_img_two 2.3s ease-in-out forwards,seven_img_two 2.3s 2.6s ease-in-out forwards";
	seven_text[0].style.webkitAnimation="seven_text 1.5s ease-out forwards";
}
function seven_result_end () {
	seven_img[0].style.webkitAnimation="";
	seven_img[1].style.webkitAnimation="";
	seven_text[0].style.webkitAnimation="";
}
//第八页效果
function eight_result_star () {
	cover_bg[0].style.webkitAnimation="cover_bg 1s ease-in-out forwards";
	eight_text[0].style.webkitAnimation="eight_one 0.7s 1s ease-out forwards";
	eight_text[1].style.webkitAnimation="eight_two 1s 1.5s ease-out forwards";
	eight_text[2].style.webkitAnimation="eight_three 1s 2.3s linear forwards";
}
function eight_result_end () {
	cover_bg[0].style.webkitAnimation="";
	eight_text[0].style.webkitAnimation="";
	eight_text[1].style.webkitAnimation="";
	eight_text[2].style.webkitAnimation="";
}