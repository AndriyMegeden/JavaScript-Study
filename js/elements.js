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
