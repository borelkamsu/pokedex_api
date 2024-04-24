// import des dépendances
const express = require('express');
// le router est le composant qui va définir ce q'uon fait 
// pour chaque chemin qu'on emprunte
// un GET sur http://localhost:3000/users/
// va nous ramener sur usersController.getAllusers()
const router = express.Router();
const pokemonRoutes = require('./routes/pokemonRoutes');
const userRoutes = require('./routes/userRoutes');

// Message de bienvenue sur mon API sur localhost:3000/api
router.get('/', (req, res) => {
    res.send('welcome to the API');
})

// si lutilisateur va sur localhost:3000/api/pokemons, on utilise
// pokemonRoutes pour gérer les routes
router.use('/pokemons', pokemonRoutes);

// si lutilisateur va sur localhost:3000/api/users, on utilise
// userRoutes pour gérer les routes
router.use('/users', userRoutes);


module.exports = router;