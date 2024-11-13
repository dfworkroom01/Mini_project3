const express = require('express');
const { createClient, getClients, getClientById, updateClient, deleteClient } = require('../controllers/clientController');
const { authenticateJWT } = require('../utils/authMiddleware');
const router = express.Router();

// POST: Create a new client
router.post('/', authenticateJWT, createClient);

// GET: Get all clients
router.get('/', authenticateJWT, getClients);

// GET: Get a specific client by ID
router.get('/:id', authenticateJWT, getClientById);

// PUT: Update a client
router.put('/:id', authenticateJWT, updateClient);

// DELETE: Delete a client
router.delete('/:id', authenticateJWT, deleteClient);

module.exports = router;
