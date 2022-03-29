const fruits = ["pommes", "mangues", "bananes" /*, "papay"*/];

const fruit = fruits.find(function (fruit) {
  return fruit.startsWith("p");
});
console.log(fruit);

const fruit2 = fruits.filter(function (fruit) {
  return fruit.startsWith("p");
});
console.log(fruit2);
