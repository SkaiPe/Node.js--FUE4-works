// dažniausiai naudojamos aplinkos: development (pas mus), tasting, preprod (prieš galutinė versija)
// production (galutinė, mato klientas), kad neišeitų klaidos developmente
//

const express = require('express');
const cors = require('cors');
require('dotenv').config();

// prosess.env tai objektas sukurtas i6 mūsų env failo
const port = process.env.PORT || 8080; // 8880-gry=tamasis ry6ys
// jei PoRT bus nerastas;

const app = express();
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send([]);
});

app.listen(port, () => console.log(`Server started on port ${port}...`));
