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

///////////////Таймер////////////////////
let totalTime = 10 * 60; // 10 минут в секундах

function startTimer() {
  let timeLeft = totalTime;

  const interval = setInterval(() => {
    // Вычисляем минуты и секунды
    const hours = Math.floor(timeLeft / 3600);
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    // Форматируем минуты и секунды, добавляя ноль перед единичными значениями
    const formattedHours = String(hours).padStart(2, "0");
    const formattedMinutes = String(minutes).padStart(2, "0");
    const formattedSeconds = String(seconds).padStart(2, "0");

    // Обновляем текст таймера
    document.getElementById(
      "sale-timer"
    ).textContent = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;

    // Уменьшаем оставшееся время
    timeLeft--;

    // Проверяем, истекло ли время
    if (timeLeft < 0) {
      clearInterval(interval); // Очищаем интервал
      startTimer(); // Перезапускаем таймер
    }
  }, 1000); // Обновляем каждую секунду
}

// Запускаем таймер при загрузке страницы
window.onload = startTimer;

///////////////////hover на кпоках
const buys = document.querySelectorAll(".buy");
const buyButtons = document.querySelectorAll(".buy-now");
const offers = document.querySelectorAll(".offer");

function changeButtons(button, block, offer) {
  button.style.backgroundColor = "#ffcf2d";
  button.style.color = "#000";
  block.style.backgroundColor = "#9564aa";
  offer.style.display = "block";
}

function resetButtons(button, block, offer) {
  button.style.backgroundColor = "#ffffff";
  button.style.color = "#d2d2d2";
  block.style.backgroundColor = "#f5f0f7";
  offer.style.display = "none";
}

buys.forEach((elem) => {
  const button = elem.querySelector(".buy-now");
  const offer = elem.querySelector(".offer");
  button.addEventListener("mouseenter", () =>
    changeButtons(button, elem, offer)
  );
  button.addEventListener("mouseleave", () =>
    resetButtons(button, elem, offer)
  );
});
