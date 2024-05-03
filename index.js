// // May 5 2024 Mohamad Al-Nakib

// var randomNumber2 = Math.random();
// randomNumber1 = randomNumber1 * 6;
// randomNumber1 = Math.floor(randomNumber1) + 1;

// var randomNumber2 = Math.random();
// randomNumber2 = randomNumber2 * 6;
// randomNumber2 = Math.floor(randomNumber2) + 1;

//Generate a random number between 1 and 6
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

console.log(randomNumber1 + " " + randomNumber2);

//Change src from dice1.png to dice6.png
var image1 = `./images/dice${randomNumber1}.png`; 
var image2 = `./images/dice${randomNumber2}.png`;

document.querySelector(".img1").setAttribute("src", image1);
document.querySelector(".img2").setAttribute("src", image2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").textContent = "Player 1 Wins 🚩";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").textContent = "🚩 Player 2 Wins";
} else {
  document.querySelector("h1").textContent = "DRAW";
}
