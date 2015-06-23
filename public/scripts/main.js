console.log("scripts are being read");

$(document).ready(function(){

	$('h2').css("color", "#CCCCCC");

	$(function () {
  		$('[data-toggle="tooltip"]').tooltip()
	})

	if (window.matchMedia('(min-width:900px)').matches) {

		$('.btn-info').toggle();

		$('#A').click(function(e){
			e.preventDefault()
			window.scrollTo(0, 361)
		})

		$('#S').click(function(e){
			e.preventDefault()
			window.scrollTo(0, 520)
		})

		$('#P').click(function(e){
			e.preventDefault()
			window.scrollTo(0, 788)
		})

		$('#C').click(function(e){
			e.preventDefault()
			window.scrollTo(0, 1392)
		})

		$(".two").css("height", "2780px");
		$(".bg-con").css("height", "525px");
	} else {

		$('li[role=button]').toggle();

		$('#A').click(function(e){
			e.preventDefault()
			window.scrollTo(0, 361)
		})

		$('#S').click(function(e){
			e.preventDefault()
			window.scrollTo(0, 520)
		})

		$('#P').click(function(e){
			e.preventDefault()
			window.scrollTo(0, 788)
		})

		$('#C').click(function(e){
			e.preventDefault()
			window.scrollTo(0, 1392)
		})

		$('.ul').css("margin", "0px");	
	}


	$(window).on('scroll', function(){

		if (window.matchMedia('(min-width:900px)').matches){

			var scrolled = $(window).scrollTop() + 300;
			$('.parallax').css('top', 0 - scrolled);

		}else{
			var scrolled = $(window).scrollTop();
			$('.parallax').css('top', 0 - scrolled);

		}
	});

})