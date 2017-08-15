
document.addEventListener('DOMContentLoaded', () => {
  'use strict';
  // Your code here
  let toggle = true;

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

  



});
