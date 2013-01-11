
function ui_add_instrument() {
    instrument_add();
}

function ui_init() {
    $("#instrument-add a").click(function() {
	ui_add_instrument();
    });
}