var canvas = document.getElementById("canvas");
if (canvas != null) {
    var ctx = canvas.getContext("2d");
}

$(document).ready(function () {
    $("#next-page").on("click", function (e) {
        e.preventDefault();
        saveToStorage();
    });

    $("#draw").on("click", function (e) {
        e.preventDefault();
        drawShape();
        // drawStar(500, 500, 5, 500, 120);

    });
});


function saveToStorage() {
    var type = $("#type").val();
    var wink = $("#wink").val();
    var background = $("#background").val();
    var lineColor = $("#line-colour").val();
    var lineWidth = $("#line-width").val();

    var obj = {
        "type": type,
        "wink": wink,
        "background": background,
        "lineColor": lineColor,
        "lineWidth": lineWidth
    };
    localStorage.setItem("shape", JSON.stringify(obj));
    window.location.href = "Render.html";
}

function drawShape() {

    var data = JSON.parse(localStorage.getItem("shape"));
    console.log(data);
    var x = canvas.width / 2;
    var y = canvas.height / 2;
    //set the radius of the circle to the average of the width and height of the canvas
    // - 10 so to fill the canvas element almost
    var radius = ((x + y) / 2) - 10;
    var startAngle = 0;
    var endAngle = 2 * Math.PI;

    //set colours
    ctx.strokeStyle = data.lineColor;
    ctx.fillStyle = data.background;

    //draw circle for face
    // ctx.beginPath();
    drawFace(data, x, y, radius, startAngle, endAngle);
    drawEyes(data, startAngle, endAngle, data.wink);
    drawSmile(data.type, x, y, startAngle, radius);
}


function drawSmile(type, x, y, startAngle, radius) {
    var angle = Math.PI;

    if(type == "sad"){

    }


    else if (type == "cheeky") {
        angle = Math.PI / 2;
    }

    ctx.moveTo(110, 75);
    ctx.beginPath();
    ctx.arc(x, y, radius - 50, startAngle, angle, false);
    ctx.stroke();
}

function drawEyes(data, startAngle, endAngle, wink) {
    var centerY = canvas.height / 3;
    // position of left eye is 1 third of the canvas
    var leftX = canvas.width / 3;
    //position of the right eye is 2 thirds of the canvas
    var rightX = (canvas.height / 3) * 2;
    var radius = 10;
    ctx.fillStyle = data.lineColor;

    ctx.beginPath();
    //left eye
    ctx.arc(leftX, centerY, radius, startAngle, endAngle);
    ctx.stroke();
    ctx.fill();

    //right eye
    ctx.moveTo(rightX, centerY);

    if(wink == "yes"){
        ctx.lineWidth = 8;
        ctx.moveTo(rightX + radius, centerY);
        ctx.arc(rightX, centerY, radius, startAngle, Math.PI);
        ctx.stroke();
        ctx.lineWidth = getLineWidth(data.lineWidth);

    }
    else{
        ctx.arc(rightX, centerY, radius, startAngle, endAngle);
        ctx.stroke();
        ctx.fill();
    }
}

function drawFace(data, x, y, radius, startAngle, endAngle) {
    ctx.beginPath();
    ctx.arc(x, y, radius, startAngle, endAngle);
    ctx.lineWidth = getLineWidth(data.lineWidth);
    ctx.stroke();
    ctx.fill();
}

function getLineWidth(size) {
    var rVal;
    switch (size) {
        case "small":
            rVal = 1;
            break;
        case "large":
            rVal = 15;
            break;
        default:
            rVal = 1;
            break;
    }
    return rVal;
}