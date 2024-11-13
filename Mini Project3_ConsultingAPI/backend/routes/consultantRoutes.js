const express = require('express');
const { createConsultant, getConsultants, getConsultantById, updateConsultant, deleteConsultant } = require('../controllers/consultantController');
const { authenticateJWT } = require('../utils/authMiddleware');
const router = express.Router();

// POST: Create a new consultant
router.post('/', authenticateJWT, createConsultant);

// GET: Get all consultants
router.get('/', authenticateJWT, getConsultants);

// GET: Get a specific consultant by ID
router.get('/:id', authenticateJWT, getConsultantById);

// PUT: Update a consultant
router.put('/:id', authenticateJWT, updateConsultant);

// DELETE: Delete a consultant
router.delete('/:id', authenticateJWT, deleteConsultant);

module.exports = router;

