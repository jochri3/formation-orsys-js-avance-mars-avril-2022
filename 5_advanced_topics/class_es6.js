class Article {
  constructor(reference, designation, prixHT) {
    this.designation = designation;
    this.reference = reference;
    this.prixHT = prixHT;
  }

  calculerPrixTTC() {
    return this.prixHT * (this.prixHT * 0.2);
  }

  afficher() {
    return `${this.designation} - ${this.prixHT}€`;
  }
}

const article = new Article(1, "T-shirt", 30);
const article2 = new Article(2, "Chemise", 100);
