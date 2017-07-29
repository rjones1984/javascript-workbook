'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let board = [];
let solution = 'abcd';
let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
let guessArray = [];
let solutionArray = [];
let matchCheckArray = [];

function printBoard() {
  for (let i = 0; i < board.length; i++) {
    console.log(board[i]);
  }
}

// function generateSolution() {
//   for (let i = 0; i < 4; i++) {
//     const randomIndex = getRandomInt(0, letters.length);
//     solution += letters[randomIndex];
//   }
// }
//
// function getRandomInt(min, max) {
//   return Math.floor(Math.random() * (max - min)) + min;
// }

function generateHint(guessArray) {
  // your code here
  solutionArray = solution.split("");
  for (var i = 0; i < solutionArray.length; i++) {
    // console.log(solutionArray.indexOf(solutionArray[i]));
    for (var j = 0; j < guessArray.length; j++) {
      if (solutionArray[i] === guessArray[j]) {
        matchCheckArray.push(solutionArray.indexOf(solutionArray[i]));
        console.log(matchCheckArray);
      }
    }
  }
}

function mastermind(guess) {
  guessArray = guess.split("");
  generateHint(guessArray);

}


function getPrompt() {
  rl.question('guess: ', (guess) => {
    mastermind(guess);
    printBoard();
    getPrompt();
  });
}

// Tests

if (typeof describe === 'function') {
  solution = 'abcd';
  describe('#mastermind()', () => {
    it('should register a guess and generate hints', () => {
      mastermind('aabb');
      assert.equal(board.length, 1);
    });
    it('should be able to detect a win', () => {
      assert.equal(mastermind(solution), 'You guessed it!');
    });
  });

  describe('#generateHint()', () => {
    it('should generate hints', () => {
      assert.equal(generateHint('abdc'), '2-2');
    });
    it('should generate hints if solution has duplicates', () => {
      assert.equal(generateHint('aabb'), '1-1');
    });

  });

} else {

  // generateSolution();
  getPrompt();
}
