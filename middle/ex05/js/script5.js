jQuery(document).ready(function(){
	var panel_width=$('.slider_panel > img').width();
	var panel_height=$('.slider_panel > img').height();
	$('.slider_text').css('left',-300).each(function(index){
		$(this).attr('data-index',index);
	});	
	$('.control_button').each(function(index){
		$(this).attr('data-index',index);
	}).click(function(){
		var index = $(this).attr('data-index');
		moveSlider(index);
	});	
	var setIntervalId;
	function timer(){
		setIntervalId = setInterval(function(){
			randomNumber++;
			if(randomNumber==(size)){randomNumber=0;}
			moveSlider(randomNumber);
			//$('.control_button').eq(randomNumber).trigger('click');
		},2000);
	};
	timer();
	$('.animation_canvas').hover(
		function(){
			clearInterval(setIntervalId);
		},
		function(){
			timer();
		}
	);	
	function moveSlider(index){
		var willMoveLeft;
		var willMoveTop;
		var willMoveLeft = -(index%3*panel_width);
		var willMoveTop = Math.floor(index/3)*-panel_height;	
		$('.slider_panel').stop().animate({ left: willMoveLeft }, '200').animate({ top: willMoveTop }, '500');		
		$('.control_button[data-index='+index+']').addClass('active');
		$('.control_button[data-index!='+index+']').removeClass('active');
		$('.slider_text[data-index='+index+']').stop().show().animate({left: 20},200);
		$('.slider_text[data-index!='+index+']').stop().hide().animate({left: -300},200);
		randomNumber = index;
	};
	
	$('.left').click(function(){
		randomNumber--;
		if(randomNumber<0){randomNumber=$('.control_button').size()-1}
		$('.control_button').eq(randomNumber).trigger('click');		
	});
	$('.right').click(function(){
		randomNumber++;
		if(randomNumber==$('.control_button').size()){randomNumber=0}
		$('.control_button').eq(randomNumber).trigger('click');		
	});
	var size = $('.slider_text').size();
	var randomNumber = Math.round(Math.random()*(size-1));
	moveSlider(randomNumber);
});































