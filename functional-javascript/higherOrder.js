module.exports = function (callback, num) {
  for (let i = 0; i < 10; i++) {
    callback(num);
  }
}

function repeat(operation, num) {
  if (num <= 0) return
  operation()
  return repeat(operation, --num)
  }

  module.exports = repeat
