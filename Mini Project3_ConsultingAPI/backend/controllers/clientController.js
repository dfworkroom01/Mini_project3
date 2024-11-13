const Client = require('../models/clients');

// Create a new client
const createClient = async (req, res) => {
  try {
    const { name, industry, address, phone, email, contact_person } = req.body;

    const newClient = await Client.create({
      name,
      industry,
      address,
      phone,
      email,
      contact_person,
    });

    res.status(201).json(newClient);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all clients
const getClients = async (req, res) => {
  try {
    const clients = await Client.findAll();
    res.status(200).json(clients);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single client by ID
const getClientById = async (req, res) => {
  try {
    const { id } = req.params;
    const client = await Client.findByPk(id);
    if (!client) return res.status(404).json({ message: 'Client not found' });
    res.status(200).json(client);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a client
const updateClient = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, industry, address, phone, email, contact_person } = req.body;

    const client = await Client.findByPk(id);
    if (!client) return res.status(404).json({ message: 'Client not found' });

    client.name = name || client.name;
    client.industry = industry || client.industry;
    client.address = address || client.address;
    client.phone = phone || client.phone;
    client.email = email || client.email;
    client.contact_person = contact_person || client.contact_person;

    await client.save();
    res.status(200).json(client);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a client
const deleteClient = async (req, res) => {
  try {
    const { id } = req.params;
    const client = await Client.findByPk(id);
    if (!client) return res.status(404).json({ message: 'Client not found' });

    await client.destroy();
    res.status(200).json({ message: 'Client deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createClient, getClients, getClientById, updateClient, deleteClient };
