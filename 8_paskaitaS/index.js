// 1 užduois: Atkartoti' routes ir funkcionalumą pavaizduotą paveikslėlyje(pav. 1)•
// 7_paskaita_1pratimas
// •Panaudoti .env ir eslint modulius
// •Pridėti .env.example failą
// •Vieno Post struktūra {id: 2, title: “gera diena”, description: “šiandien yra gera diena”, actve: true}

const express = require('express');
const cors = require('cors');
require('dotenv').config();

const port = process.env.PORT || 8080;

const app = express();
app.use(express.json());
app.use(cors());

const day = [];

app.get('/day', (req, res) => {
  res.send(days);
});

// {id, title, done}
app.post('/day', (req, res) => {
  const day = req.body;
  const newDay = { id: day.length + 1, ...day }; // pridedamas id prie siunčiamo objekto
  days.push(newDay); // pridedama į masyvą
  res.send(newDay); // išsiunčiamas response
});

app.get('/days/:id', (req, res) => {
  const id = +req.params.id;
  const foundDay = todos.find((day) => day.id === id); // randa {...}, jei ne undefined
  if (foundDay) {
    // jeigu randa
    res.send(foundDay);
  } else {
    // jeigu neranda - 404 not found
    // res.status() - grąžina statusą
    res.status(404).send({ message: 'Day not found' });
  }
});

app.delete('/days/:id', (req, res) => {
  const id = +req.params.id;
  const foundIndex = day.findIndex((day) => day.id === id); // randa 0-begalybės, neranda -1
  if (foundIndex !== -1) {
    // jeigu randa
    const deletingDay = days.find((day) => day.id === id);
    days.splice(foundIndex, 1);
    res.send(deletingDay); // grąžinam elementą kurį trinam
  } else {
    // jeigu neranda
    res.status(404).send({ message: 'Day not found' });
  }
});

app.put('/days/:id', (req, res) => {
  const id = +req.params.id;
  const foundIndex = days.findIndex((day) => days.id === id);
  if (foundIndex !== -1) {
    const day = req.body; // naujai siunčiamas todo
    const updatingDay = { id, ...day }; // senas id + naujas todo
    days.splice(foundIndex, 1, updatingDay); // užkeičiamas atnaujintas todo
    res.send(updatingTodo);
  } else {
    res.status(404).send({ message: 'Todo not found' });
  }
});

app.listen(port, () => console.log(`Server started on port ${port}...`));
