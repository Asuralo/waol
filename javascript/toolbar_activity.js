// Swap pictures of buttons.
$(document).ready(function(){
	$("img.toolbar-image").click(function(){
		if($(this).attr("class") == "toolbar-image"){
			this.src = this.src.replace("_not_active","_active");
		}
		else{
			this.src = this.src.replace("_active","_not_active");
		}
		// Add or remove one or more classes from each element in the set of matched elements.
		$(this).toggleClass(true);
	});
});

// about "Setting" dialog
$(document).ready(function(){
	// Create new dialog by clicking "Setting".
	$("div.setting").click(function(){
		$("div.modal").css('display','block');
		//$("div.blur").css('display','block');
		$("div.LUPOSDATE_LAYOUT").css('-webkit-filter','blur(5px)');
	});

	// Close the dialog
	$(".close").click(function(){
		$("div.modal").css('display','none');
		//$("div.blur").css('display','none');
		$("div.LUPOSDATE_LAYOUT").css('-webkit-filter','blur(0px)');
	});
});