import Personne from "./personne.js";

class Professeur extends Personne {
  constructor(fname, lname, age, matiereEnseignees) {
    super(fname, lname, age);
    this.matiereEnseignees = matiereEnseignees;
  }

  sePresenter() {
    return `Je suis un enseignant et je m'appelle ${this.fname} ${this.lname}`;
  }
}

export default Professeur;
