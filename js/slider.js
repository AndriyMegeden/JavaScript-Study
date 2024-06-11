const slides = document.querySelectorAll(".slide"),
  prev = document.querySelector(".left-arrow"),
  next = document.querySelector(".right-arrow"),
  total = document.querySelector(".total"),
  current = document.querySelector(".current");
let slideIndex = 1;

showSlides(slideIndex);

if (slides.length < 10) {
  total.textContent = `0${slides.length}`;
} else {
  total.textContent = slides.length;
}

function showSlides(n) {
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  slides.forEach((item) => (item.style.display = "none"));
  slides[slideIndex - 1].style.display = "block";

  if (slides.length < 10) {
    current.textContent = `0${slideIndex}`;
  } else {
    current.textContent = slides.length;
  }
}

function plusSlides(n) {
  showSlides((slideIndex += n));
}

prev.addEventListener("click", () => {
  plusSlides(-1);
});

next.addEventListener("click", () => {
  plusSlides(+1);
});
