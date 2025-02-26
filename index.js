/////////Кнопки на слайдере/////////////
const slides = document.querySelectorAll(".buy");
const circles = document.querySelectorAll(".circle");

function resetCircles() {
  circles.forEach((circle) => {
    circle.classList.remove("circle-active");
  });
}

const observerCallback = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const index = Array.from(slides).indexOf(entry.target);
      resetCircles();
      if (circles[index]) {
        circles[index].classList.add("circle-active");
      }
    }
  });
};

const observer = new IntersectionObserver(observerCallback, {
  root: null,
  threshold: 0.5,
});

slides.forEach((slide) => {
  observer.observe(slide);
});
