const storeUserName = document.querySelector(".store");
const deleteUserName = document.querySelector(".delete");
const form = document.querySelector("form");
const getUserName = document.querySelector("#enterUserName");
const submitBtn = document.querySelector("#submitUserName");
const deleteBtn = document.querySelector("#deleteUserName");
const h1 = document.querySelector("h1");
const greeting = document.querySelector(".custom-greeting");

form.addEventListener("submit", function (event) {
  event.preventDefault();
});

submitBtn.addEventListener("click", function () {
  localStorage.setItem("name", getUserName.value);

  userNameDisplayStatus();
});

deleteUserName.addEventListener("click", function () {
  localStorage.removeItem("name");

  userNameDisplayStatus();
});

function userNameDisplayStatus() {
  if (localStorage.getItem("name")) {
    let name = localStorage.getItem("name");
    h1.textContent = `Welcome, ${name}!`;
    greeting.textContent = ``;

    deleteUserName.style.display = "block";
    storeUserName.style.display = "none";
  } else {
    h1.textContent = ``;
    greeting.textContent = ``;

    deleteUserName.style.display = "none";
    storeUserName.style.display = "block";
  }
}

document.body.onload = userNameDisplayStatus;
