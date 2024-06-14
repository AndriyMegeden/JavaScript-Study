// const { response } = require("express");

// const { method } = require("lodash");

class MenuCard {
  constructor(src, title, descr, price, parentSelector) {
    this.src = src;
    this.title = title;
    this.descr = descr;
    this.price = price;
    this.parent = document.querySelector(parentSelector);
    this.transfer = 40;
    this.chage();
  }

  chage() {
    this.price = this.price * this.transfer;
  }

  render() {
    const element = document.createElement("div");
    element.innerHTML = `
      <div class="menu_item">
        <img src=${this.src} alt="" />
        <h3 class="title">${this.title}</h3>
        <div class="text">
          ${this.descr}
        </div>
        <div class="price">
          <div>Price</div>
          <div>${this.price} грн</div>
        </div>
      </div>
      `;
    this.parent.append(element);
  }
}

// отримуємо дані з нашого серверу і таким чином заповнюємо карточки
const getInfoAboutCards = async (url) => {
  const res = await fetch(url, { method: "GET" });

  if (!res.ok) {
    throw new Error("problem");
  }

  return await res.json();
};

getInfoAboutCards("http://localhost:3000/menu").then((data) => {
  data.forEach(({ img, title, descr, price }) => {
    new MenuCard(img, title, descr, price, ".menu").render();
  });
});

// відправляєм дані з нашого інпута на сервер
const data = document.getElementById("email");

data.addEventListener("blur", () => {
  const email = data.value; // Отримати значення з інпута

  // Виконати HTTP-запит на сервер
  fetch("http://localhost:3000/requests", {
    method: "POST", // Вказати метод (наприклад, POST для відправки даних)
    headers: {
      "Content-Type": "application/json", // Вказати тип вмісту
    },
    body: JSON.stringify({ email: email }), // Відправити дані у форматі JSON
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json(); // Повернути JSON-відповідь від сервера
    })
    .then((data) => {
      console.log("Success:", data); // Обробити успішну відповідь
    })
    .catch((error) => {
      console.error("Error:", error); // Обробити помилку
    });
});

// видалення останнього емейлу
const deleteEmailButton = document.querySelector("button");

deleteEmailButton.addEventListener("click", () => {
  // Спочатку отримуємо всі записи
  fetch("http://localhost:3000/requests")
    .then((response) => response.json()) // Перетворюємо відповідь у JSON
    .then((data) => {
      if (data.length === 0) {
        alert("Немає записів для видалення");
        return;
      }

      // Отримуємо останній запис
      const lastRecord = data[data.length - 1];
      const lastRecordId = lastRecord.id;

      // Видаляємо останній запис за його ідентифікатором
      fetch(`http://localhost:3000/requests/${lastRecordId}`, {
        method: "DELETE",
      }).then((response) => {
        if (response.ok) {
          alert("Останній запис видалено");
        } else {
          alert("Помилка при видаленні запису");
        }
      });
    })
    .catch((error) => {
      console.error("Помилка при отриманні записів:", error);
    });
});





// Видалення всіх емейлів
const deleteAllEmailButton = document.getElementById("all");

deleteAllEmailButton.addEventListener("click", () => {
  // Спочатку отримуємо всі записи
  fetch("http://localhost:3000/requests")
    .then((response) => response.json()) // Перетворюємо відповідь у JSON
    .then((data) => {
      if (data.length === 0) {
        alert("Немає записів для видалення");
        return;
      }

      // Видаляємо кожен запис
      const deletePromises = data.map(record => {
        return fetch(`http://localhost:3000/requests/${record.id}`, {
          method: "DELETE",
        });
      });

      // Чекаємо, поки всі запити завершаться
      Promise.all(deletePromises)
        .then(responses => {
          const allDeleted = responses.every(response => response.ok);
          if (allDeleted) {
            alert("Всі записи видалено");
          } else {
            alert("Помилка при видаленні деяких записів");
          }
        })
        .catch((error) => {
          console.error("Помилка при видаленні записів:", error);
        });
    })
    .catch((error) => {
      console.error("Помилка при отриманні записів:", error);
    });
});
