'use strict';

const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const currentScore0El = document.getElementById('current--0');
const currentScore1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--newl');
const btnHold = document.querySelector('.btn--hold');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

let currentScore = 0;
// console.log(dice);

const randomDice = () => {
  const dice = Math.trunc(Math.random() * 6) + 1;
  diceEl.src = `./img/dice-${dice}.png`;
  diceEl.classList.remove('hidden');
};
console.log(currentScore);
btnRoll.addEventListener('click', randomDice);
