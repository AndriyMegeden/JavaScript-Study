"use strict";
 function n () {
  const b = prompt(`Ваш любимий жанр під номером ${i}`, "");

}

// створення пірамідки вивчення циклу for
let res = "";

for (let i = 1; i < 6; i++) {
  for (let j = 0; j < i; j++) {
    res += "*";
  }
  res += "\n";
}

console.log(res);

//*
//**
//***
//****
//*****
//******

// виведення фільмів в консоль
let personalMovie = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  // метод який перевіряє privat і встановлює протилежне значення
  toggleVisible: function () {
    if (this.privat === false) {
      this.privat = true;
    } else {
      this.privat = false;
    }
  },
};

// тут функція яка виводить в консоль аргумент який їй передадуть
function showMyDB(db) {
  if (!db) {
    console.log(db);
  }
}
// приміняєм showMyDB функцію
showMyDB(personalMovie);
console.log(personalMovie);
// приміняєм toggleVisible метод
personalMovie.toggleVisible();
console.log(personalMovie);

// функція яка видає вікно з номером жанру від 1-3 і записує це в масив genres
function writeGenres() {
  for (let i = 1; i <= 3; i++) {
    const genre = prompt(`Ваш любимий жанр під номером ${i}`, "");
    // якщо пуста строка то вертає назад і видає шо нема даних
    if (genre === "" || genre == null) {
      console.log("немає даних, введіть");
      i--;
    } else {
      personalMovie.genres[i - 1] = genre;
    }
  }
  // перебираєм жанри і виводим масив в консоль
  personalMovie.genres.forEach((item, i) => {
    console.log(`улюблений жанр ${i + 1} назва ${item}`);
  });
}
// вивід в консоль
writeGenres(personalMovie);
console.log(personalMovie);

// цикл шоб видати спливаючі вікна 2 рази перед тим як закінчити
for (let i = 0; i < 2; i++) {
  // ці змінні видають спливаючі вікна з повідомленням
  let HowFilms = prompt("Який фільм ви дивились", "");
  let numberOfFilms = +prompt("Скільки фільмів ви бачили", "");

  // Ця умова перевіряє, чи HowFilms не є пустим рядком і чи numberOfFilms не є відємним числом.
  if (!HowFilms.trim() || !numberOfFilms < 0) {
    alert("Ви ввели некоректні дані. Будь ласка, введіть їх ще раз.");
    i--; // Зменшуємо значення лічильника, щоб цикл виконався ще раз

    continue; // Переходимо до наступної ітерації циклу

    // Ця умова перевіряє, чи numberOfFilms є числом якщо true то воно не є числом
  } else if (isNaN(numberOfFilms)) {
    alert("введіть число");
    i--;
    // У цій умові ми перевіряємо, чи HowFilms не перевищує 50 символів, і чи numberOfFilms не більше 10 000
  } else if (HowFilms.length > 50 || numberOfFilms > 10000) {
    alert("Введені дані занадто довгі. Будь ласка, введіть їх ще раз.");
    i--; // Зменшуємо значення лічильника, щоб цикл виконався ще раз
    continue; // Переходимо до наступної ітерації циклу
  }
  // перевіряєм і додаєм в масив тільки якщо numberOfFilms число а HowFilms string
  if (!isNaN(numberOfFilms) && typeof HowFilms === "string") {
    personalMovie.movies[HowFilms] = numberOfFilms;
    // завдяки += в count сумуються всі значення numberOfFilms
    personalMovie.count += numberOfFilms;
  }
}

if (personalMovie.count <= 15) {
  console.log("мало фільмів");
}

if (personalMovie.count >= 15) {
  console.log("можна і більше");
}

if (personalMovie.count >= 20) {
  console.log("багато фільмів");
}

// виводим в консоль
console.log(personalMovie);

const usd = 28;
const discount = 0.9;

function convert(am, curr) {
  return am * curr;
}

function promotion(result) {
  console.log(result * discount);
}

promotion(convert(200, usd));

const options = {
  name: "test",
  width: 1024,
  height: 1024,
  colors: {
    background: "red",
    border: "blue",
  },
};

for (let key of Object.keys(options)) {
  console.log(key);
  if (typeof options[key] === "object") {
    for (let nestedKey of Object.keys(options[key])) {
      console.log(nestedKey);
    }
  }
}

console.log(Object.values(options));
let counter = 0;

for (let key in options) {
  if (typeof options[key] === "object") {
    for (let i in options[key]) {
      console.log(i, options[key][i]);
      counter++;
    }
  } else {
    console.log(key, options[key]);
    counter++;
  }
}

const arr = [1, 44, 5, 77, 9, 55];
arr.forEach((item, i, r, er) => {
  console.log(i, r, er, item);
});
arr.splice(1, 0, 6, 3);
arr.sort();
arr.reverse();
const newArr = arr.concat(8);
console.log(newArr);


const j = document.getElementsByTagName('button');

console.log(j)