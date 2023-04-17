console.log ("front+ back");


const express = require("express");
const app = express();
const port = 3000;

const names =['Skaidre']
 
app.get("/", (req, res) => {
  res.send("IT works!");
});
 
app.listen(port, () => {
  console.log(`Server is running on the ${port}`);
});
 