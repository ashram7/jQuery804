$(function(){
	$('.box div').each(function(){
		var box = $(this);
		
		box.hover(
			function(){
				box.find('>a').stop(true, true).animate({'margin-top':'-294px'},500);
			},
			function(){
				box.find('>a').stop(true, true).animate({'margin-top':'0px'},500);
			}
		);		
	});

});



























