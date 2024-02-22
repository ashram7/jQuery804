$(function(){
	$('.banner li').each(function(){
		var box = $(this);
		box.hover(
			function(){
				box.find('>a').stop(true,true).animate({'margin-left':'75px'},500);
			},
			function(){
				box.find('>a').stop(true,true).animate({'margin-left':'0px'},500);
			}
		); 
	});


});



























