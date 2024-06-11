const slides = document.querySelectorAll(".slide"),
  dotsContainer = document.querySelector(".switcher"),
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

slides.forEach((slide, index) => {
  const dot = document.createElement("div");
  dot.classList.add("dot");
  dot.index = index + 1;
  dotsContainer.appendChild(dot);

  if (index === 0) {
    dot.classList.add("dot-active");
  }
});

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

  const dots = document.querySelectorAll(".dot");
  dots.forEach((dot, index) => {
    if (index === slideIndex - 1) {
      dot.classList.add("dot-active");
    } else {
      dot.classList.remove("dot-active");
    }
  });
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
