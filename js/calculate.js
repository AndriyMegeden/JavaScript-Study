const switches = document.getElementsByClassName("switch"),
  change = document.getElementsByClassName("change"),
  result = document.querySelector(".result");
let sex = "female",
  height,
  weight,
  age,
  radio = 1.375;

function calcTotal() {
  if (!sex || !height || !weight || !age || !radio) {
    result.textContent = "____";
    return;
  }

  if (sex === "female") {
    result.textContent =
      Math.round((447.6 + 9.2 * weight + 3.1 * height - 4.3 * age) * radio) + " ккал";
  } else {
    result.textContent =
      Math.round((88.36 + 13.4 * weight + 4.8 * height - 5.7 * age) * radio) + " ккал";
  }
}

function getStaticInfo(parentSelector, activeClass) {
  const elements = document.querySelectorAll(`${parentSelector} div`);

  document.querySelector(parentSelector).addEventListener("click", (event) => {
    if (event.target.getAttribute("data-radio")) {
      radio = +event.target.getAttribute("data-radio");
    } else {
      sex = event.target.getAttribute("id");
    }

    elements.forEach((elem) => {
      elem.classList.remove(activeClass);
    });

    event.target.classList.add(activeClass);

    calcTotal();
  });
}

getStaticInfo("#gender", "switch-active");
getStaticInfo("#shoose-big", "switch-active");

function getDynamicInfo(selector) {
  const input = document.querySelector(selector);
  input.addEventListener("input", () => {
    switch (input.getAttribute("id")) {
      case "height":
        height = +input.value;
        break;
      case "weight":
        weight = +input.value;
        break;
      case "age":
        age = +input.value;
        break;
    }
    calcTotal();
  });
}

getDynamicInfo('#height');
getDynamicInfo('#weight');
getDynamicInfo('#age');
