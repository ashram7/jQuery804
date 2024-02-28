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
		},1000);
	};
	timer();
	function moveSlider(index){
		var willMoveLeft;
		var willMoveTop;
		var willMoveLeft = -(index%3*panel_width);
		var willMoveTop = Math.floor(index/3)*-panel_height;	
		$('.slider_panel').animate({ left: willMoveLeft }, '500');
		$('.slider_panel').animate({ top: willMoveTop }, '500');		
		$('.control_button[data-index='+index+']').addClass('active');
		$('.control_button[data-index!='+index+']').removeClass('active');
		$('.slider_text[data-index='+index+']').show().animate({left: 20},500);
		$('.slider_text[data-index!='+index+']').hide().animate({left: -300},500);
		randomNumber = index;
	};
	var size = $('.slider_text').size();
	var randomNumber = Math.round(Math.random()*(size-1));
	moveSlider(randomNumber);
});































