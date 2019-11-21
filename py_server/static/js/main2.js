console.log("scripts are being read"), $(window).load(function() {
    $(".image").fadeIn(1e3), $(".me").fadeIn(1e3)
    console.log('2ndplz!');
}), $(document).ready(function() {
    function o() {
        var o = [$("#About"), $(".abt"), $("#SkillsExperience"), $(".skills"), $(".xp"), $("#Projects"), $(".p1"), $(".p2"), $(".p3")];
        for ( var l = 0; l < o.length; l++) o[l].css("display", "inline");
    }
    $(".p4").css("display") == "none" ? ($(".parallax").css("height", "4056"), $(".bg-con").css("top", "2725"), $(".email").css("top", "-2000px"), $(".follow").css("top", "-2015px"), $("#cr").css("top", "-2055px")) : ($(".parallax").css("height", "4665px"), $(".bg-con").css("top", "3340px"), $(".email").css("top", "-2680px"), $(".follow").css("top", "-2700px"), $("#cr").css("top", "-2710px")), $(function() {
        $('[data-toggle="tooltip"]').tooltip()
    }), $("#submit").click(function(o) {
        o.preventDefault();
        if ("" == $("#inputName").val()) alert("Please provide a name"), $("#inputName").css("border-color", "red");
        else if ("" == $("#inputEmail").val()) $("#inputEmail").css("border-color", "red"), alert("Please provide an email");
        else if ("" == $("#inputSubject").val()) $("#inputSubject").css("border-color", "red"), alert("Please provide a subject");
        else if ("" == $("#inputMessage").val()) $("#inputMessage").css("border-color", "red"), alert("Please provide a message");
        else {
          o.preventDefault();
          //$("#e-send").css("display","inline");
          var email = "mailto:scameron110@gmail.com?subject="+$('#inputSubject').val()+"&body="+"<"+$('#inputName').val()+">"+"<"+$('#inputEmail').val()+">"+$('#inputMessage').val()
          var href = email.replace(/ /g, "%20")
          console.log(href)
          $("#e-send").attr("href", href);
          $("#e-send")[0].click();
        }
    }), window.matchMedia("(min-width:992px)").matches ? ($(".btn-info").toggle(), $(".image").attr("class", "center-block image"), $(".form-group").attr("class", "form-group center-block"), $("#submit").attr("class", "center-block"), "none" != $(".p4").css("display") ? ($(".p4").css("top", "735px"), $(".bg-con").css("top", "3790px"), $(".parallax").css("height", "4080px"), $(".email").css("top", "-2950px"), $(".follow").css("top", "-2960px"), $("#cr").css("top", "530px")) : ($(".parallax").css("height", "3400px"), $(".bg-con").css("top", "3100px"), $(".email").css("top", "-2400px"), $(".follow").css("top", "-2410px"), $("#cr").css("top", "540px")), $("#A").click(function(o) {
        o.preventDefault(), $("html,body").animate({
            scrollTop: 223
        }, 215)
    }), $("#S").click(function(l) {
        l.preventDefault(), o(), $("html,body").animate({
            scrollTop: 534
        }, 250)
    }), $("#P").click(function(o) {
        o.preventDefault(), $("html,body").animate({
            scrollTop: 833
        }, 300)
    }), $("#C").click(function(l) {
        l.preventDefault(), o(), $("html,body").animate({
            scrollTop: $(this.hash).offset().top - 1900
        }, 500)
    })) : window.matchMedia("(min-width:480px) and (max-width: 767px)").matches ? ($("li[role=button]").toggle(), $("#Ab").click(function() {
        $("html,body").animate({
            scrollTop: 382
        }, 215)
    }), $("#SE").click(function() {
        $("html,body").animate({
            scrollTop: 577
        }, 215)
    }), $("#Pj").click(function() {
        $("html,body").animate({
            scrollTop: 893
        }, 215)
    }), $("#Cn").click(function() {
        $("html,body").animate({
            scrollTop: 1986
        }, 215)
    }), "none" == $(".p4").css("display") ? ($(".parallax").css("height", "4056px"), $(".bg-con").css("top", "2075px"), $(".email").css("top", "-2010px"), $(".follow").css("top", "-2010px"), $("#cr").css("top", "-1850px")) : ($(".parallax").css("height", "3820px"), $(".p4").css("top", "80px"), $(".bg-con").css("top", "2780px"), $(".email").css("top", "-2690px"), $(".follow").css("top", "-2690px"), $("#cr").css("top", "-2500px"))) : ($("li[role=button]").toggle(), $("#Ab").click(function() {
        $("html,body").animate({
            scrollTop: 198
        }, 215)
    }), $("#SE").click(function() {
        $("html,body").animate({
            scrollTop: 538
        }, 215)
    }), $("#Pj").click(function() {
        $("html,body").animate({
            scrollTop: 1015
        }, 215)
    }), $("#Cn").click(function() {
        $("html,body").animate({
            scrollTop: 2363
        }, 215)
    }), $(".ul").css("margin", "0px")), $(window).on("scroll", function() {
        if (window.matchMedia("(min-width:900px)").matches) {
            var o = $(window).scrollTop();
            $(".parallax").css("top", 0 - o), o >= 1880 && window.scrollTo(0, 1875), $(window).scrollTop() >= 55 && $("#About").fadeIn("slow"), $(window).scrollTop() >= 150 && $(".abt").fadeIn("slow"), $(window).scrollTop() >= 240 && $("#SkillsExperience").fadeIn("slow"), $(window).scrollTop() >= 315 && ($(".skills").fadeIn("slow"), $(".xp").fadeIn("slow")), $(window).scrollTop() >= 535 && $("#Projects").fadeIn("slow"), $(window).scrollTop() >= 660 && $(".p1").fadeIn("slow"), $(window).scrollTop() >= 950 && $(".p2").fadeIn("slow"), $(window).scrollTop() >= 1290 && $(".p3").fadeIn("slow")
        } else if (window.matchMedia("(min-width:480px) and (max-width: 767px)").matches) {
            var o = $(window).scrollTop();
            $(".parallax").css("top", 100 - o), o >= 1994 && window.scrollTo(0, 2004), $(window).scrollTop() >= 255 && $("#About").fadeIn("slow"), $(window).scrollTop() >= 340 && $(".abt").fadeIn("slow"), $(window).scrollTop() >= 415 && $("#SkillsExperience").fadeIn("slow"), $(window).scrollTop() >= 440 && ($(".skills").fadeIn("slow"), $(".xp").fadeIn("slow")), $(window).scrollTop() >= 765 && $("#Projects").fadeIn("slow"), $(window).scrollTop() >= 815 && $(".p1").fadeIn("slow"), $(window).scrollTop() >= 1150 && $(".p2").fadeIn("slow"), $(window).scrollTop() >= 1500 && $(".p3").fadeIn("slow"), $(window).scrollTop() >= 1630 && $(".bg-con").fadeIn("slow")
        } else {
            var o = $(window).scrollTop();
            $(".parallax").css("top", 0 - o), o >= 2370 && window.scrollTo(0, 2375), $(window).scrollTop() >= 55 && $("#About").fadeIn("slow"), $(window).scrollTop() >= 150 && $(".abt").fadeIn("slow"), $(window).scrollTop() >= 365 && $("#SkillsExperience").fadeIn("slow"), $(window).scrollTop() >= 410 && ($(".skills").fadeIn("slow"), $(".xp").fadeIn("slow")), $(window).scrollTop() >= 735 && $("#Projects").fadeIn("slow"), $(window).scrollTop() >= 785 && $(".p1").fadeIn("slow"), $(window).scrollTop() >= 1225 && $(".p2").fadeIn("slow"), $(window).scrollTop() >= 1680 && $(".p3").fadeIn("slow"), $(window).scrollTop() >= 1940 && $(".bg-con").fadeIn("slow")
        }
    })
});
