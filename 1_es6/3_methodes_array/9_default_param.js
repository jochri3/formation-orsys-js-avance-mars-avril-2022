function User(nom, prenom, age, pays = "France") {
  this.nom = nom;
  this.prenom = prenom;
  this.age = age;
  this.pays = pays;
}

const moi = new User("Lisangola", "Christian", 30);
const lui = new User("Del Pierro", "Alexandro", 43, "Italie");

console.log("Moi : ", moi);
console.log("Lui : ", lui);
