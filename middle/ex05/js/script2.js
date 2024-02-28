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
	function moveSlider(index){
		var willMoveLeft;
		var willMoveTop;
		/* if (index == 0){ 
			willMoveLeft = -(index * 600);
			willMoveTop  = -(0 * 400);}
		else if (index == 1){
			willMoveLeft = -(index * 600);
			willMoveTop  = -(0 * 400);}
		else if (index == 2){
			willMoveLeft = -(index * 600);
			willMoveTop  = -(0 * 400);}
		else if (index == 3){
			willMoveLeft = -(0 * 600);
			willMoveTop  = -(1 * 400);}
		else if (index == 4){
			willMoveLeft = -(1 * 600);
			willMoveTop  = -(1 * 400);}
		else  {
			willMoveLeft = -(2 * 600);
			willMoveTop  = -(1 * 400);}
		} */
		var willMoveLeft = -(index%3*600);
		var willMoveTop = Math.floor(index/3)*-400;	
		$('.slider_panel').animate({ left: willMoveLeft }, '500');
		$('.slider_panel').animate({ top: willMoveTop }, '500');		
		$('.control_button[data-index='+index+']').addClass('active');
		$('.control_button[data-index!='+index+']').removeClass('active');
		$('.slider_text[data-index='+index+']').show().animate({left: 20},500);
		$('.slider_text[data-index!='+index+']').hide().animate({left: -300},500);
	};
	size = $('.slider_text').size();
	var randomNumber = Math.round(Math.random()*(size-1));
	moveSlider(randomNumber);
});































