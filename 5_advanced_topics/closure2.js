function Personne() {
  let nom;
  let prenom;
  return {
    getNom() {
      return nom;
    },
    getPrenom() {
      return prenom;
    },
    setNom(valeur) {
      nom = valeur;
    },
    setPrenom(valeur) {
      prenom = valeur;
    },
  };
}
