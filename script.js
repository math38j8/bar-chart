
"use strict";

const valuesArr = [];
let newDiv;
let theNumber = 1;
let randomNumber;
let arrLength = 0;

loop();

function loop() {
  randomNumber = Math.floor(Math.random() * 32);
  arrLength++;
  if (arrLength < 40) {
    valuesArr.push(randomNumber);
    console.log(valuesArr);
    setTimeout(loop, 1000);
    displayBars();
  } else {
    valuesArr.push(randomNumber);
    valuesArr.shift();
    console.log(valuesArr);
    setTimeout(loop, 1000);
    displayBars();
  }
}

function displayBars() {
  if (arrLength < 40) {
    newDiv = document.createElement("div");
    document.querySelector("#chart").appendChild(newDiv);
    addClass();
  } else {
    document.querySelector("#chart").firstChild.remove();
    newDiv = document.createElement("div");
    document.querySelector("#chart").appendChild(newDiv);
    addClass();
  }
}

function addClass() {
  newDiv.setAttribute("class", "bar");
  newDiv.style.height = `${randomNumber / 2}vw`;
  newDiv.style.opacity = `${randomNumber * 3}%`;
}