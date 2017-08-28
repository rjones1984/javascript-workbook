'use strict';

document.addEventListener('DOMContentLoaded', () => {
  // Your code here
  document.querySelectorAll('[data-block]').forEach((block) => {
    block.addEventListener('click', (e) => {
      moved = { size: e.target.attributes[0].value };
      e.target.parentNode.removeChild(e.target);
      console.log(moved.size);
    });
  });
});
