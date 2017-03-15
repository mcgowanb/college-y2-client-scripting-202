$(document).ready(function () {
    $.toaster({message: 'Your message here'});
    $("a").on("click", function (e) {
        e.preventDefault()
    });

    $(".nospace.inline li:first").one("click", function () {
        $(this).prepend($(this).clone());
        $(this).next().append($(this).next().clone());
        $.toaster({settings: {
            'timeout': 6500
        }});
        $.toaster({message: 'You have modified the page!', title: 'Notification', priority: 'info'});

    });

    $("#logo a").on("click", function (e) {
        e.preventDefault();
        $(this).hide("slow", function () {
            $(this).show("slow");
        });
        $.toaster({settings: {
            'timeout': 6500
        }});
        $.toaster({message: 'You have modified the page!', title: 'Notification', priority: 'info'});
    });

    $("ul.clear a:first").on("click", function (e) {
        e.preventDefault();
        var $x = $(this).detach();
        $("ul.clear").append($x);

    });

    $("footer a:first").dblclick(function (e) {
        e.preventDefault();
        var $parent = $(this).parent();
        $(this).remove();
        var $img = $('<img id="dynamic" width="100px"; height="100px">');
        $parent.append($img);
    });

});