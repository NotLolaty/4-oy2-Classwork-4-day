const ADMIN_LOGIN = "adminlogin@gmail.com";
const ADMIN_PASS = "1234";

const email = document.querySelector(".email");
const pass = document.querySelector(".pass");
const form = document.querySelector(".form");
const modal = document.querySelector(".modal");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (email.value !== ADMIN_LOGIN) {
    email.style.outline = "1px solid red";
    email.style.border = "1px solid red";
    alert("The email is incorrect");
  } else {
    email.style.outline = "1px solid green";
    email.style.border = "1px solid green";
  }
  if (pass.value !== ADMIN_PASS) {
    pass.style.outline = "1px solid red";
    pass.style.border = "1px solid red";
    alert("The password is incorrect");
  } else {
    pass.style.outline = "1px solid green";
    pass.style.border = "1px solid green";
  }
  if (email.value == ADMIN_LOGIN && pass.value == ADMIN_PASS) {
    alert("Welcome to the admin page!");
    localStorage.setItem("user", true);
    window.location.replace("http://127.0.0.1:5500/client/admin_edit.html");
  }
});
