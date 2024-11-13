const Invoice = require('../models/invoices');

// Create a new invoice
const createInvoice = async (req, res) => {
  try {
    const { invoice_date, amount, due_date, project_id, status } = req.body;

    const newInvoice = await Invoice.create({
      invoice_date,
      amount,
      due_date,
      project_id,
      status,
    });

    res.status(201).json(newInvoice);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all invoices
const getInvoices = async (req, res) => {
  try {
    const invoices = await Invoice.findAll();
    res.status(200).json(invoices);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get invoice by ID
const getInvoiceById = async (req, res) => {
  try {
    const { id } = req.params;
    const invoice = await Invoice.findByPk(id);
    if (!invoice) return res.status(404).json({ message: 'Invoice not found' });
    res.status(200).json(invoice);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update invoice
const updateInvoice = async (req, res) => {
  try {
    const { id } = req.params;
    const { invoice_date, amount, due_date, project_id, status } = req.body;

    const invoice = await Invoice.findByPk(id);
    if (!invoice) return res.status(404).json({ message: 'Invoice not found' });

    invoice.invoice_date = invoice_date || invoice.invoice_date;
    invoice.amount = amount || invoice.amount;
    invoice.due_date = due_date || invoice.due_date;
    invoice.project_id = project_id || invoice.project_id;
    invoice.status = status || invoice.status;

    await invoice.save();
    res.status(200).json(invoice);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete invoice
const deleteInvoice = async (req, res) => {
  try {
    const { id } = req.params;
    const invoice = await Invoice.findByPk(id);
    if (!invoice) return res.status(404).json({ message: 'Invoice not found' });

    await invoice.destroy();
    res.status(200).json({ message: 'Invoice deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createInvoice, getInvoices, getInvoiceById, updateInvoice, deleteInvoice };
