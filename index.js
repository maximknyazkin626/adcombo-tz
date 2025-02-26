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
                const formattedHours = String(hours).padStart(2, '0');
                const formattedMinutes = String(minutes).padStart(2, '0');
                const formattedSeconds = String(seconds).padStart(2, '0');

                // Обновляем текст таймера
                document.getElementById('sale-timer').textContent = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;

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