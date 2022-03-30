const usersList = document.querySelector("#users");

fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    data.forEach((user) => {
      const li = document.createElement("li");
      li.innerText = user.name;
      usersList.appendChild(li);
    });
  })
  .catch((err) => console.error(err));
