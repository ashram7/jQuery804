﻿$(function(){
	var current = 0;
	var banner = $('#wrapper li');
	var stop;
	
	function timer(){
		stop = setInterval(function(){
			var prev = banner.eq(current);
			move(prev,'0%','-100%');
			//move(prev,'100%','0%');
			current++;
			if(current==banner.size()) current=0;
			var next = banner.eq(current);
			move(next,'100%','0%');
		},1000);		
	}
	
	banner.hover(
		function(){
			clearInterval(stop);
		},
		function(){
			timer();
		}
	);

	function move(tg,start,end){
		tg.css('left',start).stop().animate({left:end},{duration:500, ease:'easeOutCubic'});
	}
});