// controllers/taskController.js
const Task = require('../models/Task');

const createTask = async (req, res) => {
  const { title, description, status } = req.body;

  const task = new Task({
    title,
    description,
    status,
    user: req.userId,  
  });

  await task.save();
  res.status(201).json(task);
};

const getTasks = async (req, res) => {
  const tasks = await Task.find({ user: req.userId });
  res.status(200).json(tasks);
};

module.exports = { createTask, getTasks };
