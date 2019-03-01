function qiHuan(oneimg,thumbsone){
	let picture = document.querySelectorAll(oneimg)
let suoluetu = document.querySelectorAll(thumbsone)
suoluetu.forEach(function(val,index){
	val.onmouseover=function(){
		suoluetu.forEach(function(val,key){
			picture[key].style.opacity="0"
			suoluetu[key].style.borderColor="#e0e0e0"
		})
		picture[index].style.opacity="1"
		suoluetu[index].style.borderColor="#ff6700"
	}
})

}
qiHuan(".one img",".thumbs .one")
qiHuan(".two img",".thumbs .two")
qiHuan(".three img",".thumbs .three")
qiHuan(".four img",".thumbs .four")
qiHuan(".five img",".thumbs .five")
qiHuan(".six img",".thumbs .six")
qiHuan(".seven img",".thumbs .seven")
qiHuan(".eight img",".thumbs .eight")
qiHuan(".nine img",".thumbs .nine")
//轮播图
let lunbo = document.querySelector(".xm-couse")
let btn = document.querySelectorAll(".quan1")

btn.forEach(function(val,key){
	val.onclick = function(){
		btn.forEach(function(val,index){
			btn[index].classList.remove("active")
		})
		btn[key].classList.add("active")
		lunbo.style.left=key*-1226+"px"
	}
})
