const inputs = document.querySelectorAll("input");
inputs.forEach((input) => {
  let selected = document.getElementsByClassName("entered");
  input.addEventListener("input", () => {
    if (input.value.length === 0) {
      input.classList.remove("entered");
    } else {
      input.classList.add("entered");
    }
  });
});

const pass = document.querySelectorAll("[type='password']");

let pass1 = pass[0];
let pass2 = pass[1];

const submit = document.querySelector("button");
const unmatched = document.querySelector(".pass-2-confirm");

for (i = 0; i < pass.length; i++) {
  pass[i].addEventListener("input", () => {
    if (!pass1.validity.valid || !pass2.validity.valid) {
      pass1.classList.remove("yes");
      pass1.classList.add("no");
      pass2.classList.remove("yes");
      pass2.classList.add("no");
      submit.setAttribute("type", "button");
    }
    if (
      pass1.value.length > 0 &&
      pass2.value.length > 0 &&
      pass1.validity.valid &&
      pass2.validity.valid &&
      pass1.value === pass2.value
    ) {
      pass1.classList.remove("no");
      pass1.classList.add("yes");
      unmatched.style.visibility = "hidden";
      pass2.classList.remove("no");
      pass2.classList.add("yes");

      // Make button work when passwords match
      submit.setAttribute("type", "submit");
    } else {
      unmatched.style.visibility = "visible";

      pass1.classList.add("no");
      pass1.classList.remove("yes");
      pass2.classList.add("no");
      pass2.classList.remove("yes");
      submit.setAttribute("type", "button");
    }
  });
}

const red = document.getElementsByClassName("red");
const texts = document.querySelectorAll("form > div > div > div > p");

for (let i = 0; i < red.length; i++) {
  red[i].addEventListener("input", () => {
    if (!red[i].validity.valid && red[i].value.length > 0) {
      texts[i].style.visibility = "visible";
    } else {
      texts[i].style.visibility = "hidden";
    }
  });
}
