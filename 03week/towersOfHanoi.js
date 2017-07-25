'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};

// var lastIndex = stacks[startStack].length - 1;
// stacks['a'][lastIndex]

function printStacks() {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

function movePiece(piece, endStack) {
  // Your code here
  stacks[endStack].push(piece);
  console.log(stacks[endStack] + ' & ' + piece + ': pieces pushed');
}

function isLegal() {
  // Your code here

}

function checkForWin(endStack) {
  // Your code here
  if (stacks[endStack].length === 4) {
    console.log('winwinwin');
  }

  // console.log(stacks[endStack].length + 'hey');
}

function towersOfHanoi(startStack, endStack) {
  // // Your code here
  var lastIndexOfStart;
  var lastIndexOfEnd;
  //the variable assignment below hold last item from startStack
  lastIndexOfStart = stacks[startStack][stacks[startStack].length - 1];
  //the variable assignment below holds last item in endStack
  lastIndexOfEnd = stacks[endStack][stacks[endStack].length - 1];

// a random array to explain how the last number is accessed
// var array = [1, 2, 3, 4];
// console.log(array[array.length - 1]);

//this statement checks to see is a move is legal
  if (!lastIndexOfEnd || lastIndexOfStart < lastIndexOfEnd) {
    var poppedPiece = stacks[startStack].pop();
    movePiece(poppedPiece, endStack);
    checkForWin(endStack);
  } else {
    console.log('invalid move');
  }

  // console.log(stacks.a.pop([-1]));
  // console.log(stacks.a.slice(-1));
}

function getPrompt() {
  printStacks();
  rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
      towersOfHanoi(startStack, endStack);
      getPrompt();
    });
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#towersOfHanoi()', () => {
    it('should be able to move a block', () => {
      towersOfHanoi('a', 'b');
      assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] });
    });
  });

  describe('#isLegal()', () => {
    it('should not allow an illegal move', () => {
      stacks = {
        a: [4, 3, 2],
        b: [1],
        c: []
      };
      assert.equal(isLegal('a', 'b'), false);
    });
    it('should allow a legal move', () => {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      };
      assert.equal(isLegal('a', 'c'), true);
    });
  });
  describe('#checkForWin()', () => {
    it('should detect a win', () => {
      stacks = { a: [], b: [4, 3, 2, 1], c: [] };
      assert.equal(checkForWin(), true);
      stacks = { a: [1], b: [4, 3, 2], c: [] };
      assert.equal(checkForWin(), false);
    });
  });
} else {

  getPrompt();

}
