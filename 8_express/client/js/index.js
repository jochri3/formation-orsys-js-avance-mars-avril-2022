const contactsList = document.querySelector("#contacts");

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

  row.append(id, fname, lname, email);
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
  axios
    .get("http://localhost:3000/api/contacts")
    .then((response) => {
      const contacts = response.data;
      for (let contact of contacts) {
        contactsList.appendChild(ContactRow(contact));
      }
    })
    .catch((err) => console.log(err));
}

init();
