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

// Get all consultants (no authentication required)
router.get('/', async (req, res) => {
  try {
    const consultants = await Consultant.findAll();
    res.json(consultants);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching consultants' });
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
