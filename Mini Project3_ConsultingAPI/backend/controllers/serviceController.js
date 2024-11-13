// controllers/serviceController.js
const Service = require('../models/services'); // Import the Service model

// Create a new service
const createService = async (req, res) => {
  try {
    const { name, description } = req.body; // Destructure the necessary fields from the request body

    // Create a new service record in the database
    const newService = await Service.create({
      name,
      description,
    });

    res.status(201).json(newService); // Return the newly created service
  } catch (error) {
    res.status(500).json({ message: error.message }); // Handle any errors
  }
};

// Get all services
const getServices = async (req, res) => {
  try {
    const services = await Service.findAll(); // Fetch all services from the database
    res.status(200).json(services); // Return the list of services
  } catch (error) {
    res.status(500).json({ message: error.message }); // Handle any errors
  }
};

// Get a single service by ID
const getServiceById = async (req, res) => {
  try {
    const { id } = req.params; // Extract the ID from the URL params
    const service = await Service.findByPk(id); // Find the service by primary key (ID)

    if (!service) {
      return res.status(404).json({ message: 'Service not found' }); // If not found, return 404
    }

    res.status(200).json(service); // Return the found service
  } catch (error) {
    res.status(500).json({ message: error.message }); // Handle any errors
  }
};

// Update a service
const updateService = async (req, res) => {
  try {
    const { id } = req.params; // Extract the ID from the URL params
    const { name, description } = req.body; // Extract the updated data from the request body

    const service = await Service.findByPk(id); // Find the service by ID
    if (!service) return res.status(404).json({ message: 'Service not found' }); // If not found, return 404

    // Update the fields if the values are provided, otherwise leave the current value
    service.name = name || service.name;
    service.description = description || service.description;

    await service.save(); // Save the updated service to the database
    res.status(200).json(service); // Return the updated service
  } catch (error) {
    res.status(500).json({ message: error.message }); // Handle any errors
  }
};

// Delete a service
const deleteService = async (req, res) => {
  try {
    const { id } = req.params; // Extract the ID from the URL params
    const service = await Service.findByPk(id); // Find the service by ID
    if (!service) return res.status(404).json({ message: 'Service not found' }); // If not found, return 404

    await service.destroy(); // Delete the service from the database
    res.status(200).json({ message: 'Service deleted successfully' }); // Return success message
  } catch (error) {
    res.status(500).json({ message: error.message }); // Handle any errors
  }
};

module.exports = { createService, getServices, getServiceById, updateService, deleteService };
