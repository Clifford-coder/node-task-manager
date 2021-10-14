//connect to the mongodb using mongoose
const mongoose = require('mongoose');

const connectDB = (url) =>
  mongoose.connect(url, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });

module.exports = connectDB;
