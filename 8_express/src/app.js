const express = require("express");
const contacts = require("./database");
const { nanoid } = require("nanoid");
const cors = require("cors");

const App = express();

const PORT = 3000;

App.use(express.json());
App.use(cors());

App.get("/api/contacts", (request, response) => {
  response.send(contacts);
});

App.get("/api/contacts/:id", (request, response) => {
  const id = request.params.id;
  const contact = contacts.find((contact) => contact._id === id);
  if (!contact) {
    return response.status(404).send({ message: "Not found" });
  }
  return response.send(contact);
});

App.post("/api/contacts", (request, response) => {
  const data = request.body;
  contacts.push({ ...data, _id: nanoid() });
  response.status(201).send({ message: "Resource created successfully" });
});

App.listen(PORT, () => {
  console.log(`Le serveur écoute sur le port -- ${PORT}`);
});
