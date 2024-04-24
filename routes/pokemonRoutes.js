const express = require('express');
const router = express.Router();
const pokemonController = require('../controllers/pokemonController');

// Get all pokemons
// GET sur localhost:3000/api/pokemons
router.get('/', pokemonController.getAllPokemons)
// get one pokemon 
// localhost:3000/api/pokemons/9230774h2203HDkdj
router.get('/:id', pokemonController.getOnePokemon)

// Create a Pokemon// Get all pokemons
// POST sur localhost:3000/api/pokemons
router.post('/', pokemonController.createPokemon);

// Edit a Pokemon
router.put('/:id', pokemonController.editPokemon)
// Delete a Pokemon
router.delete('/:id', pokemonController.deletePokemon)

module.exports = router