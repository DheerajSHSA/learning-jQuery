$(function () {
    var ARROW_RIGHT = 39;
    $("html").keydown(function(event){
        if(event.which == ARROW_RIGHT){
            $(".blue-box").stop().animate({
                "margin-left": "+=10px"
            }, 50);
        }
    })
}); 