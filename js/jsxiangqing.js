let lis = document.querySelectorAll(".img-left li")
let zuoJi = document.querySelector(".banner-btn1")
let youJi = document.querySelector(".banner-btn2")
let lunboxian = document.querySelectorAll(".banner-point div div")
let stop = document.querySelector(".img-icon")
let n = 0;
let size = lunboxian.length -1
function move(){
	if(n>size){
		n = 0;
	}else if(n<0){
		n=size
	}
	lis.forEach(function(val,index){
		val.classList.remove("active")
		lunboxian[index].classList.remove("dongline")
	})
	lis[n].classList.add("active")
	lunboxian[n].classList.add("dongline")
}
youJi.onclick = function(){
	n++;
	move()
}
zuoJi.onclick = function(){
	n--;
	move()
}
lunboxian.forEach(function(val,index){
	val.onclick = function(){
		lunboxian.forEach(function(a){
			a.classList.remove("dongline")
		})
		lunboxian[index].classList.add("dongline")
		n=index
		move()
	}
})
let time =setInterval(function(){
	n++;
	move();
},2000)
stop.onmouseover = function(){
	clearInterval(time)
}
stop.onmouseout = function(){
	time =setInterval(function(){
		n++;
		move();
	},2000)
}
