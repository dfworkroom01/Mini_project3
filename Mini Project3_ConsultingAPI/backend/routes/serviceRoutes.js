const express = require('express');
const { createService, getServices, getServiceById, updateService, deleteService } = require('../controllers/serviceController');
const { authenticateJWT } = require('../utils/authMiddleware');
const router = express.Router();

// POST: Create a new service
router.post('/', authenticateJWT, createService);

// GET: Get all services
router.get('/', authenticateJWT, getServices);

// GET: Get a specific service by ID
router.get('/:id', authenticateJWT, getServiceById);

// PUT: Update a service
router.put('/:id', authenticateJWT, updateService);

// DELETE: Delete a service
router.delete('/:id', authenticateJWT, deleteService);

module.exports = router;
