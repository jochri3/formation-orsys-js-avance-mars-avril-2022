const contacts = [
  {
    _id: "6240f9b8ac64223548d58355",
    guid: "9228b5ee-ba59-4b8b-9ee4-3eabdb81114c",
    isActive: true,
    age: 23,
    firstName: "Dina",
    lastName: "Ortega",
    gender: "female",
    company: "SLAX",
    email: "dinaortega@slax.com",
    phone: "+1 (979) 516-2336",
    address: "985 Woodside Avenue, Indio, Nevada, 812",
  },
  {
    _id: "6240f9b86a3a4a25f6c74a6f",
    guid: "fb7104b5-84c3-42e1-bb02-cdf2f3db996c",
    isActive: true,
    age: 31,
    firstName: "Gay",
    lastName: "Richmond",
    gender: "female",
    company: "CABLAM",
    email: "gayrichmond@cablam.com",
    phone: "+1 (871) 564-2403",
    address: "744 Highland Avenue, Blue, Maine, 3502",
  },
  {
    _id: "6240f9b8cda159999ba1ca12",
    guid: "80995fe1-04d1-4cb8-b14a-225ee253afe0",
    isActive: false,
    age: 40,
    firstName: "Joanne",
    lastName: "Dean",
    gender: "female",
    company: "EARTHPURE",
    email: "joannedean@earthpure.com",
    phone: "+1 (821) 410-2507",
    address: "414 Ridgewood Place, Morgandale, Indiana, 3729",
  },
  {
    _id: "6240f9b86453380dbd870fc0",
    guid: "fc2d6788-d3c1-455d-b97c-b3420d931ff7",
    isActive: false,
    age: 39,
    firstName: "Molina",
    lastName: "Houston",
    gender: "male",
    company: "ENTALITY",
    email: "molinahouston@entality.com",
    phone: "+1 (824) 541-3686",
    address: "816 Lorimer Street, Hoagland, Palau, 6135",
  },
  {
    _id: "6240f9b83a97c905ceee30ac",
    guid: "0f715c41-5d49-4226-9d5d-39d698f4f61b",
    isActive: true,
    age: 38,
    firstName: "Kristie",
    lastName: "Bradshaw",
    gender: "female",
    company: "ARCHITAX",
    email: "kristiebradshaw@architax.com",
    phone: "+1 (842) 478-3806",
    address: "276 Malbone Street, Vale, New Jersey, 4919",
  },
  {
    _id: "6240f9b8239091d7877a859c",
    guid: "9c21e8a3-e971-4f3f-891c-c16b06ec5bfb",
    isActive: false,
    age: 29,
    firstName: "Tucker",
    lastName: "Tucker",
    gender: "male",
    company: "ISONUS",
    email: "tuckertucker@isonus.com",
    phone: "+1 (851) 466-3316",
    address: "687 Randolph Street, Topaz, South Dakota, 3127",
  },
  {
    _id: "6240f9b857e86d8fd41db231",
    guid: "dc251fa2-0114-4272-8b4a-de7930ca990e",
    isActive: true,
    age: 39,
    firstName: "Daphne",
    lastName: "Gardner",
    gender: "female",
    company: "QUILITY",
    email: "daphnegardner@quility.com",
    phone: "+1 (916) 600-2394",
    address: "440 Doscher Street, Abrams, Iowa, 6491",
  },
];

/*
  1.Créer un nouveau tableau :
  - Le firstname et lastname doivent être combinés en fullName
  - L'attribut "address" doit devenir un objet content les informations suivantes : address,phone,email,company
  - Retirer les attributs : gender,guid et isActive
  
  2.Créer un tableau content le fullName
  
  3.D'avoir un tableau qui contient uniquement les contact femmes,ayant plus de 30 ans et qui sont actives
*/

const e3 = contacts.filter(function (contact) {
  return contact.gender === "female" && contact.age > 30 && contact.isActive;
});

console.log(e3);
