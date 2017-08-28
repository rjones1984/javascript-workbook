
document.addEventListener('DOMContentLoaded', () => {
  'use strict';
  // Your code here
  let toggle = true;

//the code below allows pieces to be placed on board and alternates between X and O
  document.querySelectorAll('[data-cell]').forEach((div) => {
    div.addEventListener('click', (e) => {
      if (!e.target.innerHTML) {
        e.target.innerHTML = toggle ? 'X' : 'O';
        toggle = !toggle;
      } else {
        alert('stop it');
      }
    });
  });

//the code below resets or "clears" the board
  document.querySelector('button').addEventListener('click', (e) => {
    console.log('heyoo');
    document.querySelectorAll('[data-cell]').forEach((div) => {
      div.innerHTML = "";
      toggle = true;
    });
  });

//the code below checks for a win
  function checkForWin() {
    let wins = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    let coords = [];
    let index1 = [];//array for x
    let index2 = [];

    document.querySelectorAll('[data-cell]').forEach((div) => {
      div.addEventListener('click', (e) => {
        let coord = parseInt(div.getAttribute('data-cell')); //the numbers from the data-cells
        coords.push(coord); //on each click, a cell number is pushed to 'coords'
        // console.log(coords);
        if (toggle === true) {
          index1.push(coord);
          index1.sort();
          // console.log('index 1: ' + index1);
        } else if (!toggle) {
          index2.push(coord);
          index2.sort();
          // console.log('index 2: ' + index2);
        }
        for (let i = 0; i < wins.length; i++) {
          let win = wins[i]; //equal to an array of cell numbers from the wins array
          let playerIndex = toggle ? index1 : index2;
            console.log("win:         " + win);
            console.log("playerIndex: " + playerIndex);
            if (playerIndex === win) {
              console.log('someone won');
            }
            console.log("index 1: " + index1 + " & index 2: " + index2);
            console.log(win);
          // for (let j = 0; j < win.length; j++) {
          //   let bit = win[j]; //equal to ONE cell number from ONE win array, from wins
          //   // console.log(bit);
          // }
        }
      });
    });

  }

  checkForWin();

});
