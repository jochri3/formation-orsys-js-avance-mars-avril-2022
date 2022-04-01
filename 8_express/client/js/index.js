const contactsList = document.querySelector("#contacts");
const loader = document.querySelector("#loader");
loader.style.display = "none";

//
function ContactRow(contact) {
  //   const values = [
  //     contact._id,
  //     contact.firstName,
  //     contact.lastName,
  //     contact.email,
  //   ];

  const row = document.createElement("tr");

  const id = createColumn(contact._id);

  const fname = createColumn(contact.firstName);

  const lname = createColumn(contact.lastName);

  const email = createColumn(contact.email);

  const view = document.createElement("td");
  const viewButton = document.createElement("button");
  viewButton.innerText = "Voir";
  viewButton.addEventListener("click", function () {
    window.location.href = `./pages/details-contact.html?id=${contact._id}`;
  });

  view.appendChild(viewButton);

  row.append(id, fname, lname, email, view);
  //   for (let value of values) {
  //     row.appendChild(createColumn(value));
  //   }

  return row;
}

function createColumn(value) {
  const column = document.createElement("td");
  column.innerText = value;
  return column;
}

// function getContacts() {
//   return axios
//     .get("http://localhost:3000/api/contacts")
//     .then((response) => response.data)
//     .catch((err) => console.log(err));
// }

function init() {
  loader.style.display = "block";
  axios
    .get("http://localhost:3000/api/contacts")
    .then((response) => {
      loader.style.display = "none";
      const contacts = response.data;
      localStorage.setItem("contacts", JSON.stringify(contacts));
      for (let contact of contacts) {
        contactsList.appendChild(ContactRow(contact));
      }
    })
    .catch((err) => console.log(err));
}

init();
