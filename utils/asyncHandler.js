 function controllerAsyncHandler(fn) {
  return async (req, res, next) => {
    try {
      await fn(req, res);
    } catch (err) {
      next(err);
    }
  };
};

 function middlewareAsyncHandler(fn) {
  return async (req, res, next) => {
    try {
      await fn(req, res, next);
    } catch (err) {
      next(err);
    }
  };
};

module.exports = {
  controllerAsyncHandler,
  middlewareAsyncHandler
}