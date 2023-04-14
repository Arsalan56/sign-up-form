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

pass1 = pass[0];
pass2 = pass[1];

const submit = document.querySelector("button");

for (i = 0; i < pass.length; i++) {
  pass[i].addEventListener("input", () => {
    if (!pass1.validity.valid || !pass2.validity.valid) {
      pass1.classList.remove("yes");
      pass1.classList.add("no");

      pass2.classList.remove("yes");
      pass2.classList.add("no");
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

      pass2.classList.remove("no");
      pass2.classList.add("yes");

      // Make button work when passwords match
      submit.setAttribute("type", "submit");
    }
  });
}
