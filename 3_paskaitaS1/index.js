const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

const port = 3000;

const users = [];

app.get("/users", (req, res) => {
  res.send(users);
});

app.post("/users", (req, res) => {
  const users = { name: req.body.name, price: req.body.price }; // sukuria objekta is siunciamo body
  users.push(users);
  res.send(users);
});

app.listen(port, () => {
  console.log(`Server is running on the ${port}`);
});