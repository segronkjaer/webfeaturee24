// script.js
window.addEventListener("scroll", function () {
  const parallaxBox = document.querySelector(".parallax-box");
  const scrollPosition = window.pageYOffset;

  // Flyt hele boksen op og ned afhængig af scrollPosition
  parallaxBox.style.transform = "translateY(" + scrollPosition * 0.3 + "px)";

  // Hvis du vil have forskellige hastigheder på individuelle elementer:
  const heading = document.querySelector(".parallax-box h1");
  const paragraphs = document.querySelectorAll(".parallax-box p");
  const images = document.querySelectorAll(".parallax-box img");

  heading.style.transform = "translateY(" + scrollPosition * 0.2 + "px)";
  paragraphs.forEach((paragraph) => {
    paragraph.style.transform = "translateY(" + scrollPosition * 0.4 + "px)";
  });
  images.forEach((image) => {
    image.style.transform = "translateY(" + scrollPosition * 0.5 + "px)";
  });
});
