$(function () {
    $("#btn-click").click({
        user: "Peter"
    }, function(event) {
        greetUser(event.data)
    });

    function greetUser(userData)
    {
        username = userData.user || "Anonymous";
        alert("Welcome Back "+username + "!")
    }
}); 