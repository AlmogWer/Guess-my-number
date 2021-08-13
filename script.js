'use strict';

// defining variables
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
const number = document.querySelector(`.number`);
const body = document.querySelector(`body`);
const guessNumber = document.querySelector(`.guess`);
const currentScore = document.querySelector(`.score`);
const displayMessage = function (message) {
  document.querySelector(`.message`).textContent = message;
};

//Check button
document.querySelector(`.check`).addEventListener(`click`, function () {
  const guess = Number(guessNumber.value);
  //Number validation
  if (!guess) {
    displayMessage(`🚫 Please input a valid number`);
    //Correct guess
  } else if (guess === secretNumber) {
    displayMessage(`🐱‍🏍 Well done!`);
    number.textContent = secretNumber;
    body.style.backgroundColor = `#60b347`;
    number.style.width = `30rem`;
    //In case of high-score
    if (score > highScore) highScore = score;
    document.querySelector(`.highscore`).textContent = highScore;
    //In case the guess is wrong
  } else if (guess !== secretNumber) {
    //Score validation
    if (score > 1) {
      displayMessage(guess > secretNumber ? `📈 Too high!` : `📉 Too low!`);
      score--;
      currentScore.textContent = score;
      //Incase score is 0
    } else {
      displayMessage(`😒 You lost`);
      currentScore.textContent = 0;
      score = 0;
    }
  }
});
// defining "again" button
document.querySelector(`.again`).addEventListener(`click`, function () {
  secretNumber = Math.trunc(Math.random() * 6) + 1;
  score = 20;
  body.style.backgroundColor = `#222`;
  number.style.width = `15rem`;
  number.textContent = `?`;
  displayMessage(`Start guessing...`);
  guessNumber.value = ``;
  currentScore.textContent = score;
});
