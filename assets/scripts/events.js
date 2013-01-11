
var MOUSE_INNER=10;
var MOUSE_OUTER=200;
var MOUSE_GAIN=10;

function trange(il,i,ih,ol,oh) {
    i=(i-il)/ih;
    return((i*oh)+ol);
}

function clamp(l,i,h) {
    if(l > h) {
	var t=h;
	h=l;
	l=t;
    }
    if(l > i)
	return(l);
    if(h < i)
	return(h);
    return(i);
}

function tclamp(il,i,ih,ol,oh) {
    return(clamp(ol,trange(il,i,ih,ol,oh),oh));
}

function events_init() {
    $("body").mousemove(events_mouse);
    $("body").mouseup(toggle_pause);
}

function events_mouse(e) {
    var xm=tclamp(-MOUSE_INNER,xs(e.pageX),-MOUSE_OUTER,0,-1)+tclamp(MOUSE_INNER,xs(e.pageX),MOUSE_OUTER,0,1);
    xm*=MOUSE_GAIN;
    var ym=tclamp(-MOUSE_INNER,ys(e.pageY),-MOUSE_OUTER,0,-1)+tclamp(MOUSE_INNER,ys(e.pageY),MOUSE_OUTER,0,1);
//    var ym=tclamp(-MOUSE_INNER,ys(e.pageY),-MOUSE_OUTER,0,-1)+tclamp(MOUSE_INNER,ys(e.pageY),MOUSE_OUTER,0,1);
    ym*=MOUSE_GAIN;
    ball.physics.ld[0]=xm;
    ball.physics.ld[1]=ym;
}