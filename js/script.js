$(function () {
    // text(), html()
    // var firstPar = $("p:first");
    // console.log(firstPar.text());
    // console.log(firstPar.html());
    // console.log($("p").html());

    // firstPar.text("<strong>Hello, </strong>World!")
    // firstPar.html("<strong>Hello, </strong>World!")

    var firstPar = $("p:first");
    firstPar.text(firstPar.text() + "This is just appended");
});