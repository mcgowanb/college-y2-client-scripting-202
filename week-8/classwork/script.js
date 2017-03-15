$(document).ready(function () {
    var date = new Date();
    var d = date.getDate();
    var m = date.getMonth();
    var y = date.getFullYear();
    $('#calendar').fullCalendar({
        weekends: false,
        view: "month",
        dayClick: function (date, jsEvent, view) {
            console.log(date);
        },

        events: [
            {
                title: 'All Day Event',
                start: new Date(y, m, 1)
            },
            {
                title: 'Long Event',
                start: new Date(y, m, d - 5),
                end: new Date(y, m, d - 2)
            },
            {
                id: 999,
                title: 'Repeating Event',
                start: new Date(y, m, d + 4, 16, 0),
                allDay: false
            },
            {
                title: 'Meeting',
                start: new Date(y, m, d, 10, 30),
                allDay: false
            },
            {
                title: 'Birthday Party',
                start: new Date(y, m, d + 1, 19, 0),
                end: new Date(y, m, d + 1, 22, 30),
                allDay: false
            }
        ]
    });

    $(document).keypress(function (e) {
        if (e.keyCode === 65) { // a
            var $x = $("div:first").detach();
            alert($x.html());
            toastr.options = {
                "closeButton": true,
                "positionClass": "toast-top-right",
                "timeOut": "5000",
                "showMethod": "fadeIn",
                "hideMethod": "fadeOut"
            };

            toastr.success("No harm done, everything is ok");
            $("body").append($x);
        }


        if (e.keyCode === 66) {
            alert($("div:first").parent().text());
            toastr.info("parent() can be just as useful as children()");
        }

        if (e.keyCode === 67) {
            alert($("input").val());
            toastr.options = {
                "closeButton": false,
                "positionClass": "toast-bottom-right",
                "timeOut": "2000"
            };
            toastr.info("best to use val() with input elements only");

        }

        if (e.keyCode == 68) {
            toastr.options = {
                "positionClass": "toast-top-full-width",
                "timeOut": "2500"
            };
            vexPrompt("What is your name?");
            toastr.error("We have no jquery here", "NOTE TO STUDENTS");
        }

    });
});


var vexPrompt = function (msg) {
    vex.dialog.prompt({
        className: "vex-theme-os",
        message: msg,
        placeholder: "I am",
        callback: function (value) {
            var re;
            if (value === false)
                re = "good";

            else if (value == '')
                re = "good person";

            else re = value + " - have a good life";
            return alert(re);
        }
    });
}
