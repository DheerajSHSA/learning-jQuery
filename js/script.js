$(function () {
  $("#form").submit(function (event) {
    var name = $("#name").val();
    var password = $("#password").val();
    var message = $("#message").val();
    var checked = $("#checkbox").is(":checked");

    validateNameField(name, event);
    validatePasswordField(password, event);
    validateCheckbox(checked, event);
  });
});


function validateNameField(name, event) {
  if (!isValid(name)) {
    $("#name-feedback").text("Please Enter a Valid Name").css("color", "red");
    event.preventDefault();
  }
  else {
    $("#name-feedback").text("");
  }
}

function validatePasswordField(password, event) {
  if (!isValidPassword(password)) {
    $("#password-feedback").text("Please Enter a Valid Password").css("color", "red");
    event.preventDefault();
  }
  else {
    $("#password-feedback").text("");
  }
}

function validateCheckbox(status, event) {
  if (status === false) {
    $("#checkbox-feedback").text("Please check the check box").css("color", "red");
    event.preventDefault();
  }
  else {
    $("#checkbox-feedback").text("");
  }
}

function isValid(name) {
  if (name.length < 2)
    return false;
  return true;
}

function isValidPassword(password) {
  if (password.length < 8)
    return false;
  return true;
}