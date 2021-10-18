class CustomErrorApi extends Error {
  constructor(msg, statusCode) {
    super(msg);
    this.statusCode = statusCode;
  }
}

const createCustomError = (msg, statusCode) => {
  return new CustomErrorApi(msg, statusCode);
};

module.exports = { createCustomError, CustomErrorApi };
