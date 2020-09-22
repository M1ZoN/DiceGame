// First Dice Generator
let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomDice1 = "images/dice" + randomNumber1 + ".png";
let dice1 = document.querySelector(".img1");
dice1.setAttribute("src", randomDice1);

// Second Dice generator
let randomNumber2 = Math.floor(Math.random() * 6) + 1;
let randomDice2 = "images/dice" + randomNumber2 + ".png";
let dice2 = document.querySelector(".img2");
dice2.setAttribute("src", randomDice2);

//Title Changer
let title = document.querySelector("h1");
if (randomNumber1 > randomNumber2) {
  title.innerHTML = "🚩 Player 1 Wins!";
} else if (randomNumber2 > randomNumber1) {
  title.innerHTML = "Player 2 Wins! 🚩";
} else {
  title.innerHTML = "Draw!";
}
