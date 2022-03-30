const requete = (URL) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const pages = {
        "/users": [
          { id: 1, noms: "Christian Lisangola" },
          { id: 2, noms: "Jean-Pierre Jojo" },
        ],
        "/users/1": { id: 1, noms: "Christian Lisangola" },
        "/users/2": { id: 2, noms: "Jean-Pierre Jojo" },
      };

      if (pages[URL]) {
        resolve({
          status: 200,
          data: pages[URL], //pages["/users"]
        });
      } else {
        reject({
          status: 404,
          message: "not found",
        });
      }
    }, 4000);
  });
};

console.log("Premier");

// 404
// requete("/toto")
//   .then((response) => console.log(response))
//   .catch((err) => console.error(err));

requete("/users")
  .then((response) => console.log(response))
  .catch((err) => console.error(err));

console.log("Deuxieme");


