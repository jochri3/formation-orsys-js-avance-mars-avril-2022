const moi = {
  nom: "lisangola",
  prenom: "christian",
  pays: "France",
  email: "christian.lisangola@gmail.com",
};

// access au attributs
console.log("Nom : ", moi.nom);
console.log("Prenom : ", moi.prenom);
console.log("Pays : ", moi.pays);
console.log("Email : ", moi.email);

// Destricturation
//const nom=moi.nom
//const prenom=moi.prenom
const { nom, prenom } = moi;

console.log("Nom dest : ", nom);
console.log("Prenom dest: ", prenom);

// Cas des fonctions
function afficherDescription(contact) {
  return `Je m'appelle ${contact.prenom} ${contact.nom}, je suis ${contact.pays},et voici mon adresse email : ${contact.email}`;
}

console.log(afficherDescription(moi));

function afficherDescription2({ nom, prenom, pays, email }) {
  return `Je m'appelle ${prenom} ${nom}, je suis ${pays},et voici mon adresse email : ${email}`;
}

console.log(afficherDescription2(moi));

// Objets imbriqués
const chris = {
  lastName: "lisangola",
  firstName: "christian",
  country: "France",
  email: "christian.lisangola@gmail.com",
  address: {
    street: "Abc",
    zipCode: "0000",
    city: "sdfkjsdb",
  },
};

const {
  lastName,
  firstName,
  address: { street, zipCode, city },
} = chris;

// Alias

const { country: pays, email: adresseMail } = chris;


