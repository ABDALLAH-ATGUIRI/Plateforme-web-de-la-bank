const messageErr = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";
  res.status(err.statusCode).json({
    status: err.status,
    statusCode : err.statusCode,
    message: err.message
  });
};

module.exports = { messageErr };
