"use strict";

// document.querySelectorAll(".navigation__item").forEach((item) => {
//   item.addEventListener();
// });

const navList = document.querySelector(".navigation__list");
const navCheckbox = document.querySelector(".navigation__checkbox");
const popup = document.querySelector(".popup");
const popupContent = document.querySelector(".popup__content");
const popupTarget = document.querySelector(".popup:target");
const popupButtons = document.querySelectorAll(".btn-popup");
const popupClose = document.querySelector(".popup__close");

navList.addEventListener("click", function (e) {
  if (e.type === "click") navCheckbox.checked = false;
});

popupButtons.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    popup.classList.add("visible");
    popupContent.classList.add("visible");
    popupContent.classList.add("zoom-in");
  });
});

popup.addEventListener("click", function (e) {
  const element = e.target.closest(".popup__content");
  console.log(element);
  if (!element) {
    // console.log(popup.classList);
    popup.classList.remove("visible");
    popupContent.classList.remove("visible");
    popupContent.classList.remove("zoom-in");
  }
});
