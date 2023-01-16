$(function () {
    // var blueBox = $(".blue-box");

    // blueBox.mouseenter(function () {
    //     $(this).stop().fadeTo(500, .5);
    // });

    // blueBox.mouseleave(function () {
    //     $(this).stop().fadeTo(500, 1);
    // });


    blueBox.hover(function () {
        blueBox.stop().fadeTo(500, .5);
    },
        function () {
            blueBox.stop().fadeTo(500, 1);
        });
}); 