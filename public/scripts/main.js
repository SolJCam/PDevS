console.log("scripts are being read");

$(document).ready(function(){

	$('h1').css("margin", "0px");
	$('h2').css("color", "#CCCCCC");
	$('h5').css("color", "#7ADEFF");
	// $('.parallax').css("margin-top", "0px");

	toggleBtnsOrPills();

	$(window).on('scroll', function(){

		if (window.matchMedia('(min-width:900px)').matches){

			var scrolled = $(window).scrollTop() + 300;
			$('.parallax').css('top', 0 - scrolled);

			$('.abt').css("width", "1100px");
			$('.se').css("width", "1100px");
			$('.p').css("width", "1100px");

		}else{
			var scrolled = $(window).scrollTop();
			$('.parallax').css('top', 0 - scrolled);

			$('.abt').css("width", "410px");
			$('.se').css("width", "410px");
			$('.p').css("width", "410px");
		}


	});
})

function toggleBtnsOrPills(){
	if (window.matchMedia('(min-width:900px)').matches){
		// $('button').addClass('btn-default');
		$('.btn-info').toggle(function(e){
		});
	}else {
		$('li[role=button]').toggle();
	}
}