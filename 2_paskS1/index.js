const express = require("express"); // experes importas
const cors = require("cors"); //cors imports
const app = express(); // express aplikacijos iniciavimas

app.use(express.json()); //aplikacija priima duomenis JSON formatu
app.use(cors()); //aplikacija naudoja CORS apsaugą 

const port = 3000; //kanalas reikalingas serveriui

const cars = ["Audi"];

//GET kelias, kuris grąžina duomenis
app.get("/", (req, res) => {
    //res (response)        - duomenys, kuriuos mes grąžiname
  res.send(cars); // res.send  - metodas kuris grąžina siuntėjui(klientui) atsakymą
});

app.post("/", (req, res) => {
    //req (reqest)  - duomenys, kuriuos gauna iš išorės
    //req.body - pagrindiniai duomenys iš išorės
  const car = req.body.car;
  console. log(req.body.car);
  cars.push(car);
  res.send(req.body); //POST dalyje siunčiame atgal klientui, tai ką jis pats atsiuntė mums
});

//app.listen - metodas, kuris paleidžia klausytis musū sarverio nurodytu kanalu
// port - kanalas
//()=>{}funkcija, kuri pasileid=ia, kai serveris startuoja
//console.log naudojam, kad =inotume kokiu kanalu paleid=ia server6
app.listen(port, () => {
  console.log(`Server is running on the ${port}`);
});
