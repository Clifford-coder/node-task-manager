const getAllTasks = (req, res) => {
  res.send('All tasks');
};

const createTask = (req, res) => {
  console.log('hello ', req.body);
  res.json(req.body);
};

const getTask = (req, res) => {
  console.log({ id: req.params.id });
  res.json({ id: req.params.id });
};

const updateTask = (req, res) => {
  res.send('Update task');
};

const deleteTask = (req, res) => {
  res.send('delete task');
};

module.exports = {
  getAllTasks,
  createTask,
  updateTask,
  deleteTask,
  getTask,
};
