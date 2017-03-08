$(document).ready(function (){

    $("ul li").each(function(k, v){
        //key values of index and element. logging for display
       // console.log(v);
    });

    $res = $(".row0").find(".fa-envelope-o").parent().text();
    console.log($res);


    $other = $(this).find("li.active");
    $other.each(function(k, v){
        console.log(v);
    });

    $("a").on("click", function(e){e.preventDefault()});

    $(".nospace.inline li:first").one("click", function(){
       $(this).prepend($(this).clone());
        $(this).next().append($(this).next().clone());
    });

    $("#logo a").on("click", function(e){
        e.preventDefault();
        $(this).hide("slow", function(){
            $(this).show("slow");
        });
    });

    $("ul.clear a:first").on("click", function(e){
        e.preventDefault();
        var $x = $(this).detach();
        $("ul.clear").append($x);

    });

    $("footer a:first").dblclick(function(e){
        e.preventDefault();
        var $parent = $(this).parent();
        $(this).remove();
        var $img = $('<img id="dynamic" width="100px"; height="100px">');
        $img.attr("src", "images/image.gif");
        $img.css({"border": "3px dashed green"});
        $parent.append($img);
    });

    $("#pageintro > h3:first").hover(function(){
        $(this).css({"font-size": "100px", "color": "green"}).attr("rel", "myNewRelTag").html("Here's some new html");
       console.log("asfa");
    });

    $("#home-icon > i").on("click", function(){
       $(this).addClass("myNewClass").removeClass("fa-lg").toggleClass("fa-home")
    });


});