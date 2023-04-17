const express = require("express");
const app = express();
const cors = require('cors');
const port = 3000;
const names =['Skaidre'];
 
app.get("/", (req, res) => {
  res.send(names);
});
 
app.post (port, () => {
  console.log(`Server is running on the ${port}`);
});
 
fetch(URL, {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(data)
})