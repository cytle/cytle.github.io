"use strict";

function random( min, max ) {
	return Math.random() * ( max - min ) + min;
}





/**
* is_boom 检查两个对象是否碰撞
*******************************
* @param obj m 被撞对象
* @param obj n 子弹对象
*******************************
* @return boolean 是否碰撞
**/
/* 
* TODO 依照轨迹再判断
*/ 
function is_boom(n,m){
	var zdLine=getObjLine(n);
	for (var i = m.sixLine.length - 1; i >= 0; i--) {
		if(intersectLineSegments(zdLine,m.sixLine[i]))
			return true;
	};
	return false;
}
function getObjLine(obj){
	return getLine(obj.lx,obj.ly,obj.x,obj.y);
}
function getLine(ax,ay,bx,by){
	return {a:getPoint(ax,ay),b:getPoint(bx,by)};
}
function getPoint(x,y){
	return {x:x,y:y};
}
/**
	m:ax>bx?1:0
	n:ay>by?1:0
	排除	条件 		另一个矩形		编号	
	Aa 		mn			Db				0,3  
	Ba		(1-m)n 		Cb				1,2  
	Ca 		m(1-n)		Bb 				2,1  
	Da 		(1-m)(1-n) 	Ab 				3,0  
	*/
	function getSixLine(ax,ay,bx,by,w,h){
		var m=ax>bx?1:2;
		var n=ay>by?-1:1;
		
		var pR=[m+n,3-m-n];
		var pointR=[
		[
		getPoint(ax,ay),		getPoint(ax+w,ay),
		getPoint(ax,ay+h),		getPoint(ax+w,ay+h),
		],	/*a矩形四点*/
		[
		getPoint(bx,by), 		getPoint(bx+w,by),
		getPoint(bx,by+h),		getPoint(bx+w,by+h),
		]	/*b矩形四点*/
		
		]
		var LineArr=[];
		for (var i = 0; i 