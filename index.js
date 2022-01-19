"use strict";
let score = 0;
let randomVar;
 
let buttonVal = document.getElementsByTagName("button");
let result = document.getElementById("result");
let report = document.getElementById("text-init-loading");
let timeS = document.getElementById("timeS");
let dice = document.getElementById("dice");
const Clicked = (e) => {
  let userSelectedNumber = (e.target.innerText);
  dice.src = `${randomVar}.svg`;
  document.getElementById("text-user-selected").innerHTML = userSelectedNumber;
  document.getElementById("text-user-selected").style.visibility="visible";

  if (randomVar == userSelectedNumber)
   {
    result.style.color = "#1CE1BE";
     
    result.innerHTML = "Your guess is right!";
    score++;
    document.getElementById("text-total-score").innerHTML = score;
     
  } 
  else
   {
    result.style.color = "#FF6D2E";
 
    result.innerHTML = "Sorry, it was a wrong number!";
    
  
  }
  Array.from(buttonVal).forEach(element => 
    {
    element.disabled = true;
    element.classList.toggle("disabled");
  });
 
}
const load = () => {
  
  document.getElementById('h').style.visibility="hidden";
  result.style.visibility="hidden";
  document.getElementById("text-user-selected").style.visibility="hidden";
  Array.from(buttonVal).forEach(element => {
    element.addEventListener("click", Clicked);
    element.disabled = false;
    element.classList.add("disabled");
  });
  setTimeout(() => {
    report.style.visibility="hidden";
    document.getElementById('h').style.visibility="visible";
  }, 6000);
}
const DisplayTime = () => {
  let timesecond =3;
  setInterval(() => {
    timeS.innerHTML = timesecond;
    timesecond--;
    if (timesecond == 0) {
      result.style.color = "#FFFFFF";
      result.innerHTML= "";
      result.style.visibility="visible";
      timesecond =10;
    }
  }, 1000);
}
const addNewRandom = () => {
  setInterval(() => {
    randomVar = Math.floor(Math.random() * 6) + 1;
    dice.src = `load.gif`;
    dice.style.width = "37.5%";
    
    document.getElementById("text-user-selected").style.visibility="hidden";
    Array.from(buttonVal).forEach(element => {
      element.disabled = false;
      element.classList.remove("disabled");
    });}, 10000);
}
 

 
window.onload = () => {
  load();
  DisplayTime();
  addNewRandom();
}