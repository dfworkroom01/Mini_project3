const express = require('express');
const { createProject, getProjects, getProjectById, updateProject, deleteProject } = require('../controllers/projectController');
const { authenticateJWT } = require('../utils/authMiddleware');
const router = express.Router();

// POST: Create a new project
router.post('/', authenticateJWT, createProject);

// GET: Get all projects
router.get('/', authenticateJWT, getProjects);

// GET: Get a specific project by ID
router.get('/:id', authenticateJWT, getProjectById);

// PUT: Update a project
router.put('/:id', authenticateJWT, updateProject);

// DELETE: Delete a project
router.delete('/:id', authenticateJWT, deleteProject);

module.exports = router;
