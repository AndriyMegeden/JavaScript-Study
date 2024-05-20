"use strict";
// дії з елементами на сторінці

// Вибирає елемент з ідентифікатором "box"
const box = document.getElementById("box"),
  //Вибирає всі елементи <button> на сторінці
  btns = document.getElementsByTagName("button"),
  //  Вибирає всі елементи з класом "circle"
  circles = document.getElementsByClassName("circle"),
  // : Вибирає всі елементи з тегом <heart>
  hearts = document.querySelectorAll("heart"),
  // Вибирає перший елемент <button>
  btn = document.querySelector("button");

box.style.backgroundColor = "green";

box.style.cssText = "border-radius: 20px; width: 500px";

// перемикач
let isFirstButtonActive = true;

btns[0].addEventListener("click", () => {
  if (!isFirstButtonActive) {
    btns[0].style.backgroundColor = "green";
    btns[1].style.backgroundColor = "black";
    isFirstButtonActive = true;
  }
});

btns[1].addEventListener("click", () => {
  if (isFirstButtonActive) {
    btns[1].style.backgroundColor = "green";
    btns[0].style.backgroundColor = "black";
    isFirstButtonActive = false;
  }
});

let data = { movies: [] }; // Початкові дані

// Функція для збереження даних у локальному сховищі
function saveData() {
  localStorage.setItem("moviesData", JSON.stringify(data));
}

// Перевірка, чи є дані у локальному сховищі
let savedData = localStorage.getItem("moviesData");

// Якщо дані вже збережені у локальному сховищі, використовуйте їх
if (savedData) {
  data = JSON.parse(savedData);
} else {
  // Інакше збережіть початкові дані у локальному сховищі
  saveData();
}

// Функція для відображення масиву на сторінці
function displayMovies() {
  const container = document.getElementById("container");
  container.innerHTML = ""; // Очистка контейнера перед відображенням

  data.movies.forEach((item, index) => {
    // якщо фільм длінніше 11 символів то 3 крапки 
    if (item.length > 11) {
      item = `${item.substring(0, 12)}...`;
    }

    const div = document.createElement("div");
    div.textContent = item;

    div.setAttribute("data-index", index); // Додавання data-index атрибуту
    div.addEventListener("click", removeMovie);
    container.appendChild(div);
  });
}

// для видалення фільму
function removeMovie(event) {
  const index = event.target.getAttribute("data-index"); // Отримайте індекс фільму
  data.movies.splice(index, 1); // Видаліть фільм з масиву
  saveData(); // Збережіть оновлені дані у локальному сховищі
  displayMovies(); // Оновіть вміст контейнера з масивом
}

displayMovies(); // Перша ініціалізація вмісту контейнера

// Додавання події на форму
const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault(); // Перешкоджаємо стандартному поведінці форми

  const input = document.querySelector("input");
  const inputValue = input.value.trim(); // Отримання значення з інпута та видалення зайвих пробілів

  if (inputValue !== "") {
    // Перевірка, чи інпут не порожній
    data.movies.push(inputValue); // Додавання введеного значення до масиву
    saveData(); // Збереження оновлених даних у локальному сховищі
    displayMovies(); // Оновлення вмісту контейнера з масивом
    input.value = ""; // Очищення інпута після додавання значення до масиву
  }
});
