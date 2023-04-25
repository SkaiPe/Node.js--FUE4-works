// trys būdai susikurti node.js aplikaciją:
//1.Ranka pasirašyti package.json ir node.js failus, bet eikės susirašyti atskirai reikalingus modulius
//2.persikopijuoti package.json failą ir index.js (pratrinant nereikalingas eilutes). Užtenka parašyti 'npm install', kad surašyti visus modulius.
//3.Komanda "npm init" kuri sukurs jums package.json ir index.js failus, bet reikės susirašyti reikalingus modulius atskirai.


//1. Terminale pasirašom npm install nodemon
// 2. prisidedame į package.json failą scripts skiltį naują skriptą "dev": "nodemon index.js"
// 3. leidžiama aplikaciją terminale su komanda "npm run dev", run reikalingas, nes komanda sukurta mūsų, o ne sistemiška
const express = require("express");
const cors = require("cors");
const port = 3000;
 
const app = express();
app.use(express.json());
app.use(cors());
 
app.get("/", (req, res) => {
  res.send(users);
});
app.post("/", (req, res)=>{})
// pasirenku POST iš sąrašo
 // spaudžiam "Body" skiltį
 // renkames "raw", bei pasirenkam JSON iš Text (mėlynas textas)
// JSON formatas:
 // {
//     "id": 2,
//     "name": "Tomas"
 // }

 const user = req.body;

 users.push(user);

 res.send(user);

;
app.post("/",(req, res)=> {
    const user = req.body;
    users.push(user);
    res.send(user);
  });

 
app.listen(port, () => console.log(`Server started on port ${port}...`));
 