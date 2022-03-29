const numbers = [1, 2, 3, 4, 12, 34, 25, 67, 32];

const someNumbersGT30 = numbers.some(function (number) {
  return number > 30;
}); //True

console.log("some : ", someNumbersGT30);

const allNumberGT30 = numbers.every(function (number) {
  return number > 30;
});

console.log("every : ", allNumberGT30);
