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
let solutionArray = solution.split("");

function printBoard() {1
  for (let i = 0; i < board.length; i++) {
    console.log(board[i]);
  }
}

function generateHint(guessArray) {
  // your code here
  let matchCheckArray = [];

  for (let i = 0; i < 4; i++) {
    let solIndex = solutionArray.indexOf(solutionArray[i]);
    for (let j = 0; j < 4; j++) {
      console.log('I: ' + solutionArray[i] + ' ' + 'J: ' + guessArray[j]);
      let guessIndex = guessArray.indexOf(guessArray[j]);
      if (solutionArray[i] === guessArray[j]) {
        guessIndex ++;
        console.log(guessArray[j] + guessIndex + ' [j], index');
      }
    }
  } console.log(guessArray);
  return;
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
