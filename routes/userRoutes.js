const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Get all users
// GET sur localhost:3000/api/users
router.get('/', userController.getAllUsers)
// Get one user
// localhost:3000/api/users/5f8c561df9f43a21c882503c
router.get('/:id', userController.getOneUser)
// Create a user
// POST sur localhost:3000/api/users
router.post('/', userController.register);

// Edit a user
router.put('/:id', userController.editUser)
// Delete a user
router.delete('/:id', userController.deleteUser)

module.exports = router

