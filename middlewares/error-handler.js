const { CustomErrorApi } = require('../errors/CustomErrorApi');

const errorHandler = (err, req, res, next) => {
  if (err instanceof CustomErrorApi) {
    console.log('hiiiiiiii', err.message);
    return res.status(err.statusCode).json({ msg: err.message });
  }
  res.status(500).json({ msg: err });
};

module.exports = errorHandler;
