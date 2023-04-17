//console.log('Hello from V2');
const express = require('express');// expers modulio importavimas
const app = express();//aplikacijos uskurimas
const port = 3000;//porto kanalo skai2ius

//routas kelias /path
//get =gra=ink duomenis
app.get('/', (req, res)=>{
    //req     - request kas ateina is i=ores, res = response  kas ateina is vidaus
    res.send('Mano vardas Tomas'); //send metodas i6siun2ia duomenis
});

app.get('/today', (req, res)=>{
    res.send(new Date().toDateString());
});

app.get('/user', (req, res)=>{
    const user = {
        name: "Skaidre",
        surname: "Petraviciene",
        age: 50,
    };
    res.send(user);
});


//serverio paleidimas
app.listen(port, () => {
    console.log('Server is listening on port ${port}');
});
