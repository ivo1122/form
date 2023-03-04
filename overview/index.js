const form = document.getElementById("form");
const username = document.getElementById("username");
const surname = document.getElementById("surname");
const email = document.getElementById("email");
const details = document.getElementById("details");
const checkbox = document.getElementById("checkbox");

function isFormValid() {
  const inputContainers = form.querySelectorAll(".input-control");
  let result = true;

  inputContainers.forEach((container) => {
    if (container.classList.contains(".input-control error")) {
      result = false;
    }
  });
  return result;
}


console.log(isFormValid());

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();

  if(isFormValid()) {
    window.location.hef = `${window.location.origin}/second-page/index.html`
  } else {
    e.preventDefault();
  }
});

/* window.location.hef = `${window.location.origin}/second-page/index.html` */


const checkInputs = () => {
  const usernameValue = username.value.trim();
  const surnameValue = surname.value.trim();
  const emailValue = email.value.trim();
  const detailsValue = details.value.trim();

  if (usernameValue === "" || username.value === null) {
    setErrorFor(username, "Name is required");
  } else if (usernameValue.length < 4) {
    setErrorFor(username, "Must have at least 4 characters");
  } else {
    setSuccessFor(username);
  }

  if (surnameValue === "") {
    setErrorFor(surname, "Last name is required");
  } else {
    setSuccessFor(surname);
  }

  if (emailValue === "") {
    setErrorFor(email, "Email is required");
  } else {
    setSuccessFor(email);
  }

  if (detailsValue === "") {
    setErrorFor(details, "This field is required");
  } else {
    setSuccessFor(details);
  }

};

console.log(checkInputs())


function setErrorFor(input, message) {
  const inputControl = input.parentElement;
  const small = inputControl.querySelector("small");
  small.innerText = message;
  inputControl.className = "input-control error";

}

console.log(setErrorFor.length)
console.log(setSuccessFor.length)

function setSuccessFor(input) {
  const inputControl = input.parentElement;
  inputControl.className = "input-control success";

}

form.addEventListener("click", (e) => {
  localStorage.clear(`user`);

  let username = document.getElementById("username");
  username = username.value;
  localStorage.setItem("username", username);

  let surname = document.getElementById("surname");
  surname = surname.value;
  localStorage.setItem("surname", surname);

  let email = document.getElementById("email");
  email = email.value;
  localStorage.setItem("email", email);

  let details = document.getElementById("details");
  details = details.value;
  localStorage.setItem("details", details);
});

// window.location.href = "/second-page/index.html"