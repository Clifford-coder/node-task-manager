const express = require('express');

const tasks = require('./routes/tasks');

const app = express();

//middlewares
app.use(express.json()); //to be able to get the date in req.body

//routes
app.get('/hell', (req, res) => {
  res.send('<h1>Hell</h1>');
});

app.use('/api/v1/tasks', tasks);
//app.get('api/v1/tasks') - get all task
//app.post('api/v1/tasks') - create new task.
//app.get(api/v1/task/:id) - get a single task
//app.patch(api/v1/tasks/:id) - to edit a single task
//app.delete(api/v1/tasks/:id) - to delete task

const port = 3000;

app.listen(port, console.log(`Server is running on port ${port} ...`));
