console.log("scripts are being read");

$(document).ready(function(){

	$(function () {
  		$('[data-toggle="tooltip"]').tooltip()
	})

	$('#submit').click(function(e){
		if($('#inputName').val()==""){
			alert("Please provide a name");
			e.preventDefault();
		}else if($('#inputEmail').val()==""){
			e.preventDefault();
			alert("Please provide an email");
		}else if($('#inputSubject').val()==""){
			e.preventDefault();
			alert("Please provide a subject");	
		}else if($('#inputMessage').val()==""){
			e.preventDefault()
			alert("Please provide a message")
		}else{
			var email = "mailto:scameron110@gmail.com?from="+$('#inputEmail').val()+"&subject="+$('#inputSubject').val()+"&body="+$('#inputMessage').val()
			var href = email.replace(/ /g, "%20")
			console.log(href)
			$("#submit").attr("href", href)
		}
	})

	if (window.matchMedia('(min-width:900px)').matches) {

		$('.btn-info').toggle();

		$('#A').click(function(e){
			e.preventDefault()
			window.scrollTo(0, 355)
		})

		$('#S').click(function(e){
			e.preventDefault()
			window.scrollTo(0, 520)
		})

		$('#P').click(function(e){
			e.preventDefault()
			window.scrollTo(0, 778)
		})

		$('#C').click(function(e){
			e.preventDefault()
			window.scrollTo(0, 1392)
		})

	} else {

		$('li[role=button]').toggle();

		$('#Ab').click(function(){			
			window.scrollTo(0, 201)
		})

		$('#SE').click(function(){			
			window.scrollTo(0, 451)
		})

		$('#Pj').click(function(){			
			window.scrollTo(0, 802)
		})

		$('#Cn').click(function(){			
			window.scrollTo(0, 1700)
		})
// For some reason doesn't work when placed in stylesheet
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