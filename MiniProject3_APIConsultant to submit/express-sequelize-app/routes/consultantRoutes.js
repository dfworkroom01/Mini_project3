const express = require('express');
const Consultant = require('../models/consultant');
const auth = require('../middleware/auth'); 
const router = express.Router();

// Create a new consultant (no authentication required)
router.post('/', async (req, res) => {
  const { name } = req.body;

  try {
    const consultant = await Consultant.create({ name });
    res.status(201).json(consultant);
  } catch (error) {
    res.status(500).json({ message: 'Error creating consultant' });
  }
});

router.get('/', async (req, res) => {
  try {
    // Get page and limit from query parameters, with defaults
    const page = parseInt(req.query.page) || 1; // Default to page 1 if not provided
    const limit = parseInt(req.query.limit) || 10; // Default to 10 if limit not provided
    const offset = (page - 1) * limit; // Calculate the offset for pagination

    // Fetch consultants with the calculated limit and offset
    const consultants = await Consultant.findAll({
      limit: limit,
      offset: offset
    });

    // Get the total count of consultants for pagination info
    const totalConsultants = await Consultant.count();

    // Calculate the total number of pages
    const totalPages = Math.ceil(totalConsultants / limit);

    // Return the consultants and pagination info
    res.json({
      consultants,
      pagination: {
        currentPage: page,
        totalPages: totalPages,
        totalConsultants: totalConsultants,
        limit: limit
      }
    });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching consultants', error: error.message });
  }
});

// Get a specific consultant by ID (no authentication required)
router.get('/:consultantId', async (req, res) => {
  const { consultantId } = req.params;

  try {
    const consultant = await Consultant.findByPk(consultantId);
    if (!consultant) {
      return res.status(404).json({ message: 'Consultant not found' });
    }
    res.json(consultant);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching consultant' });
  }
});

// Update a consultant 
router.put('/:consultantId', async (req, res) => {
  const { consultantId } = req.params;
  const { name } = req.body;

  try {
    const consultant = await Consultant.findByPk(consultantId);
    if (!consultant) {
      return res.status(404).json({ message: 'Consultant not found' });
    }

    consultant.name = name || consultant.name;

    await consultant.save();
    res.json(consultant);
  } catch (error) {
    res.status(500).json({ message: 'Error updating consultant' });
  }
});

// Delete a consultant 
router.delete('/:consultantId', async (req, res) => {
  const { consultantId } = req.params;

  try {
    const consultant = await Consultant.findByPk(consultantId);
    if (!consultant) {
      return res.status(404).json({ message: 'Consultant not found' });
    }

    await consultant.destroy();
    res.json({ message: 'Consultant deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting consultant' });
  }
});

module.exports = router;
