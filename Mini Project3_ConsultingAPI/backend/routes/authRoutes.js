const express = require('express');
const { migrateConsultantsToUsers, hashExistingPasswords, login, getCurrentUser } = require('../controllers/authController');
const { authenticateJWT } = require('../utils/authMiddleware');
const router = express.Router();
router.post('/hashExistingPass', hashExistingPasswords);

router.post('/consultantsToUsers', migrateConsultantsToUsers);

// POST: Register a new user
//router.post('/register', register);

// POST: Login user
router.post('/login', login);

// GET: Get current user (requires authentication)
router.get('/current', authenticateJWT, getCurrentUser);

module.exports = router;
