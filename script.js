"use strict";

document.addEventListener("DOMContentLoaded", fetchSvg);

async function fetchSvg() {
  console.log("DOM loaded and ready to fetch");
  let response = await fetch("/shoe.svg");
  console.log("response", response);
  let mySvgData = await response.text();
  console.log("SVG Data", mySvgData);
  document.querySelector(".content").innerHTML = mySvgData;
}

document.querySelector(".colors").addEventListener("click", changeShoeLook);

function changeShoeLook() {}
