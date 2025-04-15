import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {

  const value = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  const element = ["♦","♥", "♠", "♣"];

  const randomValue = value[Math.floor(Math.random() * value.length)];
  const randomElement = element[Math.floor(Math.random () * element.length)];

  
  document.querySelector("#center").textContent = randomValue;
  document.querySelector("#left").textContent = randomElement;
  document.querySelector("#right").textContent = randomElement;


  if (randomElement === "♥" || randomElement === "♦") {
    document.querySelector("#left").style.color = "red";
    document.querySelector("#right").style.color = "red";
  }

  
  console.log("Hello Rigo from the console!");
};
