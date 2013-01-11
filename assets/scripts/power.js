

var PA_X=0;
var PA_Y=1;
var PA_TYPE=2;
var PA_AMOUNT=3;
var PA_SIZE=4;

var POWER_COIN=0;
var POWER_LIFE=1;
var POWER_NUMBER=10;
var power=[];

function power_init() {
    for(var i=0;i<POWER_NUMBER;i++) {
	power_add(Math.random()*field_size[0],Math.random()*field_size[1],POWER_COIN,1);
    }
    render_needed=true;
}

function power_add(x,y,type,amount) {
    power.push([x,y,type,amount,50]);
}

function power_used(x) {
    power.splice(x,1);
    render_needed=true;
}

function power_update() {
    
}