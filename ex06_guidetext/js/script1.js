$(function(){
	$('.guideText').each(function(){
		var giudeText = this.defaultValue;
		// giudeText="이름을 입력해 주세요"
		var element = $(this);
		element.focus(function(){
			if(element.val()===giudeText){
				element.val('');
				element.removeClass('guide');
			}
		});
	});
});