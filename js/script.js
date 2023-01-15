$(function () {
    // To remove all the direct chilren of form element which are not an input of type text or the br 
    $("form").children().not("input:text, textarea, br").remove();
});
