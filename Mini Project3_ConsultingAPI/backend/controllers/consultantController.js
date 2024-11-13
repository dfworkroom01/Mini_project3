const Consultant = require('../models/consultants');

// Create a new consultant
const createConsultant = async (req, res) => {
  try {
    const { first_name, last_name, email, phone, hire_date, specialization, status } = req.body;

    const newConsultant = await Consultant.create({
      first_name,
      last_name,
      email,
      phone,
      hire_date,
      specialization,
      status,
    });

    res.status(201).json(newConsultant);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all consultants
const getConsultants = async (req, res) => {
  try {
    const consultants = await Consultant.findAll();
    res.status(200).json(consultants);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single consultant by ID
const getConsultantById = async (req, res) => {
  try {
    const { id } = req.params;
    const consultant = await Consultant.findByPk(id);
    if (!consultant) return res.status(404).json({ message: 'Consultant not found' });
    res.status(200).json(consultant);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a consultant
const updateConsultant = async (req, res) => {
  try {
    const { id } = req.params;
    const { first_name, last_name, email, phone, hire_date, specialization, status } = req.body;

    const consultant = await Consultant.findByPk(id);
    if (!consultant) return res.status(404).json({ message: 'Consultant not found' });

    consultant.first_name = first_name || consultant.first_name;
    consultant.last_name = last_name || consultant.last_name;
    consultant.email = email || consultant.email;
    consultant.phone = phone || consultant.phone;
    consultant.hire_date = hire_date || consultant.hire_date;
    consultant.specialization = specialization || consultant.specialization;
    consultant.status = status || consultant.status;

    await consultant.save();
    res.status(200).json(consultant);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a consultant
const deleteConsultant = async (req, res) => {
  try {
    const { id } = req.params;
    const consultant = await Consultant.findByPk(id);
    if (!consultant) return res.status(404).json({ message: 'Consultant not found' });

    await consultant.destroy();
    res.status(200).json({ message: 'Consultant deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createConsultant, getConsultants, getConsultantById, updateConsultant, deleteConsultant };
