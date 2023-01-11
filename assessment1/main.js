"use strict";

console.log("Hello world");

const messageBox = document.querySelector(".message");
const button = document.querySelector(".btn");
const MY_NAME = "Saurab Prasher";
const btnClear = document.querySelector(".btn-clear");

button.addEventListener("click", () => {
  messageBox.textContent = MY_NAME;
});
btnClear.addEventListener("click", () => {
  messageBox.textContent = "";
});
