// JavaScript Document
$(document).ready(function(e) {
	$(".header  li:first").one("mouseenter", function(){
        $("a").each(function(i) {
            if ((i + 1) % 3 == 0) {
                $(this).removeAttr("href");
                var $p = $("<p></p>").append($(this).clone());
                $(".section").append($p);
            }
        });
    });

    $(".header  li:eq(1)").on("click", function(e){
       e.preventDefault();
       $("img").fadeTo(0, .5);
    });

    $(".header p > span > span").on("click", function(){
       var $number = $(this).text();
       $number--;
       $(this).text($number);
    });

    $(".footer").dblclick(function(){
       $(this).detach();
        $(document).keypress(function(e) {
            if(e.charCode === 65){
               if($(".footer").length){
                    alert("Footer is present");
               }
               else
                   alert("Footer is not present");


            }
        });
    });

    $("img").on("click", function(){
       $(this).animate({
           height: "-=100",
           width: "-=100"
       }, 3000)
    });

    $("body p").on("click", function(){
       $("img").rotate(45);
    });

    $(document).keypress(function(e) {
        if(e.charCode === 66){
            var t0 = performance.now();
            var $logo = $("#logo > img");
            var $image = $(".featured > img").detach();
            $image.width($logo.width()).height($logo.height());
            $("#logo > img").replaceWith($image);
            $("h3:eq(1)").text("COMPLETED EVENTS");
            var t1 = performance.now();
            console.log("This function took " + (t1 - t0) + " milliseconds.")
        }
    });

    $(".header").on("click", function(){
       $(this).slideUp(1000, function(){
           $(this).slideDown(1000, function(){
               $(this).fadeOut(1000, function(){
                   $(this).fadeIn(1000, function(){
                       $(this).fadeTo(2000, .25, "swing", function(){
                           $(this).fadeTo(2000, 1);
                       })
                   })
               })
           })
       });
    });

});