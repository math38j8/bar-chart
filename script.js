
"use strict";

const valuesArr = [];
let newDiv;
let theNumber = 1;
let randomNumber;
let arrLength = 0;

loop();

function loop() {
  randomNumber = Math.floor(Math.random() * 32);  //making a random number
  arrLength++;                                    //arrLength should add 1 everytime it loops
  if (arrLength < 40) {                           //if arrLength is smaller than 40
    valuesArr.push(randomNumber);                 //adds random number in the end of the array
    console.log(valuesArr);
    setTimeout(loop, 1000);                       //after 1000 ms call loop function again
    displayBars();                               
  } else {                                        //if arrLength is not smaller than 40 then...
    valuesArr.push(randomNumber);                 //adds random number in the end of the array
    valuesArr.shift();                            //removes the first content in the array
    console.log(valuesArr);
    setTimeout(loop, 1000);                       //after 1000 ms call loop function again
    displayBars();
  }
}

function displayBars() {
  if (arrLength < 40) {
    newDiv = document.createElement("div");                     //creates element div
    document.querySelector("#chart").appendChild(newDiv);       //append the new div in the #chart
    addClass();
  } else {
    document.querySelector("#chart").firstChild.remove();       //removes the first child of the #chart
    newDiv = document.createElement("div");                     //creates element div
    document.querySelector("#chart").appendChild(newDiv);       //append the new div in the #chart
    addClass();
  }
}

function addClass() {
  newDiv.setAttribute("class", "bar");                          //set attribute class and bar on the new div
  newDiv.style.height = `${randomNumber / 2}vw`;                //styles the height of the new divs with a random number
  newDiv.style.opacity = `${randomNumber * 3}%`;                //styles the opacity of the new divs with a random number
}  