$(document).on('keydown', 'input, select', function(e){
    if (e.keyCode == 13) { // 13 is the keycode for Enter
        e.preventDefault(); // Prevent form submission
        return false;
    }
});
