const inputs = document.querySelectorAll("input");
inputs.forEach((input) => {
  input.addEventListener(
    "input",
    () => {
      input.classList.add("entered");
    },
    { once: true }
  );
});

const pass1 = document.querySelector("#pass");
const pass2 = document.querySelector("#pass_confirm");

const submit = document.querySelector("button");

pass2.addEventListener("input", () => {
  if (pass1.value === pass2.value) {
    console.log(pass1.value, pass2.value);
    pass1.classList.remove("no");
    pass2.classList.remove("no");

    pass1.classList.add("yes");
    pass2.classList.add("yes");

    // Make button work when passwords match
    submit.setAttribute("type", "submit");
  } else {
    pass1.classList.remove("yes");
    pass2.classList.remove("yes");

    pass1.classList.add("no");
    pass2.classList.add("no");

    // Make button not work when passwords don't match
    submit.setAttribute("type", "button");
  }
});
