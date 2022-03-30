const maPromesse = new Promise((resolve, reject) => {});

const rendreVisiteAMonAmi = function (heure) {
  return new Promise(function (resolve, reject) {
    if (heure > 20) {
      reject("Désolé mon pote, je ne sais plus venir");
    } else {
      resolve("J'arrive, je suis déjà en route");
    }
  });
};

rendreVisiteAMonAmi(22)
  .then(function (data) {
    console.log(data);
  })
  .catch(function (err) {
    console.error(err);
  });
