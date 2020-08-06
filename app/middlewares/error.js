const logger = require('../utils/log');

module.exports = function Error(err, req, res, next) {
  logger.error(err.message);
  res.status(500).send({ message: 'Deu ruim...' });
};
