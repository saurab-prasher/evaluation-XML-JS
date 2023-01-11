"use strict";

console.log("Hello world");

const email = document.querySelector(".email");
const date = document.querySelector(".date");
const textArea = document.querySelector(".text-area");

const formSubmitBtn = document.querySelector(".form-submit");

const form = document.querySelector(".form");

const userFeedback = document.querySelector(".user-feedback");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  userFeedback.innerHTML = `
  <h3>User Email: ${email.value}</h3>
  <div>Date Entered by the user: ${date.value}</div>
  <div>User Feedback: ${textArea.value}</div>
  `;
  email.value = "";
  date.value = "";
  textArea.value = "";
  console.log("form submitted");
});
