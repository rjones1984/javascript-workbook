'use strict';

const assert = require('assert');

function forEach(array, callback) {
  for (let i = 0; i < array.length; i++) {
    callback();
  }
}

function map(arr, callback) {
  // Your code here
  let results = [];
  for (let i = 0; i < arr.length; i++) {
    results.push(callback(arr[i]));
  }
  return results;
}

function add(num) {
  return num + num;
}

map([1,2,3,4], add );

function filter(arr, callback) {
  // Your code here
  let results = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      results.push(arr[i]);
    }
  }
  return results;
}

function moreThan2(num) {
  return num > 2;
}

filter([1,2,3,4,5,6,7], moreThan2 );

function some(arr, callback) {
  // Your code here
}
// 4) should return true if at all passes the predicate test
// 5) should return false if any item fails the predicate test
// 6) should stop at the first item that fails the predicate test

//the purpose of the every() method is to return true only when each array item === true, else: false

function every(arr, callback) {

  for (let i = 0; i < arr.length; i++) {
    if (!callback(arr[i])) {
      return false;
    } 
  }
  return;
}

function startsWithB(name) {
  if (name.charAt(0) === 'b') {
    return true;
  } else if (name.charAt(0) !== 'b') {
    return false;
  }
}

every(['becky', 'blenda', 'suzie', 'dirna', 'plippa', 'bocky', 'furma'], startsWithB);


if (typeof describe === 'function') {

  describe('#forEach()', () => {
    it('should call the callback the array.length number of times', () => {
      let count = 0;
      forEach([1, 2, 3], () => {
        count++;
      });
      assert.equal(count, 3);
    });
  });

  describe('#map()', () => {
    const arr = [1, 2, 3];
    const mapped = map(arr, (num) => {
      return num * num;
    });
    it('should return new array with mapped items', () => {
      assert.deepEqual(mapped, [1, 4, 9]);
    });
    it('should not affect the original array', () => {
      assert.deepEqual(arr, [1, 2, 3]);
    })
  });

  describe('#filter()', () => {
    it('should return an array of items that pass the predicate test', () => {
      const filtered = filter([1, 2, 3], (num) => {
        return num % 2 === 0;
      });
      assert.deepEqual(filtered, [2]);
    });
  });

  describe('#some()', () => {
    let count = 0;
    const somed = some([1, 2, 3, 4], (num) => {
      count++;
      return num % 2 === 0;
    });
    it('should return true if at least one item passes the predicate test', () => {
      assert.equal(somed, true);
    });
    it('should stop at the first item that passes the predicate test', () => {
      assert.equal(count, 2);
    });
    it('should return false if no items pass the predicate test', () => {
      const somed = some([1, 3, 5], (num) => {
        return num % 2 === 0;
      });
      assert.equal(somed, false);
    });
  });

  describe('#every()', () => {
    it('should return true if at all passes the predicate test', () => {
      const everied = every([2, 4, 6], (num) => {
        return num % 2 === 0;
      });
      assert.equal(everied, true);
    });
    let count = 0;
    const everied = every([2, 3, 4, 5], (num) => {
      count++;
      return num % 2 === 0;
    });
    it('should return false if any item fails the predicate test', () => {
      assert.equal(everied, false);
    });
    it('should stop at the first item that fails the predicate test', () => {
      assert.equal(count, 2);
    });
  });

} else {

  console.log('Only run the tests on this one!')

}
