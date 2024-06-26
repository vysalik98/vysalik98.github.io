const form = document.querySelector(".contact-form");
const inputs = form.querySelectorAll("input, textarea");

form.addEventListener("submit", (event) => {
  let ifNoData = false;
  inputs.forEach((input) => {
    if (input.value.trim() === "") {
      ifNoData = true;
    }
  });

  if (ifNoData) {
    alert("You must input required fields");
    event.preventDefault();
  }
});
