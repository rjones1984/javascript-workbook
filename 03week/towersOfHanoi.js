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

function movePiece(startStack, endStack, lastIndexOfStart) {
  // Your code here
  var piece = lastIndexOfStart;
  stacks[startStack].pop(piece);
  stacks[endStack].push(piece);
}

function isLegal(start, end) {
  // Your code here
  if (!end || start < end) {
    return true;
    // var poppedPiece = stacks[startStack].pop();
  } else {
    console.log('invalid move');
    return false;
  }
}

function checkForWin(endStack) {
  // Your code here
  var stackLength = stacks[endStack].length
  if (stackLength === 4) {
    console.log('Win Win Winnnnn!!!');
  }

  // console.log(stacks[endStack].length + 'hey');
}

function towersOfHanoi(startStack, endStack) {
  // // Your code here
  var lastIndexOfStart;
  var lastIndexOfEnd;
  //the variable assignment below holds last item from startStack
  lastIndexOfStart = stacks[startStack][stacks[startStack].length - 1];
  //the variable assignment below holds last item in endStack
  lastIndexOfEnd = stacks[endStack][stacks[endStack].length - 1];

  if (isLegal(lastIndexOfStart, lastIndexOfEnd)) {
    movePiece(startStack, endStack, lastIndexOfStart);
    checkForWin(endStack);

  }
}
// a random array to explain how the last number is accessed
// var array = [1, 2, 3, 4];
// console.log(array[array.length - 1]);

//this function call checks to see is a move is legal

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
