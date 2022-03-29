const moi = {
  nom: "lisangola",
  prenom: "christian",
  pays: "France",
  email: "christian.lisangola@gmail.com",
};

const { pays, email, ...nomComplet } = moi;

console.log(nomComplet);
