let slideIndex = 0;
showSlides(slideIndex);

// Функція для встановлення поточного слайда за номером
function currentSlide(n) {
  showSlides(slideIndex = n);
}

// Функція для відображення слайдів
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");

  if (n >= slides.length) {
    slideIndex = 0; // Перемотка на перший слайд
  } else if (n < 0) {
    slideIndex = slides.length - 1; // Перемотка на останній слайд
  }

  // Ховаємо всі слайди
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Забираємо клас "active" у всіх індикаторів
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // Відображаємо поточний слайд і додаємо клас "active" до відповідного індикатора
  slides[slideIndex].style.display = "block";
  dots[slideIndex].className += " active";
}

// Функція для автоматичної зміни слайдів кожні 5 секунд (якщо потрібно)
function autoSlideShow() {
  slideIndex++;
  showSlides(slideIndex);
  setTimeout(autoSlideShow, 5000); // 5 секунд для кожного слайда
}

// Запуск автоматичного слайд-шоу (при бажанні)
autoSlideShow();



const slider = document.querySelector('.end');
const slides = document.querySelectorAll('.cardo');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentIndex = 0;
const slidesToShow = 3; // Кількість видимих слайдів
const totalSlides = slides.length;
const maxIndex = totalSlides - slidesToShow; // Остання позиція, на якій зупиняється слайдер

prevBtn.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateSliderPosition();
  }
  checkButtons();
});

nextBtn.addEventListener('click', () => {
  if (currentIndex < maxIndex) {
    currentIndex++;
    updateSliderPosition();
  }
  checkButtons();
});

function updateSliderPosition() {
  // Зсув слайдера в залежності від поточного індексу
  slider.style.transform = `translateX(-${currentIndex * (100 / slidesToShow)}%)`;
}

function checkButtons() {
  // Блокуємо кнопку "Назад", якщо слайдер на початку
  prevBtn.disabled = currentIndex === 0;
  // Блокуємо кнопку "Вперед", якщо слайдер досяг останніх трьох слайдів
  nextBtn.disabled = currentIndex === maxIndex;
}

// Перевірка кнопок при завантаженні сторінки
checkButtons();