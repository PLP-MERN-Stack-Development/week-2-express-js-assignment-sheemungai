const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  res.status(err.statusCode || 500).json({
    error: err.name || 'InternalServerError',
    message: err.message || 'Something went wrong'
  });
};
module.exports = errorHandler;
