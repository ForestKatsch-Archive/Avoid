
$(document).ready(function() {
    balls_init();
    render_init();
    loop();
});

function loop() {
    $("#unsupported").remove();
    requestAnimationFrame(loop);
    balls_update()
    render_update();
}