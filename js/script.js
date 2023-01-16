$(function () {
    $("#btn-click").click(function (event) {
        $("#btn-click").css("opacity", "0.5");
    });

    $(".red-box").click(function() {
        $(this).fadeTo(500, -.5);
    });
}); 