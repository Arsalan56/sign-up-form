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

pass2.addEventListener("input", () => {
  if (pass1.value === pass2.value) {
    console.log(pass1.value, pass2.value);
    pass1.classList.remove("no");
    pass2.classList.remove("no");

    pass1.classList.add("yes");
    pass2.classList.add("yes");
  } else {
    pass1.classList.remove("yes");
    pass2.classList.remove("yes");

    pass1.classList.add("no");
    pass2.classList.add("no");
  }
});
