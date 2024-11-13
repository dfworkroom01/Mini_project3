const express = require('express');
const { createContract, getContracts, getContractById, updateContract, deleteContract } = require('../controllers/contractController');
const { authenticateJWT } = require('../utils/authMiddleware');
const router = express.Router();

// POST: Create a new contract
router.post('/', authenticateJWT, createContract);

// GET: Get all contracts
router.get('/', authenticateJWT, getContracts);

// GET: Get a specific contract by ID
router.get('/:id', authenticateJWT, getContractById);

// PUT: Update a contract
router.put('/:id', authenticateJWT, updateContract);

// DELETE: Delete a contract
router.delete('/:id', authenticateJWT, deleteContract);

module.exports = router;
