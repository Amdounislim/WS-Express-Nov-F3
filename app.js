const express = require("express");

const app = express();

app.use(express.json());

let users = [
  { name: "ghaith", age: 25, id: 1 },
  { name: "Wael", age: 45, id: 2 },
  { name: "Wissem", age: 30, id: 3 },
];

//Get all user
//Get "/users"
//@desc : get list of users
app.get("/users", (req, res) => {
  res.send(users);
});

//Add new user
//Post "/users"
//@desc: Add new user
app.post("/users", (req, res) => {
  let newUser = { ...req.body, id: Math.random() };
  users.push(newUser);
  res.json({
    msg: "User added with success",
    users,
  });
});

//Delete user
//Delete '/users/:id'
//@Desc: delete user with id
app.delete("/users/:id", (req, res) => {
  let id = Number(req.params.id);
  users = users.filter((el) => el.id !== id);
  res.json({ msg: "user has been deleted", users });
});

//Update user
//Update '/users/:id'
//@Desc: update user with id
app.put("/users/:id", (req, res) => {
  let id = Number(req.params.id);
  users = users.map((el) => (el.id === id ? { ...el, ...req.body } : el));
  res.json({ msg: "user has been updated", users });
});

const port = process.env.PORT || 4000;
app.listen(port, (err) => {
  err ? console.log(err) : console.log(`the server is running on port ${port}`);
});
