function loadContent(page) {
  fetch(page + ".html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("content").innerHTML = data;
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
