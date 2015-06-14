console.log("scripts are being read");

$(document).ready(function(){

	$('h1').css("margin", "0px");
	$('h2').css("color", "#CCCCCC");
	$('h5').css("color", "#7ADEFF");
	bigButton();

	$(window).on('scroll', function(){

		var scrolled = $(window).scrollTop();

		$('.parallax').css('top', 0 - scrolled);
	});
})

function bigButton(){
	if ($('.one').css("background-color") == "rgb(255, 255, 255)"){
		// $('button').removeClass('btn-xs');
		// $('button').addClass('btn-default');
		$('button').toggle();
	}else {
		$('li[role=button]').toggle();
	}
}