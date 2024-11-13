const express = require('express');
const { createInvoice, getInvoices, getInvoiceById, updateInvoice, deleteInvoice } = require('../controllers/invoiceController');
const { authenticateJWT } = require('../utils/authMiddleware');
const router = express.Router();

// POST: Create a new invoice
router.post('/', authenticateJWT, createInvoice);

// GET: Get all invoices
router.get('/', authenticateJWT, getInvoices);

// GET: Get a specific invoice by ID
router.get('/:id', authenticateJWT, getInvoiceById);

// PUT: Update an invoice
router.put('/:id', authenticateJWT, updateInvoice);

// DELETE: Delete an invoice
router.delete('/:id', authenticateJWT, deleteInvoice);

module.exports = router;
