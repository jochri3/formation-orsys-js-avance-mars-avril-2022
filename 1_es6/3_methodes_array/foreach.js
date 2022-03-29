const fruits = ["pommes", "mangues", "bananes"];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// forEach

fruits.forEach(function (fruit /*, index, arr*/) {
  console.log(fruit);
  // console.log(`${index} => ${fruit}`);
  //   console.log(arr);
});
