/////////IMAGE
function photo() {
  fetch("https://jsonplaceholder.typicode.com/photos/1")
    .then(response => response.json())
    .then(data => {
      document.getElementById("pic").src = data.url;
      console.log(data.url);
      return data;
    })
    .catch(error => console.error(error));
}
photo();
////////////////// INFORMATION OF USER
function getOneUser(user) {
  fetch("https://jsonplaceholder.typicode.com/users/2")
    .then(res => res.json())
    .then(data => {
      const user = data;

      function showUser(user) {
        document.getElementById("Info").innerHTML = `
      <p>Name: ${user.name}</p>
      <p>Id: ${user.id}</p>
      <p>Email: ${user.email ? user.email : "No email"}</p>
      <p>Address: ${
        user.address.street ? user.address.street : "No address street"
      } </p>
      <p>City: ${user.address.city}</p>
      <p>Phone: ${user.phone}</p>`;
      }

      showUser(user);

      return data;
    })
    .catch(err => console.error(err));
}
getOneUser();

/////////////////////// ALL USERS STATUS, TODO
function getInfo() {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then(res => res.json())
    .then(data => {
      let todos = data
        .filter(function(todo) {
          return todo.userId === 2;
        })
        .map(function(todo) {
          return todo;
        });

      UsersStatus = "";
      todos.forEach(function(user, index) {
        UsersStatus += `
        <ul>User ${user.userId}
            <li>Id:${user.id}</li>
            <li>Title:${user.title}</li>
            <li>Status:${user.completed}</li>
        </ul>
          `;
      });
      document.getElementById("AllUsers").innerHTML = UsersStatus;
    });
}
getInfo();
