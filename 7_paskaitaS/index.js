// dažniausiai naudojamos aplinkos: development (pas mus), tasting, preprod (prieš galutinė versija)
// production (galutinė, mato klientas), kad neišeitų klaidos developmente

// 2 Pratmas: Susikurti naują node.js projektą kuris atitiks kino salės bilietų sistemą.
// 1.Susikurt aplanką 6_paskaita_1pra&mas
// 2.Sukur& node.js aplinką su a&&nkamais moduliais
// 3.Įsisidieg& .env modulį ir panaudo& PORT kintamąjį
// 4.Įsidieg& eslint modulį su air bnb konfiguracija
// 5.Sukurti pretterrc.json failą su konfiguracija
// 6.Sukurti routes:
// a.GET /tckets –grąžins visus nupirktus bilietus
// b.POST /tckets –pridės bilietą
// c.GET /tckets/:id –grąžins vieną bilietą
// Vieno bilieto formatas {id: 1, row: 5, seat: 24}

const express = require('express');
const cors = require('cors');
require('dotenv').config();

// prosess.env tai objektas sukurtas iš mūsų env failo
const port = process.env.PORT || 8080; // 8880-gry=tamasis ry6ys
// jei PoRT bus nerastas;

const app = express();
app.use(express.json());
app.use(cors());

const tickets = [];

app.get('/tickets', (req, res) => {
  res.json(tickets);
});
app.get('/tickets/:id', (req, res) => {
  const foundTicket = tickets.find((ticket) => ticket.id === +req.params.id);
  if (!foundTicket) {
    res.status(404).send('Ticket not found');
  } else {
    res.send(foundTicket);
  }
});

app.post('/tickets', (req, res) => {
  const item = req.body;
  // item.id = tickets.length + 1; // mutuojant pridedamas id
  const ticket = { id: tickets.length + 1, ...item }; // sukuriamas naujas objektas
  // a = {id: 1}  b = {row: 1, seat: 5} = {...a, ...b}
  tickets.push(ticket);
  res.status(201).send(ticket);
});

// a = [a, b, c]
// a.splice(1,2) = [a]
// a.splice(0,1) = [b, c]
app.delete('/tickets/:id', (req, res) => {
  const index = tickets.findIndex((item) => item.id === +req.params.id);
  if (index === -1) {
    // index -1 jeigu neranda itemo masyve
    res.status(404).send('Ticket not found');
  } else {
    tickets.splice(index, 1); // ištrina elemenetą pagal jo indexą masyve
    res.send('Ticket removed from cart');
  }
});
app.listen(port, () => console.log(`Server started on port ${port}...`));
