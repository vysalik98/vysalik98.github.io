function loadContent(page) {
  fetch(page + ".html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("content").innerHTML = data;
      const form = document.querySelector(".contact-form");
      if (form) {
        // Checking if form exists in the current page
        const inputs = form.querySelectorAll("input, textarea");
        form.addEventListener("submit", (event) => {
          event.preventDefault();
          let ifNoData = false;
          inputs.forEach((input) => {
            if (input.value.trim() === "") {
              ifNoData = true;
            }
          });

          if (ifNoData) {
            alert("You must input required fields");
          } else {
            alert("I got your message");
          }
        });
      }
    });
}

window.addEventListener("load", () => {
  loadContent("home");
  const links = document.querySelectorAll(".nav-link");
  links.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const page = link.getAttribute("href").substring(1);
      loadContent(page);
      links.forEach((link) => link.classList.remove("active"));
      link.classList.add("active");
    });
  });
});
