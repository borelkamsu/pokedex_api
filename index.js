// import des différentes librairies
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');

require('dotenv').config()
// création de l'application express, on definis le numéro de port
let app = express();
let port = 3000;
app.use(cors());

app.use(express.json());

// message de bienvenue sur localhost:3000
app.get('/', (req, res) => {
    res.send('wecome to my backend!');
});
// les routes a utiliser sur localhost:3000/api/
app.use('/api', routes);

// ici on va se connecter à la base de données grace à Mongoose
mongoose
.connect(process.env.MONGO_URI, {})
.then(() => {
    console.log("connecté à la base de données");
})
.catch((err) => {
    console.log('erreur de connexion à la base de données', err);
})

app.listen(port, () => {
    console.log("serveur lancé sur le port " + port);
})