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
