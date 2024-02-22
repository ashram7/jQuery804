$(function(){
	// 그 내용을 멋지게 요약해서 넣어라!!!
	var guideClass = 'guide';
	$('.guideText').each(function(){
		var guideText = this.defaultValue;
		var element = $(this);
		element.focus(function(){
			if(element.val()===guideText){
				element.val('');
				element.removeClass(guideClass);
			}
		}).blur(function(){
			if(element.val()===''){
				element.val(guideText);
				element.addClass(guideClass);
			}
		});
		if(element.val()===guideText){
			element.addClass(guideClass);
		}		
	});
});