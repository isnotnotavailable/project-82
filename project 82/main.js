var mouseEvent= "empty";
var last_position_of_x,last_position_of_y;

canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

color = "black";
width_of_line= 1;
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e)
{

    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width_of_line").value;

    mouseEvent="mouseDown"
}

canvas.addEventListener("mousemove", my_mousemove)
function my_mousemove(e)
{
    current_position_of_x = e.clientX - canvas.offsetLeft;
    current_position_of_y = e.clientY - canvas.offsetTop;


    if (mouseEvent=="mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = 2;
        ctx.arc(last_position_of_x,last_position_of_y, 40 ,0 , 2*Math.PI);
        ctx.stroke()
        
        
    }

    last_position_of_x = current_position_of_x;
    last_position_of_y = current_position_of_y;
}

function clearArea() {
    ctx.clearRect(0,0, ctx.canvas.width, ctx.canvas.height);
}