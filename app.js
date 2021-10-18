const express = require('express');
require('dotenv').config();

const tasks = require('./routes/tasks');
const connectDB = require('./db/connect');
const notFound = require('./middlewares/not-found');
const errorHandler = require('./middlewares/error-handler');

const app = express();

//middlewares
app.use(express.static('./public')); //to serve the frontend of the application
app.use(express.json()); //to be able to get the date in req.body

app.use('/api/v1/tasks', tasks);
app.use(notFound);
app.use(errorHandler);

//routes
//app.get('api/v1/tasks') - get all task
//app.post('api/v1/tasks') - create new task.
//app.get(api/v1/task/:id) - get a single task
//app.patch(api/v1/tasks/:id) - to edit a single task
//app.delete(api/v1/tasks/:id) - to delete task

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`Server is running on port ${port} ...`));
  } catch (error) {
    console.error(error);
  }
};

start();
