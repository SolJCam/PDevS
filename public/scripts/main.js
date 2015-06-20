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
			$('.rtd').css({"width": "350px", "height": "380px", "top": "80px", "float": "right"});
			$('.abt-txt').css({"position":"relative", "margin-left":"430px", "right":"200px", "width": "600px", "top":"30px"});
			$('.skills').css({"float":"left", "width":"530px", "height":"330px"});
			$('.xp').css({"float":"right", "width":"530px", "height":"330px"});



		}else{
			var scrolled = $(window).scrollTop();
			$('.parallax').css('top', 0 - scrolled);

			$('.propics').css("width", "400px")
			$('.ul').css("margin", "0px")
			$('.abt').css("width", "410px");
			$('.se').css({"width":"410px","height":"700px"});
			$('.p').css("width", "410px");
			$('.skills').css({"margin":"0px"});
			$('.nav-titles').css("width", "340px")		

		}
	});
})

function toggleBtnsOrPills(){
	if (window.matchMedia('(min-width:900px)').matches){
		$('.btn-info').toggle(function(e){
		});
	}else {
		$('li[role=button]').toggle();
	}
}