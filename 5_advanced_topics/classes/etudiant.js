import Personne from "./personne.js";

class Etudiant extends Personne {
  constructor(fname, lname, age, promotion) {
    super(fname, lname, age);
    this.promotion = promotion;
  }
}

export default Etudiant;
