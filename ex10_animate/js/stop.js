﻿$(function(){
	$('button').click(function(){
		var html = $(this).html();
		var evalText = "$('div')."+html;
		// evalText = $('div').stop(true)
		eval(evalText);
	});
	
	setInterval(function(){
		$('div').animate({left:'800'},2000).animate({left:'0'},2000);
	},5000);
});