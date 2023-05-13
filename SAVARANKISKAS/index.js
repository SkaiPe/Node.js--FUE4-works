const express = require('express');
const cors = require('cors');
const { MongoClient } = require('mongodb');

require('dotenv').config();

const port = process.env.PORT || 8080;
const URI = process.env.DB_CONNECTION_STRING;
const dbName = process.env.DB_NAME;

const app = express();
app.use(express.json());
app.use(cors());

const client = new MongoClient(URI);

//1.GET memberships
app.get('/memberships', async (req, res) => {
  try {
    const con = await client.connect();
    const data = await con.db(dbName).collection('services').find().toArray();
    await con.close();
    res.send(data);
  } catch (error) {
    res.status(500).send(error);
  }
});

// 2. POST/MEMBERSHIPS
app.post('/memberships', async (req, res) => {
  try {
    const membership = req.body;
    const con = await client.connect();
    const existMembership = await con
      .db(dbName)
      .collection('services')
      .findOne({ name: membership.name });
    if (existMembership) {
      res.status(409).send({ error: 'Toks vartotojas jau yra' });
    } else {
      const data = await con
        .db(dbName)
        .collection('services')
        .insertOne(membership);
      await con.close();
      res.send(data);
    }
  } catch (error) {
    res.status(500).send(error);
  }
});

// 3.DELETE/memberships/:id
app.delete('/memberships/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const con = await client.connect();
    const data = await con
      .db(dbName)
      .collection('services')
      .deleteOne({ _id: new ObjectId(id) });
    await con.close();
    if (data.deleteOne) {
      res.status(`Membership su ID ${membershipId} buvo ištrintas sėkmingai`);
    } else {
      res.send(data);
    }
  } catch (error) {
    res.status(500).send({ message: 'Klaida' });
  }
});

// 4. GET/users/order//
app.get('/users/:order', async (req, res) => {
  try {
    const { type } = req.params;
    const sort = type === 'asc' ? 1 : -1;
    const con = await client.connect();
    const data = await con
      .db(dbName)
      .collection('users')
      .find()
      .sort({ rating: sort })
      .toArray();
    await con.close();
    res.send(data);
  } catch (error) {
    res.status(500).send(error);
  }
});

// 5. POST/users/
app.get('/users', async (req, res) => {
  try {
    const user = req.body;
    const con = await client.connect();
    const existUser = await con
      .db(dbName)
      .collection('users')
      .findOne({ email: user.email });
    if (existUser) {
      await con.close();
      return res.status(400).send({ message: 'User already exists' });
    }
    const data = await con.db(dbName).collection('users').insertOne(user);
    await con.close();
    res.send(data);
  } catch (error) {
    res.status(500).send(error);
  }
});
// users get
app.get('/users', async (req, res) => {
  try {
    const con = await client.connect();
    const data = await con
    .db(dbName)
    .collection('users')
    .find()
    .toArray();
    await con.close();
    if (data.length === 0) {
      res.status(404).send('No users found');
    } else {
      res.send(data);
    }
  } catch (error) {
    res.status(500).send(error);
  }
});

app.listen(port, () => {
  console.log(`Server is running on the ${port}`);
});
//       .aggregate([
//         {
//           $lookup: {
//             from: 'pets', // kitos kolekcijos pavadinimas
//             localField: '_id', // owners kolekcijos raktas per kurį susijungia
//             foreignField: 'ownerId', // kitos kolekcijos raktas per kurį susijungia
//             as: 'pets', // naujo rakto pavadinimas
//           },
//         },
//       ])
//       .toArray();
//     // $lookup - sujungia dvi kolekcijas
//     await con.close();
//     res.send(data);
//   } catch (error) {
//     res.status(500).send(error);
//   }
// });

// app.listen(port, () => {
//   console.log(`Server is running on the ${port}`);
// });
