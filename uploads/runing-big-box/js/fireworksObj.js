"use strict";
function fireworksConsole(){
	var o=this;
	var fireworksArr=[];
	var substancesArr=[];
	function fireworkRun(){
		var tempMap=fireworksArr;
		fireworksArr=[];
		var temp=null;
		while(temp=tempMap.shift()){
			if(temp.run()){
				//console.log(substancesArr.length);
				temp.fireOpen(substancesArr);
			}else{
				fireworksArr.push(temp);
			}
		}
	};
	function substancesRun(){
		var tempMap=substancesArr;
		substancesArr=[];
		var temp=null;
		while(temp=tempMap.shift()){
			if(!temp.run()){
				substancesArr.push(temp);
			}
		}
	};
	o.init=function(){
		fireworksArr=[];
		substancesArr=[];
	}
	o.run=function(){
		fireworkRun();
		substancesRun();

	};
	o.fire=function(x,y,w,h,fireHeight){
		fireworksArr.push(new fireworksObj(x,y,w,h,fireHeight));
	}
	
}
function fireworksObj(x,y,w,h,fireHeight){
	var  o=this;

	Obj.call(o,x,game.ch-y,w,h);
	fireHeight=game.ch-fireHeight;
	var yspeed=-g*20;
	var og=g/1500; //重力
	function fireUp(){
		o.y+=yspeed;
		o.rect();
		yspeed+=og;
		return yspeed>=0?true:false; //速度向下，绽放烟火
	}
	o.run=function(){

		//超过指定，绽放烟火
		if(o.y<fireheight){ return="" true;="" }else{="" fireup();="" }="" o.fireopen="function(substancesArr){" todo="" 烟火成分="" for="" (var="" i="0;" <="360;" i+="30)" {="" timeout="0;" timeout+="4)" substancesarr.push(new="" substancesobj(o.x,o.y,-g*(16-timeout),i,timeout*100));="" substancesobj(o.x,o.y,-g*(14-timeout),i+15,(timeout+2)*100));="" };="" **="" *="" @param="" float="" x="" 初始x坐标="" y="" speed="" 初始速度="" angle="" 初始角度（角度）="" int="" 延迟时间（毫秒）="" function="" substancesobj(x,y,speed,angle,timeout){="" var="" o="this;" obj.call(o,x,y,3,3);="" 0.017453293="" （2pi="" 360）即可转换为弧度="" _run="1;" hue="0;" _timeout="1-timeout/2000;" xspeed="speed*Math.cos(angle);" yspeed="speed*Math.sin(angle);" og="g/6;" 重力="" oog="g/50;" o.run="function(){" _run-="runTime/2000;" if(_run="">_timeout){
			return false;
		}
		if(_run<=0){ return="" true;="" }="" o.x+="xspeed;" o.y+="yspeed;" o.log();="" o.rect(3,'hsl('+(hue+="2)+',100%,'+(_run*100+20)+'%)');" yspeed+="og;" xspeed*="0.99;" 边缘检测="" if(o.x<-o.w||o.y<-o.h||o.x="">game.cw||o.y>game.ch){
			return true;
		}else{
			return false;
		}
	}
}</=0){></fireheight){>