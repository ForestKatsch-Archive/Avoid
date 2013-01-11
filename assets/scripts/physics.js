
var Physics=function() {
    this.l=[0,0];
    this.ld=[0,0];
    this.update=function() {
	this.l[0]+=this.ld[0];
	this.l[1]+=this.ld[1];
    };
};