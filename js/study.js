const btnss = document.querySelectorAll("button");

// додає клас до кнопки
// так "red", "orange" можна додавати зразу декілька класів
console.log(btnss[0].classList.add("red", "orange"));
// видаляє клас у кнопки
console.log(btnss[1].classList.remove("one"));
// якщо класа не було то toggle його додає.
// якщо клас був то toggle його видаляє
console.log(btnss[0].classList.toggle("white"));

// contains перевіряє чи міститься даний клас в елементі і видає true/false
if (btnss[0].classList.contains("red")) {
  console.log("red");
}

btnss[2].addEventListener("click", () => {
  if (!btnss[2].classList.contains("blue")) {
    btnss[2].classList.add("blue");
  } else {
    btnss[2].classList.remove("blue");
  }
});

// реалізація перемикача іконок по кнопці
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const toggleButton1 = document.getElementById("toggleButton1");
const toggleButton2 = document.getElementById("toggleButton2");

// функція показує картинку
function show(image) {
  image.classList.add("show");
  image.classList.remove("hide");
}

// функція пряче картинку
function hide(image) {
  image.classList.add("hide");
  image.classList.remove("show");
}

toggleButton1.addEventListener("click", () => {
  show(image1);
  hide(image2);
});

toggleButton2.addEventListener("click", () => {
  show(image2);
  hide(image1);
});

// timer
const now = new Date();
console.log(now.getHours());

const deadline = "2024-05-29";

function getTimeRemaining(endtime) {
  const t = Date.parse(endtime) - Date.parse(new Date());
  (days = Math.floor(t / (1000 * 60 * 60 * 24))),
    (hours = Math.floor(((t / 1000) * 60 * 60) % 24)),
    (minutes = Math.floor((t / 1000 / 60) % 60)),
    (seconds = Math.floor((t / 1000) % 60));
  return {
    total: t,
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds,
  };
}

function getZero(num) {
  if (num >= 0 && num < 10) {
    return `0${num}`;
  } else if (num < 0) {
    return "00";
  } else {
    return num;
  }
}

function setClock(selector, endtime) {
  const timer = document.querySelector(selector),
    days = timer.querySelector("#days"),
    hours = timer.querySelector("#hours"),
    minutes = timer.querySelector("#minutes"),
    seconds = timer.querySelector("#seconds");
  timerInterval = setInterval(updateClock, 1000);

  updateClock();

  function updateClock() {
    const t = getTimeRemaining(endtime);

    days.innerHTML = getZero(t.days);
    hours.innerHTML = getZero(t.hours);
    minutes.innerHTML = getZero(t.minutes);
    seconds.innerHTML = getZero(t.seconds);

    if (t.total <= 0) {
      clearInterval(timerInterval);
    }
  }
}

setClock(".timer", deadline);

// 1 варінат
// скрол на початок сторінки по кліку на кнопку
const scrolly = document.getElementById("top-scroll");
scrolly.addEventListener("click", () => {
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0; // для сумісності з Safari
});

// 2 варінат
// Отримуємо всі елементи з класом "top-scroll"
const scrolls = document.getElementsByClassName("top-scroll");

// Перетворюємо HTMLCollection в масив і додаємо обробник подій до кожного елемента
Array.from(scrolls).forEach((scroll) => {
  scroll.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0; // для сумісності з Safari
  });
});



// конвертація валюти

const inputUA = document.getElementById("ua");
const inputUSD = document.getElementById("usd");

inputUA.addEventListener("input", () => {
  const request = new XMLHttpRequest();

  request.open("GET", "json/current.json");
  // спеціальний тип який говорить в якому форматі і як отримувати наші дані
  request.setRequestHeader("Content-type", "application/json; charset=utf-8");
  request.send();

  request.addEventListener("load", () => {
    if (request.status === 200) {
      const data = JSON.parse(request.response);
      inputUSD.value = +inputUA.value / data.current.usd;
    } else {
      inputUSD.value = "something went wrong";
    }
  });
});
