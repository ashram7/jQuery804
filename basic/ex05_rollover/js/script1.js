$(function(){
	$('.rollover').each(function(){
		//a.get(2)
		var a = $(this);
		var img = a.find('img');
		var src_off = img.attr('src');
		//src_off = images/menu01_off.png
		var src_on = src_off.replace('_off','_on');
		a.hover(
			function(){
				img.attr('src',src_on);
			},
			function(){
				img.attr('src',src_off);
			}
		);
	});
});
























