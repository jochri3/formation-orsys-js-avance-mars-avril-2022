var designation = "";
var reference = "";
var prixHT = 0;

function Article(reference, designation, prixHT) {
  /**
   *  {}
   */
  this.designation = designation;
  this.reference = reference;
  this.prixHT = prixHT;
  // this.calculerPrixTTC = function () {
  //   return this.prixHT * (this.prixHT * 0.2);
  // };
}

// Article.prototype.calculerPrixTTC = function () {
//   return this.prixHT * (this.prixHT * 0.2);
// };

// Article.prototype.afficher = function () {
//   return `${this.designation} - ${this.prixHT}€`;
// };

Article.prototype = {
  calculerPrixTTC: function () {
    return this.prixHT * (this.prixHT * 0.2);
  },
  afficher: function () {
    return `${this.designation} - ${this.prixHT}€`;
  },
};

const article = new Article(1, "T-shirt", 30);
const article2 = new Article(2, "Chemise", 100);
