// ==UserScript==
// @name         Market Average
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://play.farsite.online/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=farsite.online
// @grant        none
// ==/UserScript==

let price = "";
let quantity = "";
setInterval(() => {
  const position = document.querySelector(".MarketPositionHeadline_block");
  price = document.querySelectorAll(".MarketOrdersTable_column.-price");
  quantity = document.querySelectorAll(".MarketOrdersTable_column.-quantity");
  
  btn.innerHTML = "";
  totalQuantity = 0;
  totalPrice = 0;
  getPrice();
  btn.innerHTML = (totalPrice / totalQuantity).toFixed(0);
  
  if (position) {
    position.append(div);
  }
}, 10000);

let totalQuantity = 0;
let totalPrice = 0;
function getPrice() {
  for (let i = 1; i < quantity.length; i++) {
    const filters = Number(price[i].innerText.match(/\d/g).join(""));
    const qty = Number(quantity[i].innerText.match(/\d/g).join(""));
    totalQuantity += qty;
    totalPrice += filters * qty;
  }
}
const div = document.createElement("div");
div.style.padding = "5px";
div.style.marginLeft = "10px";

const btn = document.createElement("button");
div.append(btn);
