
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

    document.querySelectorAll('[data-cell]').forEach((div) => {
      div.addEventListener('click', (e) => {
        let coord = div.getAttribute('data-cell');
        coords.push(coord);
        // console.log(coords);
        for (let i = 0; i <= wins.length; i++) {
          let win = wins[i];
            console.log(win);
          //"cannot read property 'length' of undefined"
          for (let j = 0; j <= win.length; j++) {
            let bit = win[j];
            console.log(bit);
          }
        }
        // if (toggle === true) {
        //   // console.log(toggle);
        // } else {
        //   console.log(!toggle);
        // }
      });
    });

  }

  checkForWin();

});
