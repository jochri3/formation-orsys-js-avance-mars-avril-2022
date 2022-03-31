var nom = "Lionel Messi";

function direBonjour() {
  console.log(nom); //
  var nom2 = "Jean-Cédric";
  function f2() {
    console.log(nom); //La fonction interne sait aussi voir la variable global nom
    console.log(nom2);
  }
  f2();
}

console.log(nom2);
