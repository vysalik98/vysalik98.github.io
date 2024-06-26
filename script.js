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
      var x = document.getElementById("mynav");
      x.className = "navbar";
    });
}

function myFunction() {
  var x = document.getElementById("mynav");
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }
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

function toggleDropdown(element) {
  const jobElement = element.closest(".job");

  const dropdownContent = jobElement.querySelector(".dropdown-content");

  const arrowBtn = element; // or use jobElement.querySelector if the arrow is a specific child

  if (
    dropdownContent.style.display === "none" ||
    !dropdownContent.style.display
  ) {
    dropdownContent.style.display = "block";
    arrowBtn.classList.add("rotate"); // Add rotate class to indicate dropdown is open
  } else {
    dropdownContent.style.display = "none";
    arrowBtn.classList.remove("rotate"); // Remove rotate class to indicate dropdown is closed
  }
}

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}
function currentSlide(n) {
  showSlides((slideIndex = n));
}
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("carousel-item");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}
