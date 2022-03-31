function b() {
  var myVar;
  console.log(myVar);
}
function a() {
  var myVar = 2;//3
  console.log(myVar);//4
  b();
}
var myVar = 1;// 1
console.log(myVar);//2
a();//=
console.log(myVar);
