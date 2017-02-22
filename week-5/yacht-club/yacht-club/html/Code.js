// JavaScript Document
"use strict";
$(document).ready(function(e) {
    //1. When an <li> is clicked, remove it
    //2. When the mouse is hovered over 'img1', append a paragraph to the id 'pbasic'
    //3. When teh 'pToChange' id is clicked, make CSS changes, also perform an amimation
    $("li").on("click", function(){
        $(this).remove();
    });


    $("#img1").mouseover(function(){
        $("#pbasic").append("<p>Paragraph Appended</p>");
    });

    $("#pToChange").one("click", function(){
       $(this).css({"text-align": "right", "font-size": "32px", "color": "magenta"});
    });

    $("#carousel-example-generic").one("click", function(){
       var $myDiv = $("<div>", {id: "myDiv", height : "50px"})
           .html("<p> New Div</p>")
           .css({"background": "#1360eb", "border":"dashed"});

        $("#pToChange").prepend($myDiv);

        $("#myDiv").on("click", function(){
            $(this).remove();
        })
    });

    $("a").attr("href", "http://itsligo.ie");


});