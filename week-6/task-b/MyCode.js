// JavaScript Document
"use strict";
//DO NOT MAKE ANY CHANGES TO THE HTML PAGE
//1. Use an attribute selector such that when the mouse is hovered over a textbox, it's background colour is changed to yellow,
// when the mouse is moved away from the textbox, the background colour is set at blue

//2. Use an attribute selector so that when the "Submit" button is clicked, list (using alert)
// the number of images with '320' in the source (attribute) and then remove the button

//3. When the PARAGRAPH TO CHANGE heading is clicked, replace the paragraph with a 100px * 100px image.
// Use an adjacant selector as part of your solution

//4. Use an attribute selector so that when the first textbox is clicked, the 4th, 5th and 6th div's on the page are removed

//5. Use an attribute selector so that when the second textbox is clicked, the contents of all <blockquote> changes to 'blockquote changed'

//6. for the ul class="nospace linklist" ->
// on trhe page load change the link text to 'test link'. When a link is clicked, set the href to itsligo.ie
//7. Research three differences between html(), attr() and text() -> i.e. 'html() allows you to do a, b, c but attr() and text() do not'

//.html() replaces the html contents of all matching elements, or returns the html of the first element matched. Using this method you can
//set the text, html elements (sub) and attrbutes of each element if you want
//.attr() sets or gets the value of an attribute of the matched element. You can only get or set these attributes
//.text() allows you to get the text contents of the matched elements or sets the contents of the text only

//8. List three differences between .eq() and nth-child()
// .eq() is zero indexed, and nth-child() is 1 indexed, meaning that it starts at 1, whereas eq starts at 0
//:nth-child() selects all elements that are the nth-child of their parent.
//:eq() selects the element at index n within the matched set.

//10. Code two examples each of html(), attr(), text(), eq() and nth-child() - you are not required to use attribute selectors

$(document).ready(function(e) {
    //1
	$('input[type=text]').hover(function(){
        $(this).css({'background-color': 'yellow'});
    }).mouseout(function(){
        $(this).css({'background-color': 'blue'});
    });


    //2
    $('button[type=submit]').on("click", function(e){
        e.preventDefault();
        var x = $("img[src*='320']");
        alert("There are " + x.length + " results");
        //$(this).remove();
    });

    //3
    $("#logo >h1 + p").on("click", function(){
        $(this).replaceWith("<img src=images/demo/100x100.png />");
    });

    //4
    $('input[type=text]:first').on("click", function(){
       $("div:eq(3), div:eq(4), div:eq(5)").remove();
    });

    //5
    $('input[type=text]:eq(1)').on("click", function(){
        $("blockquote").html("blockquote changed");
    });

    //6
    $("ul.nospace.linklist a").text("test link").on("click", function(){
        $(this).attr("href", "http://www.itsligo.ie");
    });

    $('button[type=submit]').on("click", function(){
      $('button').html("Ha Ha!");
    })
});
