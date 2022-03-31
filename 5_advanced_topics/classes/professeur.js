import Personne from "./personne.js";

class Professeur extends Personne {
  constructor(fname, lname, age, matiereEnseignees) {
    super(fname, lname, age);
    this.matiereEnseignees = matiereEnseignees;
  }
}

export default Professeur;
