
	
let seeList =document.querySelectorAll(".box-hd .one span");
let sel = document.querySelectorAll(".onelf .box-by")
seeList.forEach(function(val,index){
	val.onclick=function(){
		sel.forEach(function(ele,key){
			ele.classList.remove("one-first")
			seeList[key].classList.remove("active")
		})
		sel[index].classList.add("one-first")
		seeList[index].classList.add("active")
	}
})

//闪购
let zuoJian = document.querySelector(".more-lefe")
let youJian = document.querySelector(".more-right")
let liS = document.querySelectorAll(".fpb .btrig .zhuan li")
let big = document.querySelector(".fpb .btrig .zhuan")
console.log(big)
let n = 0;
let size =liS.length-4;
function move(){
	if(n>size){
		n=size;
	}else if(n<0){
		n=0;
	}
	big.style.left=-248*n+"px";
}
youJian.onclick=function(){
	n=n+4;
	move();
}
zuoJian.onclick=function(){
	n=n-4;
	move();
}


//轮播图
let box =document.querySelector(".big-box-picture")
let banner =document.querySelectorAll(".big-box-picture li")
let leftn =document.querySelector(".left-arrow")
let rightn =document.querySelector(".right-arrow")
let yuans = document.querySelectorAll(".dian div")
let bna = 0;
let bnSize = yuans.length-1;
function bnMove(){
	if(bna>bnSize){
		bna=0;
	}else if(bna<0){
		bna=bnSize;
	}
	banner.forEach(function(val,index){
		val.classList.remove("active")
		yuans[index].classList.remove("small")
	})
	banner[bna].classList.add("active")
	yuans[bna].classList.add("small")
}
rightn.onclick=function(){
	bna++;
	bnMove();
}
leftn.onclick=function(){
	bna--;
	bnMove();
}
yuans.forEach(function(ele,key){
	ele.onclick=function(){
		yuans.forEach(function(a){
			a.classList.remove("dian")
		})
		yuans[key].classList.add("dian")
		bna=key;
		bnMove();
  }
})
box.onmouseover = function(){
	clearInterval(time)
}	
let time = setInterval(function(){
bna++;
bnMove();
},2000)
box.onmouseout = function(){
   time = setInterval(function(){
		bna++;
		bnMove();
},2000)
}



// 返回顶部
let max = document.querySelector(".big-fan");
let retop = document.querySelector(".return");
let flshop = document.querySelector(".Flash-purchase");
let pinmu = document.documentElement;
window.onscroll = function(){
	if(pinmu.scrollTop > flshop.offsetTop){
		retop.style.display = "block";
	}else{
		retop.style.display = "none";
	}
	retop.onclick = function(){
		pinmu.scrollTop = 0;
	}
	var docWidth = document.body.clientWidth;
	if(docWidth>=1400&& pinmu.scrollTop > flshop.offsetTop){
		max.style.display = "block";
	}else{
		max.style.display = "none";
	}
	max.onclick = function(){
		pinmu.scrollTop = 0;
	}
}

//搜索
let keys = document.querySelector("#keyList")
let searchText = document.querySelector("#searchText")
let searchHotWord = document.querySelector("#searchHotWord")
let sousuoBox =document.querySelector("#box")
let zuoxian = document.querySelector("#boxS")
console.log(keys)
searchText.onfocus =function(){
	searchHotWord.style.display="none"
	keys.style.display="block"
	sousuoBox.style.borderColor="#ff6700"
	zuoxian.style.borderColor = "#ff6700"
} 
searchText.onblur =function(){
	searchHotWord.style.display="block"
	keys.style.display="none"
	sousuoBox.style.borderColor="#eeeeee"
	zuoxian.style.borderColor = "#eeeeee"
} 



// neirong
function lbt(midul,rightbtn1,leftbtn1,dian){
		let bannertu = document.querySelector(midul);
		let rightbtn = document.querySelector(rightbtn1);
		let leftbtn = document.querySelector(leftbtn1);
		let yuan = document.querySelectorAll(dian);
		let num = yuan.length-1
		let nt = 0;
			rightbtn.onclick = function(){
			nt++;
			movea();	
		}
			leftbtn.onclick = function(){
			nt--;
			movea();	
		}
		for(let i = 0;i<=num;i++){
			yuan[i].onclick = function(){
				nt=i;
				move()
			}
		}
		let movea = function(){
			
			if(n<0){
				nt=0;
				return;
			}else if(nt>num){
				nt=num;
				return;
			}else{
			bannertu.style.left = -nt * 296 + "px"
		   }
		   yuan.forEach(function(val){
			   val.classList.remove("xuanzhong")
			   yuan[n].classList.add("xuanzhong")
		   })
		}
	}
lbt(".lang-box",".right-jiantou",".left-jiantou",".pointer div")

	
	
	
	
	
	
