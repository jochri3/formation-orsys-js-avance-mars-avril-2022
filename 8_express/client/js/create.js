const formData = {
  fname: "Christian",
  lname: "Lisangola",
  age: 30,
};


axios.post("http://localhost:3000/api/contact", formData).then().catch();
