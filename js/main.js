var form = document.querySelector(".Form");
var username = document.getElementById("name");
var message = document.querySelector(".message");
var email = document.querySelector("#email");
var warning = document.querySelector(".warning");
var textarea = document.querySelector("#message");
var errorMessage = document.querySelector(".errorMessage");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (username.value.trim() === "") {
    message.textContent = "Bu sahəni boş saxlama";
    message.style.color = "red";
    username.style.border = "1px solid red";
  } else {
    message.textContent = "";
    username.style.border = "0.5px solid black";
  }

  if (email.value.trim() === "") {
    warning.textContent = "Bu sahəni boş saxlama";
    warning.style.color = "red";
    email.style.border = "1px solid red";
  } else {
    warning.textContent = "";
    email.style.border = "0.5px solid black";
    if (!email.value.includes("@")) {
      warning.textContent = "@ işarəsi daxil edin";
      warning.style.color = "red";
      email.style.border = "1px solid red";
    }
  }
  if (textarea.value.trim() === "") {
    errorMessage.textContent = "Bu sahəni doldurun";
    errorMessage.style.color = "red";
    textarea.style.border = "1px solid red";
  } else {
    errorMessage.textContent = "";
    textarea.style.border = "1px solid black";
  }
});
