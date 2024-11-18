const express = require('express');
const Client = require('../models/client');
const auth = require('../middleware/auth'); 
const router = express.Router();

// Create a new client (no authentication required)
router.post('/', async (req, res) => {
  const { name, email } = req.body;

  try {
    const client = await Client.create({ name, email });
    res.status(201).json(client);
  } catch (error) {
    res.status(500).json({ message: 'Error creating client' });
  }
});

// Get all clients (no authentication required)
router.get('/', async (req, res) => {
  try {
    const clients = await Client.findAll();
    res.json(clients);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching clients' });
  }
});

// Get a specific client by ID (no authentication required)
router.get('/:clientId', async (req, res) => {
  const { clientId } = req.params;

  try {
    const client = await Client.findByPk(clientId);
    if (!client) {
      return res.status(404).json({ message: 'Client not found' });
    }
    res.json(client);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching client' });
  }
});

// Update a client 
router.put('/:clientId', async (req, res) => {
  const { clientId } = req.params;
  const { name, email } = req.body;

  try {
    const client = await Client.findByPk(clientId);
    if (!client) {
      return res.status(404).json({ message: 'Client not found' });
    }

    client.name = name || client.name;
    client.email = email || client.email;

    await client.save();
    res.json(client);
  } catch (error) {
    res.status(500).json({ message: 'Error updating client' });
  }
});

// Delete a client 
router.delete('/:clientId', auth, async (req, res) => {
  const { clientId } = req.params;

  try {
    const client = await Client.findByPk(clientId);
    if (!client) {
      return res.status(404).json({ message: 'Client not found' });
    }

    await client.destroy();
    res.json({ message: 'Client deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting client' });
  }
});

module.exports = router;
