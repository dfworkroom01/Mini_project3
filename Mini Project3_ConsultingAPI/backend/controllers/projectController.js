const Project = require('../models/projects');

// Create a new project
const createProject = async (req, res) => {
  try {
    const { name, description, start_date, end_date, client_id, consultant_id, status } = req.body;

    const newProject = await Project.create({
      name,
      description,
      start_date,
      end_date,
      client_id,
      consultant_id,
      status,
    });

    res.status(201).json(newProject);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all projects
const getProjects = async (req, res) => {
  try {
    const projects = await Project.findAll();
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get project by ID
const getProjectById = async (req, res) => {
  try {
    const { id } = req.params;
    const project = await Project.findByPk(id);
    if (!project) return res.status(404).json({ message: 'Project not found' });
    res.status(200).json(project);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update project
const updateProject = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, start_date, end_date, client_id, consultant_id, status } = req.body;

    const project = await Project.findByPk(id);
    if (!project) return res.status(404).json({ message: 'Project not found' });

    project.name = name || project.name;
    project.description = description || project.description;
    project.start_date = start_date || project.start_date;
    project.end_date = end_date || project.end_date;
    project.client_id = client_id || project.client_id;
    project.consultant_id = consultant_id || project.consultant_id;
    project.status = status || project.status;

    await project.save();
    res.status(200).json(project);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete project
const deleteProject = async (req, res) => {
  try {
    const { id } = req.params;
    const project = await Project.findByPk(id);
    if (!project) return res.status(404).json({ message: 'Project not found' });

    await project.destroy();
    res.status(200).json({ message: 'Project deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createProject, getProjects, getProjectById, updateProject, deleteProject };
