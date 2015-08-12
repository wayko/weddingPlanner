$(document).ready(function(){
	var flowerHeight = $(".wrapper").height() + 300;
	alert(flowerHeight);
	
	$(".flowers").ready(function(){
		
		$(".flowers").css("height", flowerHeight);
	});
	
});