function validate() {
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");
  const alertMessage = document.getElementById("alert-message");
  const icon11 = document.getElementById("icon11");
  const icon12 = document.getElementById("icon12");
  const icon21 = document.getElementById("icon21");
  const icon22 = document.getElementById("icon22");

  const username = usernameInput.value;
  const password = passwordInput.value;

  if (username == "" && password == "") {
    alertMessage.innerHTML = "Please enter username and password.";
    icon11.style.display = "block";
    icon21.style.display = "block";
  } else if (username == "") {
    alertMessage.innerHTML = "Please enter username.";
    icon11.style.display = "block";
  } else if (password == "") {
    alertMessage.innerHTML = "Please enter password.";
    icon21.style.display = "block";
  } else if (username != "new_user") {
    alertMessage.innerHTML = "Please enter valid username.";
    icon11.style.display = "block";
  } else if (password != "123456789") {
    alertMessage.innerHTML = "Please enter valid password.";
    icon21.style.display = "block";
  } else {
    alertMessage.innerHTML = "Successful login!";
  }

  if (username === "new_user") {
    usernameInput.classList.add("valid");
    usernameInput.classList.remove("invalid");
    icon12.style.display = "block";
    icon11.style.display = "none";
  } else {
    usernameInput.classList.add("invalid");
    usernameInput.classList.remove("valid");
    icon12.style.display = "none";
    icon11.style.display = "block";
  }

  if (password === "123456789") {
    passwordInput.classList.add("valid");
    passwordInput.classList.remove("invalid");
    icon22.style.display = "block";
    icon21.style.display = "none";
  } else {
    passwordInput.classList.add("invalid");
    passwordInput.classList.remove("valid");
    icon22.style.display = "none";
    icon21.style.display = "block";
  }

  if (username === "new_user" && password !== "123456789") {
    usernameInput.classList.add("valid");
    usernameInput.classList.remove("invalid");
    passwordInput.classList.add("invalid");
    passwordInput.classList.remove("valid");
  } else if (username !== "new_user" && password === "123456789") {
    usernameInput.classList.add("invalid");
    usernameInput.classList.remove("valid");
    passwordInput.classList.add("valid");
    passwordInput.classList.remove("invalid");
  }
}