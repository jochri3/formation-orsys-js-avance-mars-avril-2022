import Etudiant from "./classes/etudiant.js";
import Professeur from "./classes/professeur.js";

const prof = new Professeur("Tryphon", "Tournesol", 60, [
  "Chimie",
  "Physique",
  "Cosmologie",
]);

const tintin = new Etudiant("Tintin", "Le Belge", 25, "L1");

console.log(prof.sePresenter());
console.log(tintin.sePresenter());
