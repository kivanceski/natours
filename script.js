"use strict";

// document.querySelectorAll(".navigation__item").forEach((item) => {
//   item.addEventListener();
// });

const navList = document.querySelector(".navigation__list");
const navCheckbox = document.querySelector(".navigation__checkbox");
const popup = document.querySelector(".popup");
const popupContent = document.querySelector(".popup__content");
const popupButtons = document.querySelectorAll(".btn-popup");
const popupClose = document.querySelector(".popup__close");

navList.addEventListener("click", function (e) {
  if (e.type === "click") navCheckbox.checked = false;
});

popupButtons.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    popup.classList.remove("hidden");
    popupContent.classList.remove("hidden");
    popupContent.classList.add("scale");
  });
});

popup.addEventListener("click", function (e) {
  const element = e.target.closest(".popup__content");
  // console.log(element);
  if (!element) {
    popup.classList.add("hidden");
    popupContent.classList.remove("scale");
  }
});

popupClose.addEventListener("click", function (e) {
  e.preventDefault();
  popup.classList.add("hidden");
  popupContent.classList.remove("scale");
});
