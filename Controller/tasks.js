const statusCodes = require('../utils/statusCodes');
const Task = require("../Models/tasks");
const {
  ForbiddenError,
  NotFoundError,
} = require("../utils/baseError");

// Create
const create = async function (req, res) {
  const check = await Task.find({
    userName: req.userName,
    title: req.body.title,
  });

  if (check) 
    throw new ForbiddenError("Task Already exists");

  const task = new Task({
    userName: req.userName,
    title: req.body.title,
    status: req.body.status,
    endDate: req.body.endDate,
    startDate: req.body.startDate,
  });

  await task.save();
  
  res.status(statusCodes.success.Created).send(`Task has been added`);
};

// Read
const readAll = async function (req, res) {
  const query = {userName: req.userName};

  if (req.query.status && typeof req.query.status === 'string')
    query.status = req.query.status

  const tasks = await Task.find(query);

  if (!tasks.length)
    throw new NotFoundError('No tasks yet');

  res.send(tasks);
}

const readOne = async function (req, res) {
  const task = await Task.findById(req.id);

  if (!task || task.userName !== req.userName)
    throw new NotFoundError('No task with this ID');

  res.send(task);
}

// Update
const updateOne = async function (req, res) {
  const task = await Task.findById(req.id);

  if (!task || task.userName !== req.userName)
    throw new NotFoundError('No task with this ID');

  task.title = req.body.title;
  task.status = req.body.status;
  task.startDate = req.body.startDate;
  task.endDate = req.body.endDate;

  await task.save();

  res.send(`Task has been updated`);
}

// Delete

const deleteOne = async function (req, res) {
  const task = await Task.findOneAndDelete({_id: req.id, userName: req.userName});

  if (!task || task.userName !== req.userName)
    throw new NotFoundError('No task with this ID');
  
  res.send(`Task has been deleted`);
}

module.exports = {
  create,
  readAll,
  readOne,
  updateOne,
  deleteOne
}