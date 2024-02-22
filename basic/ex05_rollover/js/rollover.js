$.fn.rollover = function(options){
	options = $.extend({
		off : '_off', on:'_on'
	},options);
	
	this.each(function(){
		var a = $(this);
		var img = a.find('img');
		var src_off = img.attr('src');
		var src_on = src_off.replace(options.off,options.on);

		$('<img />').attr('src', src_on);

		a.on('mouseenter focus', function(){
			img.attr('src',src_on);
		}).on('mouseleave blur', function(){
			img.attr('src',src_off);
		});
	});
	return this;
};
























