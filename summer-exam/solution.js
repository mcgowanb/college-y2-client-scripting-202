$(document).ready(function () {
    $("#footer").one("click", function () {
        var element = $(this).parent();
        var data = element.html();
        localStorage.setItem("footer", JSON.stringify(data));
        $(this).detach();
    });

    $(".wrapper.row0").one("click", function () {
        var footer = JSON.parse(localStorage.getItem("footer"));
        $(".wrapper.row4").html(footer);
    });

    $("li:nth-child(2)").html("<p class='new-par'>New paragraph</p>").next().on("click", function () {
        alert("s'goin bai?");
    });

    $("#top").keyup(function () {
        console.log("animating");
        $(".inspace-10.borderedbox:first").animate({
            height: "250px",
            width: "350px",
            opacity: '0.5',
            fontSize: '4.5em',
            top: "55px",
            borderWidth: "10px"
        }, 3000);
    });


    $("input:eq(1):text").hover(function () {
        $(this).removeClass().addClass("change-me");
    });

    $('p:eq(4), p:eq(5), p:eq(7)').on("click", function () {
        var elems = [
            $('p:eq(4)').clone(),
            $('p:eq(5)').clone(),
            $('p:eq(7)').clone()
        ]
        $.each(elems, function (index, value) {
            $("#footer").prepend(value);
        });
    });

    $('a[href$=".com/"]').on("click", function (e) {
        e.preventDefault();
        $(this).attr("href", "http://www.itsligo.ie");
    });

    $("#logo").hover(function(){
       console.log($("#top").html());
    });


});