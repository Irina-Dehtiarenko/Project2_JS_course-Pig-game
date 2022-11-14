'use strict';

const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const currentScore0El = document.getElementById('current--0');
const currentScore1El = document.getElementById('current--1');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');

const diceEl = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--newl');
const btnHold = document.querySelector('.btn--hold');

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

const scores = [0, 0];
let activePlayer = 0;

let currentScore = 0;
// console.log(dice);

const randomDice = () => {
  const dice = Math.trunc(Math.random() * 6) + 1;
  diceEl.src = `./img/dice-${dice}.png`;
  diceEl.classList.remove('hidden');

  if (dice !== 1) {
    currentScore += dice;
    console.log(currentScore);

    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;

    // change later
    //    currentScore0El.textContent = currentScore;
  } else {
    currentScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;

    if (activePlayer === 0) {
      activePlayer = 1;
    } else {
      activePlayer = 0;
    }
    console.log(currentScore);

    // change later
    // currentScore0El.textContent = currentScore;

    player0.classList.toggle('player--active');
    player1.classList.toggle('player--active');
  }
};
console.log(currentScore);
btnRoll.addEventListener('click', randomDice);
