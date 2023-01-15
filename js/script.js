$(function () {
    // attr(), prop(), val()
    // var specialLink = $("#special-link");
    // console.log(specialLink.attr("href"));
    // specialLink.attr("href", "https://myshopeeee.netlify.app/"); 

    // var checkbox = $("input:checkbox");
    // console.log(checkbox.prop("checked")); 

    var textInput = $("input:text")
    $("input:text").val("Dheeraj Kashyap")
    console.log(textInput.val())

    var rangeInput = $("input[type='range']");
    console.log(rangeInput.val());

});
