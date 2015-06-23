console.log("scripts are being read");

$(document).ready(function(){

	$('h2').css("color", "#CCCCCC");

	toggleBtnsOrPills();

	$(window).on('scroll', function(){

		if (window.matchMedia('(min-width:900px)').matches){

			var scrolled = $(window).scrollTop() + 300;
			$('.parallax').css('top', 0 - scrolled);

			$(".two").css("height", "2780px");
			$(".bg-con").css("height", "510px")

		}else{
			var scrolled = $(window).scrollTop();
			$('.parallax').css('top', 0 - scrolled);

			$('.ul').css("margin", "0px")	

		}
	});
})

function toggleBtnsOrPills(){
	if (window.matchMedia('(min-width:900px)').matches){
		$('.btn-info').toggle();
	}else {
		$('li[role=button]').toggle();
	}
}