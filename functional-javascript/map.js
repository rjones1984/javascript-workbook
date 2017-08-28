function doubleAll(numbers) {
  let mapped = numbers.map(function (element) {
    return element * 2;
  });
  return mapped;
}

module.exports = doubleAll

//official solution
module.exports = function doubleAll(numbers) {
  return numbers.map(function double(num) {
    return num * 2
  })
}
