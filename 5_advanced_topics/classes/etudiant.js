import Personne from "./personne.js";

class Etudiant extends Personne {
  constructor(fname, lname, age, promotion) {
    super(fname, lname, age);
    this.promotion = promotion;
  }

  sePresenter() {
    return `Je suis un étudiant et je m'appelle ${this.fname} ${this.lname}`;
  }
}

export default Etudiant;
