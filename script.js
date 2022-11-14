'use strict';

const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
// const currentScore0El = document.getElementById('current--0');
// const currentScore1El = document.getElementById('current--1');

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

const diceEl = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNew = document.querySelector('.btn--new');

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

const scores = [0, 0];
let activePlayer = 0;
let currentScore = 0;
let playing = true;
// console.log(dice);

const switchPlayer = () => {
  if (playing) {
    currentScore = 0;

    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;

    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
    activePlayer = activePlayer === 0 ? 1 : 0;
  }
};

const randomDice = () => {
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;
    diceEl.src = `./img/dice-${dice}.png`;
    diceEl.classList.remove('hidden');

    if (dice !== 1) {
      currentScore += dice;

      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
};

const addScore = () => {
  scores[activePlayer] += currentScore;

  document.getElementById(`score--${activePlayer}`).textContent =
    scores[activePlayer];

  //   switchPlayer();

  if (scores[activePlayer] >= 10) {
    playing = false;
    //   inny(moj) sposób na to
    // btnHold.removeEventListener('click', addScore);
    // btnRoll.removeEventListener('click', randomDice);

    currentScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
    diceEl.classList.add('hidden');
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove('player--active');
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add('player--winner');
  } else {
    switchPlayer();
  }
};

const newGame = () => {
  playing = true;
  score0El.textContent = 0;
  score1El.textContent = 0;
  currentScore = 0;

  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;

  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--winner');

  scores[0] = 0;
  scores[1] = 0;
  activePlayer = 0;

  document
    .querySelector(`.player--${activePlayer}`)
    .classList.add('player--active');

  diceEl.classList.add('hidden');
};

btnRoll.addEventListener('click', randomDice);
btnHold.addEventListener('click', addScore);
btnNew.addEventListener('click', newGame);
