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
      }</p>`;
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
            <p>userID:${user.userId}</p>
            <p>Id:${user.id}</p>
            <p>Title:${user.title}</p>
            <p>Status:${user.completed}</p>
          `;
      });
      document.getElementById("AllUsers").innerHTML = UsersStatus;
    });
}
getInfo();
