const Contract = require('../models/contracts');

// Create a new contract
const createContract = async (req, res) => {
  try {
    const { contract_date, start_date, end_date, contract_value, terms_and_conditions, client_id, consultant_id, status } = req.body;

    const newContract = await Contract.create({
      contract_date,
      start_date,
      end_date,
      contract_value,
      terms_and_conditions,
      client_id,
      consultant_id,
      status,
    });

    res.status(201).json(newContract);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all contracts
const getContracts = async (req, res) => {
  try {
    const contracts = await Contract.findAll();
    res.status(200).json(contracts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get contract by ID
const getContractById = async (req, res) => {
  try {
    const { id } = req.params;
    const contract = await Contract.findByPk(id);
    if (!contract) return res.status(404).json({ message: 'Contract not found' });
    res.status(200).json(contract);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update contract
const updateContract = async (req, res) => {
  try {
    const { id } = req.params;
    const { contract_date, start_date, end_date, contract_value, terms_and_conditions, client_id, consultant_id, status } = req.body;

    const contract = await Contract.findByPk(id);
    if (!contract) return res.status(404).json({ message: 'Contract not found' });

    contract.contract_date = contract_date || contract.contract_date;
    contract.start_date = start_date || contract.start_date;
    contract.end_date = end_date || contract.end_date;
    contract.contract_value = contract_value || contract.contract_value;
    contract.terms_and_conditions = terms_and_conditions || contract.terms_and_conditions;
    contract.client_id = client_id || contract.client_id;
    contract.consultant_id = consultant_id || contract.consultant_id;
    contract.status = status || contract.status;

    await contract.save();
    res.status(200).json(contract);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete contract
const deleteContract = async (req, res) => {
  try {
    const { id } = req.params;
    const contract = await Contract.findByPk(id);
    if (!contract) return res.status(404).json({ message: 'Contract not found' });

    await contract.destroy();
    res.status(200).json({ message: 'Contract deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createContract, getContracts, getContractById, updateContract, deleteContract };
