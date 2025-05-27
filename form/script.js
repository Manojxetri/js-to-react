let form = document.getElementById("form");

let submit = document.getElementById("submit");
let details = document.getElementById("details");

function output(event) {
  event.preventDefault();
  let userName = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let maskedPassword = "*".repeat(password.length);
  details.innerHTML = `<hr><h2>Details:</h2><br>
      <strong>Name:</strong> ${userName}<br>
      <strong>Email:</strong>${email}<br>
      <strong>Password:</strong>${maskedPassword}`;
  alert("submitted successfully");
  details.style.margin="40px";
}

form.addEventListener("submit", output);
