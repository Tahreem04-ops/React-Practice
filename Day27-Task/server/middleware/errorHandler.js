import logger from "../logger.js";

const errorHandler = (err, req, res, next) => {
  logger.error({
    message: err.message,
    method: req.method,
    url: req.originalUrl,
    time: new Date().toISOString(),
  });

  res.status(500).json({
    success: false,
    message: "Internal Server Error",
  });
};

export default errorHandler;