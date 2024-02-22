$(function(){
	// 그 내용을 멋지게 요약해서 넣어라!!!
	var guideClass = 'guide';
	var idText = $('#userId');
	var paaaText = $('#userPWD');
	idText.each(function(){
		var guideText = this.defaultValue;
		idText.focus(function(){
			if(idText.val()===guideText){
				idText.val('');
				idText.removeClass(guideClass);
			}
		});
		idText.blur(function(){
			if(idText.val()===''){
				idText.val(guideText);
				idText.addClass(guideClass);
			}
		});
		if(idText.val()===guideText){
			idText.addClass(guideClass);
		}		
	});
	paaaText.each(function(){
		var guideText = this.defaultValue;
		paaaText.focus(function(){
			if(paaaText.val()===guideText){
				paaaText.val('');
				paaaText.removeClass(guideClass);
				paaaText.attr('type','password');
			}
		});
		paaaText.blur(function(){
			if(paaaText.val()===''){
				paaaText.val(guideText);
				paaaText.addClass(guideClass);
				paaaText.attr('type','text');
			}
		});
		if(paaaText.val()===guideText){
			paaaText.addClass(guideClass);
		}		
	});
	
});