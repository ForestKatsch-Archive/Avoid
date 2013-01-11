
var Ball=function() {
    this.physics=new Physics();
    this.update=function() {
	this.physics.update();
    };
};

var balls=[];
var ball;

function balls_init() {
    ball=new Ball();
}

function balls_update() {
    ball.update();
    for(var i=0;i<balls.length;i++) {
	balls[i].update();
    }
}