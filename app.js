"use strict";

let cursor = document.querySelector("#cursor");

document.addEventListener("mousemove", (el) => {
    let x = el.clientX;
    let y = el.clientY;

    cursor.style.left = x + "px"
    cursor.style.top = y + "px"
})