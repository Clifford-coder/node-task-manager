const notFound = (req, res) =>
  res.status(404).send('this route does not exist');

module.exports = notFound;
