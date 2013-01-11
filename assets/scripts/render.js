
var bg;
var pan=[0,0];

function xo(x) {
    return x+pan[0];
}

function yo(y) {
    return y+pan[0];
}

function render_init() {
    $("body").append("<div id=''></div>")
}

function pan_update() {
    pan[0]=$(window).width()/2;
    pan[1]=$(window).height()/2;
}

function render_update() {
    $("canvas#background").width($(window).width());
    $("canvas#background").height($(window).height());
    pan_update();
    bg.fillStyle="#288332";
    bg.arc(xo(0),yo(0),100,0,2*Math.PI,true);
    bg.fill();
}