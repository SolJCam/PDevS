console.log("scripts are being read");

$(window).load(function(){
  $('.image').fadeIn(1000);
  $('.me').fadeIn(1000);
})

$(document).ready(function(){

  if ($(".p4").css("display")=="none"){
    $(".parallax").css("height","3975px");
    $(".bg-con").css("top","2650px");
    $(".email").css("top","-2000px");
    $(".follow").css("top","-2015px");
    $("#cr").css("top", "-2030px");
  } else {
    $(".parallax").css("height","4665px");
    $(".bg-con").css("top","3340px");
    $(".email").css("top","-2680px");
    $(".follow").css("top","-2700px");
    $("#cr").css("top", "-2710px");
  }

  $(function () {
      $('[data-toggle="tooltip"]').tooltip()
  })

  $('#submit').click(function(e){
    //debugger
    console.log("It's hittin'");
    if($('#inputName').val()==""){
      e.preventDefault();
      alert("Please provide a name");
      $("#inputName").css("border-color","red")
    }else if($('#inputEmail').val()==""){
      e.preventDefault();
      $("#inputEmail").css("border-color","red")
      alert("Please provide an email");
    }else if($('#inputSubject').val()==""){
      e.preventDefault();
      $("#inputSubject").css("border-color","red")
      alert("Please provide a subject");
    }else if($('#inputMessage').val()==""){
      e.preventDefault()
      $("#inputMessage").css("border-color","red")
      alert("Please provide a message")
    }else{
      // debugger
      $("#e-send").css("display","inline");
      var email = "mailto:scameron110@gmail.com?subject="+$('#inputSubject').val()+"&body="+"<"+$('#inputName').val()+">"+"<"+$('#inputEmail').val()+">"+$('#inputMessage').val()
      var href = email.replace(/ /g, "%20")
      console.log(href)
      $("#e-send").attr("href", href);
      $("#e-send")[0].click(()=>{
        console.log("It's hittin'");
      });
      $("#e-send").css("display","hidden");
    }
  })
 //style="display:hidden;"
  if (window.matchMedia('(min-width:992px)').matches) {

    $('.btn-info').toggle();

    $(".image").attr("class", "center-block image");
    $(".form-group").attr("class", "form-group center-block");
    $("#submit").attr("class", "center-block");

    if ($(".p4").css("display")!="none"){
      $(".p4").css("top", "735px");
      $(".bg-con").css("top","3790px");
      $(".parallax").css("height","4080px");
      $(".email").css("top","-2950px");
      $(".follow").css("top","-2960px");
      $("#cr").css("top", "530px");
    }else {
      $(".parallax").css("height","3400px");
      $(".bg-con").css("top","3100px");
      $(".email").css("top","-2400px");
      $(".follow").css("top","-2410px");
      $("#cr").css("top", "540px");
    }

    $('#A').click(function(e){
      e.preventDefault();
      $('html,body').animate({scrollTop:223}, 215);
    })
    $('#S').click(function(e){
      e.preventDefault();
      remove()
      $('html,body').animate({scrollTop:534}, 250);
    })
    $('#P').click(function(e){
      e.preventDefault();
      // hard-coding coordinates NOT a good idea
      $('html,body').animate({scrollTop:833}, 300);
    })
    $('#C').click(function(e){
      e.preventDefault();
      // this would be the proper way to do this were it not for the effects of parallax scrolling, minus the '- 1900'
      remove()
      $('html,body').animate({scrollTop:$(this.hash).offset().top - 1900}, 500);
    })

  } else if (window.matchMedia('(min-width:414px) and (max-width:767px)').matches) {

    $('li[role=button]').toggle();

    $('#Ab').click(function(){
      $('html,body').animate({scrollTop:370}, 215);
    })

    $('#SE').click(function(){
      $('html,body').animate({scrollTop:577}, 215);
    })

    $('#Pj').click(function(){
      $('html,body').animate({scrollTop:893}, 215);
    })

    $('#Cn').click(function(){
      $('html,body').animate({scrollTop:1986}, 215);
    })

    if ($(".p4").css("display")=="none"){
      $(".parallax").css("height","3120px");
      $(".bg-con").css("top","2075px");
      $(".email").css("top","-2010px");
      $(".follow").css("top","-2010px");
      $("#cr").css("top", "-1850px");
    }else {
      $(".parallax").css("height","3820px");
      $(".p4").css("top", "80px");
      $(".bg-con").css("top","2780px");
      $(".email").css("top","-2690px");
      $(".follow").css("top","-2690px");
      $("#cr").css("top", "-2500px");
    }

  } else {

    $('li[role=button]').toggle();

    $('#Ab').click(function(){
      $('html,body').animate({scrollTop:310}, 215);
    })

    $('#SE').click(function(){
      $('html,body').animate({scrollTop:642}, 215);
    })

    $('#Pj').click(function(){
      $('html,body').animate({scrollTop:1015}, 215);
    })

    $('#Cn').click(function(){
      $('html,body').animate({scrollTop:2363}, 215);
    })
// For some reason doesn't work when placed in stylesheet
    $('.ul').css("margin", "0px");
  }


  $(window).on('scroll', function(){

    if (window.matchMedia('(min-width:900px)').matches){
      var scrolled = $(window).scrollTop();
      $('.parallax').css('top', 0 - scrolled);

      if(scrolled >= 1880) {
          window.scrollTo(0, 1875)
        }

      if ($(window).scrollTop() >= 55) {
        $('#About').fadeIn("slow");
      }
      if ($(window).scrollTop() >= 150) {
        $('.abt').fadeIn("slow");
      }
      if ($(window).scrollTop() >= 240) {
        $('#SkillsExperience').fadeIn("slow");
      }
      if ($(window).scrollTop() >= 315) {
        $('.skills').fadeIn("slow");
        $('.xp').fadeIn("slow");
      }
      if ($(window).scrollTop() >= 535) {
        $('#Projects').fadeIn("slow");
      }
      if ($(window).scrollTop() >= 660) {
        $('.p1').fadeIn("slow");
      }
      if ($(window).scrollTop() >= 950) {
        $('.p2').fadeIn("slow");
      }
      if ($(window).scrollTop() >= 1290) {
        $('.p3').fadeIn("slow");
      }


      }else if (window.matchMedia('(min-width:414px) and (max-width: 767px)').matches) {

      var scrolled = $(window).scrollTop();
      $('.parallax').css('top', 100 - scrolled);

      if(scrolled >= 1994) {
          window.scrollTo(0, 2004)
        }

      if ($(window).scrollTop() >= 255) {
        $('#About').fadeIn("slow");
      }
      if ($(window).scrollTop() >= 340) {
        $('.abt').fadeIn("slow");
      }
      if ($(window).scrollTop() >= 415) {
        $('#SkillsExperience').fadeIn("slow");
      }
      if ($(window).scrollTop() >= 440) {
        $('.skills').fadeIn("slow");
        $('.xp').fadeIn("slow");
      }
      if ($(window).scrollTop() >= 765) {
        $('#Projects').fadeIn("slow");
      }
      if ($(window).scrollTop() >= 815) {
        $('.p1').fadeIn("slow");
      }
      if ($(window).scrollTop() >= 1150) {
        $('.p2').fadeIn("slow");
      }
      if ($(window).scrollTop() >= 1500) {
        $('.p3').fadeIn("slow");
      }

      if ($(window).scrollTop() >= 1630) {
        $('.bg-con').fadeIn("slow");
      }

    }else{
      var scrolled = $(window).scrollTop();
      $('.parallax').css('top', 0 - scrolled);

      if(scrolled >= 2370) {
          window.scrollTo(0, 2375)
        }

      if ($(window).scrollTop() >= 55) {
        $('#About').fadeIn("slow");
      }
      if ($(window).scrollTop() >= 150) {
        $('.abt').fadeIn("slow");
      }
      if ($(window).scrollTop() >= 365) {
        $('#SkillsExperience').fadeIn("slow");
      }
      if ($(window).scrollTop() >= 410) {
        $('.skills').fadeIn("slow");
        $('.xp').fadeIn("slow");
      }
      if ($(window).scrollTop() >= 735) {
        $('#Projects').fadeIn("slow");
      }
      if ($(window).scrollTop() >= 785) {
        $('.p1').fadeIn("slow");
      }
      if ($(window).scrollTop() >= 1225) {
        $('.p2').fadeIn("slow");
      }
      if ($(window).scrollTop() >= 1680) {
        $('.p3').fadeIn("slow");
      }
      if ($(window).scrollTop() >= 1940) {
        $('.bg-con').fadeIn("slow");
      }
    }
  });

  function remove (){
    var hidden = [$('#About'), $('.abt'), $('#SkillsExperience'), $('.skills'), $('.xp'), $('#Projects'), $('.p1'), $('.p2'), $('.p3')]
    for (var i=0;i<hidden.length;i++){
      hidden[i].css("display","inline");
    }
  }

})










