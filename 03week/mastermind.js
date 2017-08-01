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
  let solutionArrayItem;
  let guessArrayItem;
  //this for loop loops through the solution array
  for (let i = 0; i < solutionArray.length; i++) {
    solutionArrayItem = solutionArray[i];
    console.log(solutionArray[i]);
  }
  //this loops through the guess array
  for (let i = 0; i < guessArray.length; i++) {
    guessArrayItem = guessArray[i];
    console.log(guessArray[i]);
  }


  //logic to compare array items and operate on those to generate hint
  if (solutionArrayItem === guessArrayItem) {
    console.log('match Solution: ' + solutionArrayItem + 'Guess: ' + guessArray[i]);
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
