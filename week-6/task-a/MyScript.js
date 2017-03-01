// JavaScript Document
//YOU ARE NOT ALLOWED ALTER THE HTML PAGE (E.G. ADDING ID'S IN ANY WAY)
//1. Remove the first figcaption element (and anything held within) from the 'section id="services" class="last clear"' part of the page
//when the image just above the figcaption is clicked - is <figcaption> a child of <img> or a child of <figure>? ##Child of Figure
//2. When the header (<header id="header") is clicked, remove the links marked "odd"
//3. When the page loads, change the copyright info to "Copyright 2016 A. N. Other"
//4. When the OS templates link (bottom right of page) is clicked, prevent the link from working
//5. When the first image is clicked, animate it
//6. When the "Free Website Layouts" link is clicked, set the href to LinkedIn

//7. When the h2 heading 'Catagories' (class .title) is clicked, change each of the <a> elements within to <p> elements containing text 'Dummy Paragraph'. They should have a serif font (size 16)
//and an opacity of 75%, with a background colour of a light shade of green - note class .title is a sibling of nav $(".title + nav > ul.....
//Note: Use the jQuery function replaceWith()

//8. Create a class called dashed in the css (border: dashed, font weight: bolder) - when the right most image of the 4 is clicked, use addClass() to add the class to the first and last paragraphs on the page.
//9. When a keyboard key is pressed, rotate all images by 75 degrees 
//10. When the second paragraph is clicked, create a basic table (2 * 2) at the bottom of the page - write a class in the CSS and style the table using addClass
//11. Look up attribute selectors and write two sample pieces of code using this template
//12. Use an attribute selector such that when any link pointing to os-templates.com has the mouse hovered over it, alert the message "OS-Templates" 

"use strict";
$(document).ready(function () {
    //Understand difference between child and descendant selectors
    $("#services > ul > li > article > figure > img").on("click", function () {
        $(this).next().remove(); /// changed this
    });

    $("#header").on("click", function () {
        $("#header nav ul li:odd").remove();
    });

    $(".fl_left").html("Copyright 2016 A. N. Other");

    $(".fl_right a").on("click", function (e) {
        (e).preventDefault();
    });

    $("img:first").one("click", function () {
        $(this).animate({
                "opacity": "0.2",
                "width": "10px",
                "height": "10px"
            },
            3000);
    });

    $("#right_column nav ul li:eq(4) a").one("click", function () {
        $(this).attr("href", "http://www.linkedin.com");
    });

    //7.
    $(".title").on("click", function () {
        $(".title + nav > ul > li > a").replaceWith("<p>Dummy paragraph</p>");
        $(".title + nav > ul > li > p").css({
            "font": "serif",
            "font-size": "16px",
            "opacity": "0.75",
            "background-color": "#002200"
        });
    });

    //8.
    $("#latest img:eq(3)").on("click", function () {
        $("p:first").addClass("dashed");
        $("p:last").addClass("dashed");
    });

    //9.
    $("body").on("keydown", function () {
        $("img").css("transform", "rotate(75deg)");
    });

    //10.
    $("p:eq(1)").on("click", function () {
        var $myTable = $("<table><tr><td>Cell</td><td>another cell</td></tr><tr><td>Cell 3</td><td>final cell</td></tr></table>");
        $("#footer").append($myTable);
        $myTable.addClass("tableStyle");
    });

    //11.
    var $x = $("img[width]");
    console.log("Width " + $x.length);

    var $y = $('a[href^="http://"]');
    console.log("Height " + $y.length);

    $('a[href*="os-templates.com"]').on("mouseover", function () {
        alert("OS-TEMPLATES");
    });


});
