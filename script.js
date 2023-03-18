(() => {
  document.getElementById("date").textContent = new Date().getFullYear();

  document.querySelector(".hire-me").addEventListener("click", () => {
    window.open("mailto:Adewumiabeeb97@gmail.com", "_blank").focus();
  });

  document.querySelector(".chat").addEventListener("click", () => {
    window.open("https://wa.me/2348032055689", "_blank").focus();
  });

  /** COPIED FROM W3SCHOOLS.COM */
  let slideIndex = 1;
  showSlides(slideIndex);

  function plusSlides(n) {
    showSlides((slideIndex += n));
  }

  function currentSlide(n) {
    showSlides((slideIndex = n));
  }

  document
    .querySelector(".prev")
    .addEventListener("click", () => plusSlides(-1));
  document
    .querySelector(".next")
    .addEventListener("click", () => plusSlides(1));

  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
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
  /** COPIED FROM W3SCHOOLS.COM */
}

)();
