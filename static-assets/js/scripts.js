var canvas = document.getElementById("graph");
var ctx = canvas.getContext("2d");
var hold = false;
var prevX, prevY, curX, curY;
ctx.lineWidth = 3;
    
function vertex(){
    canvas.onmousedown = function (e){
        curX = e.clientX - canvas.offsetLeft;
        curY = e.clientY - canvas.offsetTop;
        ctx.beginPath();
        ctx.arc(curX, curY, 10, 0, 2 * Math.PI);
        ctx.fill();
        ctx.closePath();
    };
}
       
function edge(){
    canvas.onmousedown = function (e){
        img = ctx.getImageData(0, 0, canvas.width, canvas.height);
        prevX = e.clientX - canvas.offsetLeft;
        prevY = e.clientY - canvas.offsetTop;
        hold = true;
    };
            
    canvas.onmousemove = function linemove(e){
        if (hold){
            ctx.putImageData(img, 0, 0);
            curX = e.clientX - canvas.offsetLeft;
            curY = e.clientY - canvas.offsetTop;
            ctx.beginPath();
            ctx.moveTo(prevX, prevY);
            ctx.lineTo(curX, curY);
            ctx.stroke();
            ctx.closePath();
        }
    };
            
    canvas.onmouseup = function (e){
        hold = false;
    };
            
    canvas.onmouseout = function (e){
        hold = false;
    }; 
}
    
function reset(){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
}
    
